import axios from 'axios';

const API_KEY = 'd92217b615132e0b107529314c2aa317'; 
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/'; 


interface Artist {
  name: string;
}

interface Track {
  name: string;
  url: string;
  artist: Artist;
}

interface TopTracksResponse {
  toptracks: {
    track: Track[];
  };
}


export const fetchTopTracks = async (artist: string): Promise<Track[]> => {
  try {
    const response = await axios.get<TopTracksResponse>(BASE_URL, {
      params: {
        method: 'artist.gettoptracks',
        artist: artist,
        api_key: API_KEY,
        format: 'json'
      }
    });
    return response.data.toptracks.track;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching top tracks:', error.response?.data || error.message);
    } else {
      console.error('Error fetching top tracks:', error);
    }
    return [];  
  }
};
