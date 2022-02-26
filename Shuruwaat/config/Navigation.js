import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personal_detail from '../Registration_Screens/Personal_detail';
import Contact_detail from '../Registration_Screens/Contact_detail';
import Business_detail from '../Registration_Screens/Business_detail';
import Financial_detail from '../Registration_Screens/Financial_detail';
import Sheet from '../Registration_Screens/Sheet';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={{colors:{background: 'white'}}}>
   
      
      <Stack.Navigator>
        <Stack.Screen name="Personal_detail" component={Personal_detail} options={ {headerShown: false}}/>
        <Stack.Screen name="Contact_detail" component={Contact_detail} options={ {headerShown: false}} />
        <Stack.Screen name="Business_detail" component={Business_detail} options={ {headerShown: false}} />
        <Stack.Screen name="Financial_detail" component={Financial_detail} options={ {headerShown: false}} />
        <Stack.Screen name="Sheet" component={Sheet} options={ {headerShown: false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Navigation;