import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import HomeScreen4 from '../Components/InstaHome4'; 

const mockStore = configureStore([]);
const initialState = { balance: { value: 100 } };
let store:any;

describe('HomeScreen4', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('should render initial balance and respond to deposit and withdrawal', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomeScreen4 />
      </Provider>
    );

    expect(getByText('Current Balance: 100$')).toBeTruthy();

    fireEvent.press(getByText('Deposit 10$'));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'balance/deposit', payload: 10 });

    fireEvent.press(getByText('Withdraw 10$'));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'balance/withdraw', payload: 10 });
  });

  it('should load more items when Load More button is pressed', () => {
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <HomeScreen4 />
      </Provider>
    );

    fireEvent.press(getByText('Load More'));
    expect(queryByText('Item 4')).toBeTruthy();
  });
});

