// import HomeScreen3 from "../Components/InstaHome3"
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';


// describe('HomeScreen3 component', () => {
//   it('renders correctly', () => {
//     const { getByPlaceholderText, getByText } = render(<HomeScreen3 />);
    
//     // Check if TextInput and initial text elements are rendered correctly
//     const inputElement = getByPlaceholderText('Enter a number');
//     expect(inputElement).toBeTruthy();

//     const doubleNumberText = getByText('0');
//     expect(doubleNumberText).toBeTruthy();

//     const countText = getByText('Count: 0');
//     expect(countText).toBeTruthy();

//     const squaredCountText = getByText('Squared Count: 0');
//     expect(squaredCountText).toBeTruthy();

//     // Check if Button is rendered
//     const buttonElement = getByText('GO');
//     expect(buttonElement).toBeTruthy();
//   });

//   it('updates state and renders correctly on button press', () => {
//     const { getByPlaceholderText, getByText } = render(<HomeScreen3 />);
    
//     const inputElement = getByPlaceholderText('Enter a number');
//     const buttonElement = getByText('GO');

//     // Trigger onChangeText and onPress events
//     fireEvent.changeText(inputElement, '5');
//     fireEvent.press(buttonElement);

//     // Check if updated state values are rendered correctly
//     const doubleNumberText = getByText('10');
//     expect(doubleNumberText).toBeTruthy();

//     const countText = getByText('Count: 1');
//     expect(countText).toBeTruthy();

//     const squaredCountText = getByText('Squared Count: 1');
//     expect(squaredCountText).toBeTruthy();
//   });
// });
