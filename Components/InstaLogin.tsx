import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ActivityIndicator, Alert, Image } from 'react-native';

const InstaLogin = () => {
    const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
              uri: 'https://icon-library.com/images/white-instagram-icon/white-instagram-icon-9.jpg',
            }} />
      </View>
      <TextInput
        autoCapitalize='none'
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
      />
      {/* <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Home1')}>
        <Text style={styles.loginLabel}>Login</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerLabel}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'#14171A'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height:100,
    width:100
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 12,
  },
  login: {
    // backgroundColor: '#3B82F6',
    borderRadius: 8,
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 16,
  },
  loginLabel: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  register: {
    backgroundColor: '#fff',
    fontSize: 16,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 16,
  },
  registerLabel: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

export default InstaLogin;