import * as React from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../balanceSlice';

function HomeScreen4() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => {
    console.log('Bank processing...');
    return state.balance.value;
  });


  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>       
        <View style={{flex: 0.1}}></View>
    <Text style={styles.title}>Your Personal Bank</Text>
      <View style={{ marginVertical: 40 }}>
      <Button onPress={() => { dispatch(deposit(10));}} >Deposit 10$</Button>
        <Button onPress={() => { dispatch(withdraw(10));}} >Withdraw 10$</Button>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Current Balance: {balance}$</Text>
      </View>
      </KeyboardAvoidingView>
      </SafeAreaView>
  );
}

export default HomeScreen4


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#eeeeee"
  }
  ,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
