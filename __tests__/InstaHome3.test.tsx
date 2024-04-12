import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen3 from '../Components/InstaHome3'; 

describe('HomeScreen3', () => {
    it('should handle number input and display its double', () => {
        const { getByPlaceholderText, getByText } = render(<HomeScreen3 />);
        const input = getByPlaceholderText('Enter a number');
        fireEvent.changeText(input, '4');
        expect(getByText('8')).toBeTruthy(); // Since 4 * 2 = 8
    });

    it('should increment count and calculate squared count correctly', () => {
        const { getByText } = render(<HomeScreen3 />);
        const goButton = getByText('GO');
        fireEvent.press(goButton);
        expect(getByText('Count: 1')).toBeTruthy();
        expect(getByText('Squared Count: 1')).toBeTruthy(); 
        fireEvent.press(goButton);
        expect(getByText('Count: 2')).toBeTruthy();
        expect(getByText('Squared Count: 4')).toBeTruthy(); 
    });
});
