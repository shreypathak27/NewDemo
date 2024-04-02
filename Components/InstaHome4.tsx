import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InstaBottomNav from './InstaBottomNav';

function HomeScreen4() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#14171A' }}>
      <Text style = {{color:"white"}}>Home Screen 4</Text>
      <InstaBottomNav/>
    </View>
  );
}

export default HomeScreen4