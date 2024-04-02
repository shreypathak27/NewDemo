import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InstaBottomNav from './InstaBottomNav';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen5() {
  return (
    <LinearGradient colors={['#14171A', '#000000']} style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: "white" }}>Home Screen 5</Text>
        <InstaBottomNav />
      </View>
    </LinearGradient>
  );
}

export default HomeScreen5;