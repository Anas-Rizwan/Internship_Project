import React,{useState} from 'react'
import {  SafeAreaView,StyleSheet, View, Text,TouchableOpacity,Alert  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Sheet = ({route}) => {
    const Name =route.params.Name

    const  [checked, setchecked] = useState(false)

    const Goback = ()=>{
        if(checked == false){
            Alert.alert("SHRUAT Says","Checked the Box")
        }
        else{
            Alert.alert("SHRUAT Says",`Congratulations ${Name} Your application has accepted and is in queue. We'll contact you soon`)
        }
        
    }
    const total =  parseInt(route.params.L_month) + parseInt(route.params.S_month) + parseInt(route.params.T_month)
    return (
        <SafeAreaView>
        <View style={styles.head_view}>
            <View style={styles.view}>   
            <Text style={styles.head_text}>TERM SHEET</Text>
           
            <View style={styles.text_view}>   
            <Text style={styles.text}>Annual Revenue : <Text style={styles.inside_text}> {route.params.Revenue} L</Text></Text>
            <Text style={styles.text}>Net Income :<Text style={styles.inside_text}>  {route.params.Income} </Text></Text>
            <Text style={styles.text}>Revenue Of Last 3 Months :<Text style={styles.inside_text}> {total} </Text></Text>
            <Text style={styles.text}>Other Digital Expenses :  <Text style={styles.inside_text}>{route.params.Other} L</Text></Text>
            <Text style={styles.text}>Required Amount :<Text style={styles.inside_text}> {route.params.Amount}% of Annual Revenue </Text></Text>
            <Text style={styles.text}>Charging amount :<Text style={styles.inside_text}>  5%/month</Text></Text>
            </View>


            <View style={styles.toggle_view}>

                    <CheckBox style={styles.toggle}   tintColors={{ true: '#fcd41c', false: 'black' }} value={checked} onValueChange={(checked)=>setchecked(checked)}/>
                    <Text style={styles.toggle_text}>Have you agreed on above details</Text>
            </View>
                    

            <View  style={styles.btn}>
            <TouchableOpacity onPress={Goback} activeOpacity={0.8}>
                <View style={styles.btn_view}>
                <Text style={styles.btn_text}>I AGREE!</Text>
                </View>
            </TouchableOpacity>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    head_view:{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view:{
        alignItems: 'center',
        height: '90%',
        width: '90%',
        backgroundColor: '#140b26',
        borderRadius: 50,
    },
    text_view:{
        justifyContent: 'center',
        marginTop: 45,
    },
    head_text:{
        color:'#fcd41d',
        fontSize: 50 ,
        fontFamily: 'sans-serif-medium',
        marginTop: 55,
    },
    text:{
        marginLeft: 16,
        alignItems: 'flex-start',
        fontSize: 19,
        marginVertical: 15,
        fontFamily: 'sans-serif-medium',
        color:'#fff',
    },
    inside_text:{
        color:'#fcd41d',
        fontSize: 17,
        
    },
    btn_view:{
        elevation: 4,
        backgroundColor: '#fcd41c',
        borderWidth: 1,
        borderColor: '#fcd41d',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
    },
    btn_text:{
        color:'#fff',
        marginVertical: 10,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    },
    btn:{
        marginTop: 5 ,
        // marginVertical: 35,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggle_view:{
        flexDirection: 'row',
        marginVertical:20,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 50,
        backgroundColor:'#fff7f7',
    },
    toggle_text:{
        color:'#000',
        marginVertical: 10,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        marginRight: 10,
    },
    toggle:{
        marginLeft: 15,
    }
});

export default Sheet;
