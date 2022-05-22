import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pic_some from "../Pic_some";
import Cart from "../Cart";
import Feather from "react-native-vector-icons/Feather"

const Tab_nav = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer theme={{ colors: { background: 'white' } }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let icon;
                        if (route.name === 'Pic-Some') {
                            icon = 'camera';
                        }
                        else if (route.name === 'Cart') {
                            icon = 'shopping-cart';
                        }
                        else if (route.name === 'Marketing') {
                            icon = 'smartphone';
                        }
                        else if (route.name === 'Profile') {
                            icon = 'users';
                        }
                        return <Feather name={icon} size={30} color={color} />
                    },
                    tabBarStyle: {
                        fontWeight: 'Bold',
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

            >

                <Tab.Screen name="Pic-Some" component={Pic_some} options={{  tabBarInactiveTintColor : "#008B8B", tabBarActiveTintColor: '#00CED1' }} />
                <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false , tabBarInactiveTintColor : "#008B8B", tabBarActiveTintColor: '#00CED1'}}/>
                </Tab.Navigator>



        </NavigationContainer>
    )
}

export default Tab_nav;
