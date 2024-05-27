import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OfferFeed from '../screens/OfferFeed';
import OfferDetails from '../screens/OfferDetails';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OfferFeed">
        <Stack.Screen name="OfferFeed" component={OfferFeed} />
        <Stack.Screen name="OfferDetails" component={OfferDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
