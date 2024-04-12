import React, { useContext, useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context1 } from '../App';
import { fetchTopTracks } from '../utility/LastFmApi';

interface Props {}

interface ContextType {
  songName: string; 
}

const HomeScreen2: React.FC<Props> = () => {
  const context = useContext(Context1);
  const songName  = context?.songName ?? 'No song';
  const [tracks, setTracks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadTopTracks = async () => {
            const topTracks = await fetchTopTracks('Cher');
            setTracks(topTracks);
            setLoading(false);
        };

        loadTopTracks();
    }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Currently playing: {songName}</Text>
          </View>
        </View>
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={tracks}
                    keyExtractor={item => item.url}
                    renderItem={({ item }) => (
                        <Text>{item.name} by {item.artist.name}</Text>
                    )}
                />
            )}
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
