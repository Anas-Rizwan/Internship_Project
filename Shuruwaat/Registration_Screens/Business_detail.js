import React from 'react'
import { View , Text ,StatusBar, TextInput , StyleSheet , TouchableOpacity , Alert, ScrollView} from 'react-native';
import { useState } from 'react';
import KeyboardAvoid from './Keyboardavoidwrapper';
import Header from './Header';
import Exp from './Exp';


const Business_detail = ({navigation , route}) => {    
    const Name= route.params.Name

    const [Company , setCompany] = useState("")
    const [Website , setWebsite] = useState("")
    const [C_address , setC_address] = useState("")


    const next= ()=>{
        let user = {
            Company,
            Website,
            C_address,
            }
            if( user.Company == "" || user.Website == "" || user.C_address == "" )
            {
                Alert.alert("SHRUAT Says","Fill all Inputs")
            }
            else{
                navigation.navigate('Financial_detail', {Name})
            } 
            
    }
    return (
        <>
        <KeyboardAvoid>
        <ScrollView automaticallyAdjustContentInsets={true}>
        <StatusBar translucent backgroundColor ="transparent" />
        <Header />


        <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Bussiness Detail</Text>
        </View>
        
        <View style={styles.view}>
            <Text style={styles.text}>Company Name</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Company Name"  onChangeText = {(Company) => setCompany(Company)} />
            <Text style={styles.text}>Company Address</Text>
            <TextInput placeholderTextColor="black" style={styles.input}placeholder="Company Address"  onChangeText = {(C_address) => setC_address(C_address)} />
            <Text style={styles.text}>Website</Text>
            <TextInput placeholderTextColor="black"  style={styles.input} placeholder="Website"  onChangeText = {(Website) => setWebsite(Website)} />
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


export default Business_detail;
