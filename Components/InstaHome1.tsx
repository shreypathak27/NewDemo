import React, { createContext, useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context1 } from '../App.tsx'


const HomeScreen1 = ({  }) => {
  const context = useContext(Context1)

  const [isPlay1, setIsPlay1] = useState(true);

  const handlePress1 = () => {
    setIsPlay1(!isPlay1);
  };

  const imageUri1 = isPlay1
    ? 'https://cdn.iconscout.com/icon/free/png-256/free-play-333-458838.png'
    : 'https://cdn-icons-png.flaticon.com/256/151/151859.png';

  const [isPlay2, setIsPlay2] = useState(true);

  const handlePress2 = () => {
    setIsPlay2(!isPlay2);
  };

  const imageUri2 = isPlay2
    ? 'https://cdn.iconscout.com/icon/free/png-256/free-play-333-458838.png'
    : 'https://cdn-icons-png.flaticon.com/256/151/151859.png';

  const [isPlay3, setIsPlay3] = useState(true);

  const handlePress3 = () => {
    setIsPlay3(!isPlay3);
  };

  const imageUri3 = isPlay3
    ? 'https://cdn.iconscout.com/icon/free/png-256/free-play-333-458838.png'
    : 'https://cdn-icons-png.flaticon.com/256/151/151859.png';

  const [isPlay4, setIsPlay4] = useState(true);

  const handlePress4 = () => {
    setIsPlay4(!isPlay4);
  };

  const imageUri4 = isPlay4
    ? 'https://cdn.iconscout.com/icon/free/png-256/free-play-333-458838.png'
    : 'https://cdn-icons-png.flaticon.com/256/151/151859.png';



  const handlePress5 = () => {
    context.setSongName("Stress Relieving Song")
  }
    
  const handlePress6 = () => {
    context.setSongName("Meditation Song")
  }


  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
      <View style={styles.container}>
        <View>
          <Text style={styles.greetingText}>Hi Shrey!</Text>
        </View>
        <View style={styles.profileImage}></View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.shadowContainer}>
          <TextInput style={styles.input} placeholder='Search...' placeholderTextColor='grey' />
        </View>
      </View>
      <View style={styles.cardContainer}>

          <TouchableOpacity onPress={handlePress5}>
        <View style={[styles.card, { backgroundColor: 'black' }]}>
          
          <Text style={styles.cardText}>Stress day Relaxation</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={handlePress1}>
              <View style={styles.buttonContainer}>
                <Image source={{ uri: imageUri1 }} style={{ width: 25, height: 25 }} />
              </View>
            </TouchableOpacity>
            <View style={styles.timeContainer}>
              <Text style={styles.buttonText}>15 mins</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={handlePress6}>
        <View style={[styles.card, { backgroundColor: 'white' }]}>
          <Text style={[styles.cardText, { color: 'black' }]}>Evening Meditation to relax</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={handlePress2}>
              <View style={styles.buttonContainer}>
                <Image source={{ uri: imageUri2 }} style={{ width: 25, height: 25 }} />
              </View>
            </TouchableOpacity>
            <View style={[styles.timeContainer, { backgroundColor: '#ffedbd' }]}>
              <Text style={styles.buttonText}>12 mins</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

      </View>
      <View style={styles.featuredContainer}>
        <Text style={styles.featuredText}>Featured for you</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.activityContainer}>
        <View style={styles.activityCard}>
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Explore new activities</Text>
            <View style={styles.activityRow}>
              <View style={styles.activityButton}>
                <Text>10 min</Text>
              </View>
              <View style={styles.activitySpacer} />
              <View style={[styles.activityButton, { borderColor: 'white', borderWidth: 1, backgroundColor: '#f7d474' }]}>
                <Text>Evening</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageButtonContainer}>
            <TouchableOpacity onPress={handlePress3}>
              <View style={styles.imageButton}>
                <Image
                  source={{ uri: imageUri3 }}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <View style={[styles.activityCard, { backgroundColor: 'white' }]}>
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Meditation for sleep</Text>
            <View style={styles.activityRow}>
              <View style={[styles.activityButton, { backgroundColor: '#ffedbd' }]}>
                <Text>12 min</Text>
              </View>
              <View style={styles.activitySpacer} />
              <View style={[styles.activityButton, { borderColor: '#a8a8a8', borderWidth: 1, backgroundColor: 'white' }]}>
                <Text>Sleep</Text>
              </View>
              <View style={styles.activitySpacer} />
              <View style={[styles.activityButton, { borderColor: '#a8a8a8', borderWidth: 1, backgroundColor: 'white' }]}>
                <Text>Evening</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageButtonContainer}>
            <TouchableOpacity onPress={handlePress4}>
              <View style={[styles.imageButton, { backgroundColor: '#f7d474' }]}>
                <Image
                  source={{ uri: imageUri4 }}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }} />
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
    paddingRight: 25
  },

  input: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 25,
    padding: 20,

  },
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  greetingText: {
    fontSize: 30,
    paddingTop: 2,
    color: '#000'
  },
  profileImage: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: 'grey'
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 30,
  },
  shadowContainer: {
    shadowColor: 'grey',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  card: {
    width: 160,
    borderRadius: 25,
    padding: 15,
    justifyContent: 'space-between'
  },
  cardText: {
    color: "white",
    fontSize: 24,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonContainer: {
    height: 55,
    width: 55,
    borderRadius: 32.5,
    backgroundColor: '#f7d474',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: 'black'
  },
  timeContainer: {
    height: 35,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  featuredContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  featuredText: {
    color: '#474747',
    fontSize: 22
  },
  seeAllText: {
    color: '#a8a8a8',
    fontSize: 14,
    paddingTop: 3
  },
  activityContainer: {
    flex: 4,
  },
  activityCard: {
    flex: 12,
    backgroundColor: '#f7d474',
    borderRadius: 27,
    shadowColor: 'grey',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row'
  },
  activityContent: {
    flex: 3,
    paddingTop: 5,
    paddingLeft: 20,
    justifyContent: 'space-around',
    padding: 5
  },
  activityTitle: {
    fontSize: 18
  },
  activityRow: {
    flexDirection: 'row'
  },
  activityButton: {
    height: 35,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activitySpacer: {
    width: 10
  },
  imageButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  imageButton: {
    height: 55,
    width: 55,
    borderRadius: 32.5,
    backgroundColor: 'white',
  
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default HomeScreen1;
