import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react-native';
import OfferFeed from '../src/screens/OfferFeed';
import OfferDetails from '../src/screens/OfferDetails';
import { mockResponse } from '../src/api/mockData';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Mock the setTimeout to immediately resolve
jest.useFakeTimers();

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OfferFeed" component={OfferFeed} />
        <Stack.Screen name="OfferDetails" component={OfferDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

test('renders offer feed correctly', async () => {
  const { getByText } = render(<AppNavigator />);

  // Fast-forward until all timers have been executed
  act(() => {
    jest.runAllTimers();
  });

  await waitFor(() => {
    expect(getByText('20% Cashback on Electronics')).toBeTruthy();
    expect(getByText('10% Cashback on Groceries')).toBeTruthy();
  });
});

test('navigates to offer details when an offer is pressed', async () => {
  const { getByText } = render(<AppNavigator />);

  act(() => {
    jest.runAllTimers();
  });

  await waitFor(() => {
    expect(getByText('20% Cashback on Electronics')).toBeTruthy();
  });

  fireEvent.press(getByText('20% Cashback on Electronics'));

  await waitFor(() => {
    expect(getByText('Get 20% cashback on all electronics purchases over $100.')).toBeTruthy();
  });
});

test('calls console.log when claim button is pressed in offer details', async () => {
  console.log = jest.fn();
  const { getByText, debug } = render(<AppNavigator />);

  act(() => {
    jest.runAllTimers();
  });

  await waitFor(() => {
    expect(getByText('20% Cashback on Electronics')).toBeTruthy();
  });

  fireEvent.press(getByText('20% Cashback on Electronics'));

  await waitFor(() => {
    expect(getByText('Get 20% cashback on all electronics purchases over $100.')).toBeTruthy();
  });

  // Use debug to print the current state of the rendered tree
  debug();

  const claimButton = getByText('Claim Offer');
  fireEvent.press(claimButton);

  debug();
});
