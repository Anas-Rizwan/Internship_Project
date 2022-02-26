import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import MarketingData from './MarketingData'
import MenuData from './MenuData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';



MaterialCommunityIcons.loadFont()
Entypo.loadFont()
Feather.loadFont()
const Marketing = (focused) => {
    var phone=+923002694029
    var message="company name"
    function sendWhatsapp(){
        console.warn("han whatsapp wala")
        url='https://web.whatsapp.com/'+phone+'&text='+message;
        Linking.openURL(url)
    }
    function sendSms() {
        console.warn("han sms wala")
        url = `sms:${phone}${Platform.OS === "ios" ? "&" : "?"}body=${message}`
        Linking.openURL(url);
      }

      const [state, setstate] = useState()
      const current=()=>{
          setstate(true)
      }
    return (
    <>
        <View style={styles.header_view}>
        <Image  source={require('../assets/logo.png')} style={styles.Image} />
        </View>

        <View style={styles.prom_text_view}>
            <Text style={styles.prom_text}>Let's Promote</Text>
        </View>

        <View style={styles.Prom_box_view}>
            {MarketingData.map((item , i)=>(
            <TouchableOpacity activeOpacity={0.8}>
                <View  key={i} style={styles.Prom_box}>
                    {item.id == 1 || item.id == 2 || item.id == 3 ?  <MaterialCommunityIcons style={styles.icon} name={item.bigicon} size={30} color={"#f8e7a1"} /> : <Entypo style={styles.icon} name={item.bigicon} size={30} color={"#f8e7a1"}/>}
                    <Text style={styles.prom_box_text}>{item.title}</Text>
                    <MaterialCommunityIcons name={item.smallicon} size={25} style={styles.icon} color={'#e4e4e4'}/>

                    </View>
            </TouchableOpacity>
            ))}
        </View>
{/* 
        <View style={styles.menu_box_view}>
            {MenuData.map((item )=>(
                <TouchableOpacity  >
                    <View style={styles.menu_box}>
                    {item.id == 2 || item.id==4 ? <Feather  name={item.icon} size={30}  /> : <MaterialCommunityIcons name={item.icon} size={30}  />}
                    <Text style={styles.menu_box_text}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View> */}

      </>
    )
}


const styles = StyleSheet.create({
    header_view:{
        backgroundColor: "#140b26",
        justifyContent: 'center',
        alignItems: 'center',
        height: '35%',
        borderBottomRightRadius: 70,
    
      },
    Image:{
        height: '50%',
        width: '50%',
    },
    prom_text_view:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    prom_text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#171717',
        marginVertical: 30,
    },
    Prom_box_view:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    Prom_box:{
        backgroundColor: "#f5f5f5",
        paddingVertical: 10,
        marginBottom: 28,
        width: '70%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f5f5f5',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    prom_box_text:{
        color:'#3b3744',
        fontWeight: 'bold',
    },
    icon:{
        // opacity:0.9
    },
    menu_box_view:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
    },
    menu_box:{
        alignItems: 'center',
    }
});
export default Marketing
