import React, { useState } from 'react';
import { FlatList, ListRenderItem, View, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../balanceSlice';

interface Item {
  id: string;
  title: string;
}

const DATA: Item[] = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  // Add more data items as needed
];

const HomeScreen4 = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => {
    console.log('Bank processing...');
    return state.balance.value;
  });

  const [items, setItems] = useState<Item[]>(DATA);

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <View style={{ padding: 20 }}>
      <Text>{item.title}</Text>
    </View>
  );

  const keyExtractor = (item: Item) => item.id;

  const loadMoreData = () => {
    const newData = [
      ...items,
      { id: String(items.length + 1), title: `Item ${items.length + 1}` },
    ];
    setItems(newData);
  };


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
      <View style = {{ marginTop: 20}}/>
      <Text style ={styles.title}> List! </Text>
      <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5} // Load more data when 50% of the list is scrolled
      ListFooterComponent={() => (
        <View style={{ padding: 10 }}>
          <Button onPress={loadMoreData}>Load More</Button>
        </View>
      )}
    />
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
