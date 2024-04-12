import React, {ReactNode} from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Context1 } from '../App'; 
import HomeScreen1 from '../Components/InstaHome1'; 


const mockSetSongName = jest.fn();
interface WrapperProps {
    children: ReactNode;
  }
  
  const wrapper: React.FC<WrapperProps> = ({ children }) => (
    <Context1.Provider value={{ songName: '', setSongName: jest.fn() }}>
      {children}
    </Context1.Provider>
  );

describe('HomeScreen1', () => {
  it('renders correctly with initial state', () => {
    const { getByText, getByPlaceholderText } = render(<HomeScreen1 />, { wrapper });
    expect(getByText('Hi Shrey!')).toBeTruthy();
    expect(getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('toggles play state and updates image when play buttons are pressed', () => {
    const { getByTestId } = render(<HomeScreen1 />, { wrapper });
    const playButton = getByTestId('playButton1');
    const playImage = getByTestId('playImage1');
    fireEvent.press(playButton);
    expect(playImage.props.source.uri).toBe('https://cdn-icons-png.flaticon.com/256/151/151859.png');
  });

  it('calls setSongName with the correct value when card is pressed', () => {
    const { getByText } = render(<HomeScreen1 />, { wrapper });
    fireEvent.press(getByText('Stress day Relaxation'));
    expect(mockSetSongName).toHaveBeenCalledWith('Stress Relieving Song');
  });
});

