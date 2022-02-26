import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Marketing from '../Bottom_Tab_Screens/Marketing';
import Home from '../Bottom_Tab_Screens/Home';
import Network from '../Bottom_Tab_Screens/Network';
import Profile from '../Bottom_Tab_Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab_navigation = () => {
    const Tab = createBottomTabNavigator();
    
    return (
        <NavigationContainer theme={{colors:{background: 'white'}}}>
            {/* backBehavior: "none", */}
    <Tab.Navigator  
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({  color, size }) => {
                        let icon;
                            if (route.name === 'Home') {
                                icon = 'home';
                            } 
                            else if (route.name === 'Network') {
                                icon = 'users';
                            }
                            else if (route.name === 'Marketing') {
                                icon =  'smartphone';
                            }
                            else if (route.name === 'Profile') {
                                icon = 'users';
                            }
                            return <Feather  name={icon} size={size} color={color}/>                    
                },
                tabBarStyle:{
                    height: '8%',
                    borderTopColor: "transparent",
                    backgroundColor: 'white',
                    shadowColor: "black",
                    shadowOffset: {
                        width: '10%',
                        height: '10%',
                    },
                    shadowOpacity: 0.4,
                    shadowRadius: 16.00,
                    elevation: 24,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                },
                
            })}
            
            tabBarOptions={{
                activeTintColor: '#fbd323',
                inactiveTintColor: '#e0e0e0',
                labelStyle: {
                fontSize: 13,
                marginBottom: 5,
            },
        }}
>
        
      <Tab.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Tab.Screen name="Network" component={Network} options={{ headerShown: false }}/>
      <Tab.Screen name="Marketing" component={Marketing} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
    
        
      
    </NavigationContainer>
    )
}

export default Tab_navigation;

