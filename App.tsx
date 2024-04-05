// In App.js in a new project

import * as React from 'react';
import { useEffect, useState, createContext } from 'react';
import {TouchableOpacity, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/InstaHome1';
import HomeScreen1 from './Components/InstaHome1';
import HomeScreen2 from './Components/InstaHome2';
import HomeScreen3 from './Components/InstaHome3';
import HomeScreen4 from './Components/InstaHome4';
import HomeScreen5 from './Components/InstaHome5';
import InstaLogin from './Components/InstaLogin';
import { InstaSplash } from './Components/InstaSplash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './Components/NavBarNew';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {store} from './store'
// import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export const Context1 = createContext(null);
export const Context2 = createContext(null);


function App() {
  const context1InitialState = {
  songName: null,
  };
  const [songInfo, setSongInfo] = useState(context1InitialState);
  function setSongName(songName:any) {
  const newState = { ...songInfo, songName };
  setSongInfo(newState);
  }

  const context1Setters = {
  setSongName,
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <InstaSplash />;
  }
  return (
    <Context1.Provider value={{ ...songInfo, ...context1Setters }}>
      <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator tabBar={(props:any) => <MyTabBar {...props} tabIcons={['https://cdn-icons-png.freepik.com/512/6821/6821151.png', 'https://cdn.iconscout.com/icon/free/png-256/free-play-333-458838.png', 'https://cdn-icons-png.flaticon.com/512/46/46271.png', 'https://cdn-icons-png.flaticon.com/512/666/666201.png']}/>}>
        <Tab.Screen name="a" component={HomeScreen1} options={{ headerShown: false }}/>
        <Tab.Screen name="e" component={HomeScreen2} options={{ headerShown: false }}/>
        <Tab.Screen name="u" component={HomeScreen3} options={{ headerShown: false }}/>
        <Tab.Screen name="i" component={HomeScreen4} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
    </Context1.Provider>
  );
}

export default App;