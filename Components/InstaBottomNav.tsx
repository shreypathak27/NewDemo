import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, View, Text, Button, Dimensions } from 'react-native';

function InstaBottomNav({ }) {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={{ width: screenWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: 16, paddingTop: 10, backgroundColor: '#14171A', borderTopWidth: 1, borderTopColor: '#54525a' }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <ImageBackground source={{ uri: 'https://cdn-icons-png.freepik.com/512/6821/6821151.png' }} style={styles.imageBackground}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <ImageBackground source={{ uri: 'https://cdn-icons-png.freepik.com/512/6821/6821151.png' }} style={styles.imageBackground}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home3')}>
          <ImageBackground source={{ uri: 'https://cdn-icons-png.freepik.com/512/6821/6821151.png' }} style={styles.imageBackground}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
          <ImageBackground source={{ uri: 'https://cdn-icons-png.freepik.com/512/6821/6821151.png' }} style={styles.imageBackground}>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home5')}>
          <ImageBackground source={{ uri: 'https://cdn-icons-png.freepik.com/512/6821/6821151.png' }} style={styles.imageBackground}>
          </ImageBackground>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    padding: 20,
  }
});

export default InstaBottomNav;
