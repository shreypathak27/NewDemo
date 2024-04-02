import React, { useCallback, useContext, useMemo, useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../balanceSlice';

function HomeScreen3() {
    const balance = useSelector((state) => {
        console.log('Bank processing...');
        return state.balance.value;
      });
      
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  // useCallback hook to memoize the increment function
  const increment = useCallback(() => {
    console.log('Count going up!...');
    setCount((prevCount) => prevCount + 1);
  }, []);

  // useMemo hook to memoize the squared value of count
  const squaredCount = useMemo(() => {
    console.log('Calculating squared count...');
    return count * count;
  }, [count]);
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <Text>Squared Count: {squaredCount}</Text>
      <Button onPress={increment} > GO </Button>
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
    }
    ,
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  

export default HomeScreen3