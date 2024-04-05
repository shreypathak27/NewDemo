import React, { useCallback, useContext, useMemo, useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../balanceSlice';

function HomeScreen3() {
    
    const [number, setNumber] = useState(0)
    const doubleNumber = useMemo( () => {
        return doublethenumber(number)
    }, [number])

    function doublethenumber(num:number){
        console.log("Doubling up")
        return num*2
    }
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('Count going up!...');
    setCount((prevCount) => prevCount + 1);
  };

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        keyboardType="numeric"
        onChangeText={(text) => {
          const parsedNumber = parseInt(text);
          setNumber(isNaN(parsedNumber) ? 0 : parsedNumber);
        }}
        placeholder="Enter a number"
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <Text>{doubleNumber}</Text>
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