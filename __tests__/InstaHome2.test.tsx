import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import HomeScreen2 from '../Components/InstaHome2'; 
import { Context1 } from '../App'; 

const customRender = (ui: React.ReactElement, { providerValues }: { providerValues: any }) => {
  return render(
    <Context1.Provider value={providerValues}>{ui}</Context1.Provider>
  );
};

describe('HomeScreen2', () => {
  it('renders with default context value', () => {
    const providerValues = { songName: 'Imagine' }; 
    const { getByText } = customRender(<HomeScreen2 />, { providerValues });
    expect(getByText(/Currently playing: Imagine/i)).toBeTruthy();
  });

  it('updates with dynamic context values', () => {
    const providerValues = { songName: 'Bohemian Rhapsody' }; 
    const { getByText } = customRender(<HomeScreen2 />, { providerValues });
    expect(getByText(/Currently playing: Bohemian Rhapsody/i)).toBeTruthy();
  });
});
