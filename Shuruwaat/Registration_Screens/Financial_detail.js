import React from 'react'
import { View , Text ,StatusBar, Image   , StyleSheet , TouchableOpacity , Alert, ScrollView,TextInput} from 'react-native';
import { useState } from 'react';
import KeyboardAvoid from './Keyboardavoidwrapper';
import Exp from './Exp';
import { Slider } from 'react-native-elements';

const Financial_detail = ({navigation , route}) => {
const Name= route.params.Name

//    States For Sliders
const [revenue , setrevenue] = useState(25)
const [other , setother] = useState(30)
const [amount, setamount] = useState(15)



//    States For Entities
    const [gross , setgross] = useState("")
    const [income , setincome] = useState(250)
    const [lastmonth , setlastmonth] = useState("")
    const [secondlastmonth , setsecondlastmonth] = useState("")
    const [thirdlastmonth , setthirdlastmonth] = useState("")


    

    const get_fund= ()=>{
         if( gross== "" || lastmonth=="" || secondlastmonth=="" || thirdlastmonth==""  ){
             Alert.alert("SHRUAT Says","Fill all the Box")
            }
         else{
            navigation.navigate('Sheet', {Name , Revenue:revenue , Income:income, L_month:lastmonth, S_month:secondlastmonth,T_month:thirdlastmonth , Other:other, Amount:amount})
        }
    }  
           
    
    return (
        <>
        <KeyboardAvoid>
        <ScrollView >
        <StatusBar translucent backgroundColor ="transparent" />
        <View style={styles.header_view}>
        <Image  source={require('../assets/logo.png')} style={styles.Image} />
      </View>


        <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Financial Detail</Text>
        </View>

        <View style={styles.view}>

            <Text style={styles.text}>Annual Revenue</Text>
            <View style={{  justifyContent: 'center', alignItems: 'center',}}>
                <Slider 
                style={{  width: '80%' }}
                    value={revenue}
                    onValueChange={(revenue) => setrevenue(revenue)}
                    thumbStyle={{ height: 20, width: 20}}
                    trackStyle={{ height: 5}}
                    minimumTrackTintColor="#fcd41d"
                    maximumTrackTintColor="#e6e6b5"
                    minimumValue={5}
                    maximumValue={100}
                    thumbTintColor={'#fca74c'}
                    step={1}
                />
                <Text style={styles.text}>Revenue: {revenue}L</Text>
                </View>            
    
            <View style={styles.D_view}>
            <Text style={styles.D_text}>Gross Profit</Text>
            <TextInput keyboardType="phone-pad" placeholderTextColor="black" style={styles.input} placeholder="Gross"  onChangeText = {(gross) => setgross(gross)} />
            </View>

            <View style={styles.D_view}>
            <Text style={styles.D_text}>Net Income</Text>
            <TextInput keyboardType="phone-pad" placeholderTextColor="black" style={styles.input} placeholder="Net Income"  onChangeText = {(income) => setincome(income)} />
            </View>            

           <View style={styles.D_view}> 
            <Text style={styles.text}>Revenue Of Last 3 Months</Text>
            <Text style={styles.R_text}>Last Month</Text>
            <TextInput keyboardType="phone-pad" placeholderTextColor="black" style={styles.input} placeholder="Don't Use ',' Between Digits"  onChangeText = {(lastmonth) => setlastmonth(lastmonth)} />
            <Text style={styles.R_text}>2nd Last Month</Text>
            <TextInput keyboardType="phone-pad" placeholderTextColor="black" style={styles.input} placeholder="Don't Use ',' Between Digits"  onChangeText = {(secondlastmonth) => setsecondlastmonth(secondlastmonth)} />
            <Text style={styles.R_text}>3rd Last Month</Text>
            <TextInput keyboardType="phone-pad" placeholderTextColor="black" style={styles.input} placeholder="Don't Use ',' Between Digits"  onChangeText = {(thirdlastmonth) => setthirdlastmonth(thirdlastmonth)} />
          </View> 
           
           
            <Text style={styles.text}>Other Digital Expenses</Text>
            <View style={{  justifyContent: 'center', alignItems: 'center',}}>
                <Slider 
                style={{  width: '80%' }}
                    value={other}
                    onValueChange={(other) => setother(other)}
                    thumbStyle={{ height: 20, width: 20}}
                    trackStyle={{ height: 5}}
                    minimumTrackTintColor="#fcd41d"
                    maximumTrackTintColor="#e6e6b5"
                    minimumValue={1}
                    maximumValue={100}
                    thumbTintColor={'#fca74c'}
                    step={1}
                />
                <Text style={styles.text}>Other Digital Expenses: {other}L</Text>
                
                
                </View>                 
            <Text style={styles.text}>Required Amount</Text>
            <View style={{  justifyContent: 'center', alignItems: 'center',}}>
                <Slider 
                style={{  width: '80%' }}
                    value={amount}
                    onValueChange={(amount) => setamount(amount)}
                    thumbStyle={{ height: 20, width: 20}}
                    trackStyle={{ height: 5}}
                    minimumTrackTintColor="#fcd41d"
                    maximumTrackTintColor="#e6e6b5"
                    minimumValue={1}
                    maximumValue={33}
                    thumbTintColor={'#fca74c'}
                    step={1}
                />
                <Text style={styles.text}>Required Amount: {amount}% of Annual revenue</Text>
                </View>                 
            </View>

            <View  style={styles.btn}>
            <TouchableOpacity onPress={get_fund} style={styles.btn} activeOpacity={0.8}>
                <View style={styles.btn_view}>
                <Text style={styles.btn_text}>SHOW SHEET</Text>
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
    header_view:{
        backgroundColor: "#140b26",
        justifyContent: 'center',
        alignItems: 'center',
        height: '19%',
        borderBottomRightRadius: 70,
    
      },
      Image:{
        height: '50%',
        width: '50%',
      },
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
    D_view:{
        marginVertical: 15,
    },
    D_text:{
        color:'#140b26',
        marginBottom: 10,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    },
    R_text:{
        color:'#140b26',
        marginVertical: 10,
        fontSize: 12.5,
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
        alignItems: 'center',
    },
    btn_view:{
        elevation: 4,
        backgroundColor: '#fcd41c',
        borderWidth: 1,
        borderColor: '#fcd41d',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
    },
    btn_text:{
        color:'#fff',
        marginVertical: 10,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',

    },
    
   
})


export default Financial_detail;
