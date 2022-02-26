import React, { useState } from 'react'
import {  StyleSheet,   TextInput,   View, Text, TouchableOpacity, Alert,  } from 'react-native';

const Registration_form = ()=>{

    // states for persoanl_detail
    const [name , setname] = useState("")
    const [cnic , setcnic] = useState("")
    const [address , setaddress] = useState("")
    
    // states for contact_detail
    const [Email , setEmail] = useState("")
    const [Number , setNumber] = useState("")
    const [password , setpassword] = useState("")
    const [profile , setprofile] = useState("")
    
    // states for business_detail
    const [Company , setCompany] = useState("")
    const [Website , setWebsite] = useState("")
    const [C_address , setC_address] = useState("")
    
    // states for financial_detail
    const [revenue , setrevenue] = useState("")
    const [income , setincome] = useState("")
    const [months , setmonths] = useState("")
    const [other , setother] = useState("")


    const get_fund= ()=>{
        let user = {
            name,
            cnic,
            address,
            Email,
            Number,
            password,
            profile,
            Company,
            Website,
            C_address,
            revenue,
            income,
            months,
            other,
            }
            if(user.name == "" || user.cnic == "" || user.address == "" || user.Email == "" || user.Number == "" || 
               user.password == "" || user.profile == "" || user.Company == "" || user.Website == "" || user.C_address == ""
               || user.revenue == "" || user.income == "" || user.months == "" || user.other == "")
            {
                Alert.alert("SHRUAT Says","Fill all Inputs")
            }
            else{
                Alert.alert("SHRUAT Says", "Thanks" )
            } 
            
    }
    return(
        <>
        {/* <SafeAreaView> */}

            {/*  For persoanl_detail */}
        <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Personal Detail</Text>
        </View>
        
        <View style={styles.view}>
            <Text style={styles.text}>Name</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Name"  onChangeText = {(name) => setname(name)} />
            <Text style={styles.text}>CNIC</Text>
            <TextInput placeholderTextColor="black" keyboardType="phone-pad" style={styles.input} placeholder="CNIC"  onChangeText = {(cnic) => setcnic(cnic)} />
            <Text style={styles.text}>Address</Text>
            <TextInput placeholderTextColor="black" style={styles.input}placeholder="Address"  onChangeText = {(address) => setaddress(address)} />
            </View>


            {/* For Contact_detail */}
            <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Contact Detail</Text>
        </View>
        <View style={styles.view}>
            
            <Text style={styles.text}>Email</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Email" value={Email}  onChangeText = {(Email) => setEmail(Email)} />
            
            <Text style={styles.text}>Phone Number</Text>
            <TextInput placeholderTextColor="black" keyboardType="phone-pad" style={styles.input} placeholder="Phone Number"  onChangeText = {(Number) => setNumber(Number)} />
            
            <Text style={styles.text}>Set Password</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Password" secureTextEntry  onChangeText = {(password) => setpassword(password)} />
            
            <Text style={styles.text}>LinkedIn Profile</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="LinkedIn Profile "  onChangeText = {(profile) => setprofile(profile)} />
            </View>


            {/* For business_detail */}
            <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Bussiness Detail</Text>
        </View>
        
        <View style={styles.view}>
            <Text style={styles.text}>Company Name</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Company Name"  onChangeText = {(Company) => setCompany(Company)} />
            <Text style={styles.text}>Company Address</Text>
            <TextInput placeholderTextColor="black" style={styles.input}placeholder="Company Address"  onChangeText = {(C_address) => setC_address(C_address)} />
            <Text style={styles.text}>Website</Text>
            <TextInput placeholderTextColor="black" keyboardType="phone-pad" style={styles.input} placeholder="Website"  onChangeText = {(Website) => setWebsite(Website)} />
            </View>

            
            {/* For financial_detail */}

            <View style={styles.personal_view}>
            <Text style={styles.personal_text}>Financial Detail</Text>
        </View>
        
        <View style={styles.view}>
            <Text style={styles.text}>Revenue This Year</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Revenue This Year"  onChangeText = {(revenue) => setrevenue(revenue)} />
            <Text style={styles.text}>Net Income</Text>
            <TextInput placeholderTextColor="black" keyboardType="phone-pad" style={styles.input} placeholder="Net Income"  onChangeText = {(income) => setincome(income)} />
            <Text style={styles.text}>Revenue Of Last 3 Months</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Revenue Of Last 3 Months"  onChangeText = {(months) => setmonths(months)} />

            <Text style={styles.text}>Other Digital Expenses</Text>
            <TextInput placeholderTextColor="black" style={styles.input} placeholder="Other Digital Expenses"  onChangeText = {(other) => setother(other)} />
            
            </View>


            <TouchableOpacity onPress={get_fund} style={styles.btn}>
                <View style={styles.btn_view}>
                <Text style={styles.text}>GET FUND</Text>
                </View>
            </TouchableOpacity>
        {/* </SafeAreaView> */}
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
    btn:{
        marginTop: 25,
        marginVertical: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_view:{
        backgroundColor: '#fcd41c',
        borderWidth: 1,
        borderColor: '#fcd41d',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
    }
})

export default Registration_form;