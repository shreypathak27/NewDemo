import React, { useEffect, useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen1 from './Components/InstaHome1';
import HomeScreen2 from './Components/InstaHome2';
import HomeScreen3 from './Components/InstaHome3';
import HomeScreen4 from './Components/InstaHome4';
import {InstaSplash} from './Components/InstaSplash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './Components/NavBarNew';
import { Provider } from 'react-redux';
import { store } from './store';

const Tab = createBottomTabNavigator();
export const Context1 = createContext<{ songName: string | null, setSongName: (songName: string) => void } | null>(null);

function App() {
  const [songInfo, setSongInfo] = useState<{ songName: string | null }>({ songName: null });

  function setSongName(songName: string) {
    setSongInfo({ ...songInfo, songName });
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const tabIcons = [
    'https://cdn-icons-png.freepik.com/512/6821/6821151.png',
    'https://cdn.iconscout.com/icon/free/png-256/free-play-333-458838.png',
    'https://cdn-icons-png.flaticon.com/512/46/46271.png',
    'https://cdn-icons-png.flaticon.com/512/666/666201.png'
  ];

  if (isLoading) {
    return <InstaSplash />;
  }

  return (
    <Provider store={store}>
      <Context1.Provider value={{ ...songInfo, setSongName }}>
        <NavigationContainer>
          <Tab.Navigator tabBar={(props) => <MyTabBar {...props} tabIcons={tabIcons} />}>
            <Tab.Screen name="Home" component={HomeScreen1} options={{ headerShown: false }} />
            <Tab.Screen name="Play" component={HomeScreen2} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={HomeScreen3} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={HomeScreen4} options={{ headerShown: false }} />
          </Tab.Navigator>
        </NavigationContainer>
      </Context1.Provider>
    </Provider>
  );
}

export default App;
