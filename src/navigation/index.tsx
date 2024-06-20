import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ApartmentDetail from '../screens/apartmentDetail/ApartmentDetail';
import TopNavigation from '../routes';

const Navigation = () => {
    const Stack = createNativeStackNavigator();



    return (
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={ApartmentDetail} />
        <Stack.Screen name="Dashboard" component={TopNavigation} />
      </Stack.Navigator>
        </NavigationContainer>
      );
}

export default Navigation;