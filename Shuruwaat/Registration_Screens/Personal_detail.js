import React, { useState } from 'react'
import {  SafeAreaView,ScrollView,StatusBar,  StyleSheet,   TextInput,   View, Text,TouchableOpacity,Alert  } from 'react-native';
import KeyboardAvoid from './Keyboardavoidwrapper';
import Header from './Header';
import Exp from './Exp';

const Personal = ({navigation})=>{
    const [name , setname] = useState("")
    const [cnic , setcnic] = useState("")
    const [address , setaddress] = useState("")
    
    const next= ()=>{
        
        if(name == "" || cnic == "" || address == "")
        {
            Alert.alert("SHRUAT Says","Fill all Inputs")
            
        }
        else{
            navigation.navigate('Contact_detail', {Name:name})
        } 
        
        }

    return(
        <KeyboardAvoid>
        <ScrollView >
        <StatusBar translucent backgroundColor ="transparent" />
        <Header />

        <SafeAreaView>
        <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Personal Detail</Text>
        </View>
        
        <View style={styles.view}>
            <Text style={styles.text}>Name</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Name" Name={name}  onChangeText = {(name) => setname(name)} />
            <Text style={styles.text}>CNIC</Text>
            <TextInput placeholderTextColor="black" keyboardType="phone-pad" style={styles.input} placeholder="CNIC"  onChangeText = {(cnic) => setcnic(cnic)} />
            <Text style={styles.text}>Address</Text>
            <TextInput placeholderTextColor="black" style={styles.input}placeholder="Address"  onChangeText = {(address) => setaddress(address)} />
            </View>
        </SafeAreaView>
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

    )
}

const styles = StyleSheet.create({
    personal_view:{
        marginTop: 30,
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
        paddingVertical: 9,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',

    },
    btn:{
        marginTop: 23,
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})

export default Personal;