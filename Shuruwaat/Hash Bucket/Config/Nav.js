import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer theme={{colors:{background: 'white'}}}>
   
      
      <Stack.Navigator>
        <Stack.Screen name="Pic_some" component={Pic_some} options={ {headerShown: false}}/>
        <Stack.Screen name="Cart" component={Contact_detail} options={ {headerShown: false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Nav;