import React, { useContext } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context1 } from '../App';

interface Props {}

interface ContextType {
  songName: string; 
}

const HomeScreen2: React.FC<Props> = () => {
  const context = useContext(Context1);
  const { songName } = context;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Currently playing: {songName}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#eeeeee"
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    height: 300,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen2;
