import React from 'react'
import { View , Text ,StatusBar, TextInput , SafeAreaView  , StyleSheet , TouchableOpacity , Alert, ScrollView} from 'react-native';
import { useState } from 'react';
import KeyboardAvoid from './Keyboardavoidwrapper';
import Header from './Header';
import Exp from './Exp';


const Contact_detail = ({navigation,route}) => {
    const Name= route.params.Name


    const [Email , setEmail] = useState("")
    const [Number , setNumber] = useState("")
    const [profile , setprofile] = useState("")

    const next= ()=>{
        let user = {
            Email,
            Number,
            profile,
            }
            if(user.Email == "" || user.Number == "" || user.profile == "" )
            {
                Alert.alert("SHRUAT Says","Fill all Inputs")
            }
            else{
                navigation.navigate('Business_detail',{Name})
                // Alert.alert("SHRUAT Says", "Thanks" )
            } 
            
    }
    return (
        <>
        <KeyboardAvoid>
        <ScrollView >
        <StatusBar translucent backgroundColor ="transparent" />
        <Header />


        <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Contact Detail</Text>
        </View>
        <View style={styles.view}>
            
            <Text style={styles.text}>Email</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Email" value={Email}  onChangeText = {(Email) => setEmail(Email)} />
            
            <Text style={styles.text}>Phone Number</Text>
            <TextInput placeholderTextColor="black" keyboardType="phone-pad" style={styles.input} placeholder="Phone Number"  onChangeText = {(Number) => setNumber(Number)} />
            
            <Text style={styles.text}>LinkedIn Profile</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="LinkedIn Profile "  onChangeText = {(profile) => setprofile(profile)} />
            </View>
            
            <View  style={styles.btn}>
            <TouchableOpacity onPress={next} activeOpacity={0.8}>
                <View style={styles.btn_view}>
                <Text style={styles.btn_text}>NEXT</Text>
                </View>
            </TouchableOpacity>
                </View>

<Exp />
                </ScrollView>
                </KeyboardAvoid>
        </>
    )
}

const styles = StyleSheet.create({
    personal_view:{
        marginTop: 15,
        marginHorizontal: 20,
    },
    personal_text:{
        color: '#120f21',
        fontSize: 25,
        fontFamily: 'sans-serif-medium',
    },
    view:{
        marginHorizontal: 25,
    },
    text:{
        color:'#120f21',
        marginVertical: 10,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    },
    input:{
        borderRadius: 23,
        paddingLeft: 20,
        borderWidth: 1,
    },
    btn:{
        marginTop: 15,
        marginVertical: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    btn_view:{
        elevation: 4,
        backgroundColor: '#fcd41c',
        borderWidth: 1,
        borderColor: '#fcd41d',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
    },
    btn_text:{
        color:'#fff',
        marginVertical: 10,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',

    }
})


export default Contact_detail;
