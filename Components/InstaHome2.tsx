import React, { useContext } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context1 } from '../App';
import { createStore } from 'redux';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { withdraw,deposit } from '../balanceSlice';



const HomeScreen2 = () => {
  const context = useContext(Context1)
  const {
  songName,
  } = context

  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();


  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
        <View style = {{height: 300, width: 300, backgroundColor: 'black', borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <Text style = {{color: 'white', fontSize: 20}}>Currently playing : {songName}</Text>
        </View>
        </View>
      
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#eeeeee"
  },
  input: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 25,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen2;
