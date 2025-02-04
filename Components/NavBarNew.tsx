import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

interface MyTabBarProps extends BottomTabBarProps {
  tabIcons: string[];
}

function MyTabBar({ state, descriptors, navigation, tabIcons }: MyTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;  

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true, 
          });
        
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused ? true : false }}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <Image
              source={{ uri: tabIcons[index] }}
              style={{ width: 30, height: 30, tintColor: isFocused ? 'black' : '#8e8e8e' }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 25,
    flex: 0.08,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
});

export default MyTabBar;
