import React from 'react';
import {  SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from '../Registration_Screens/Header';
import Registration_form from '../Registration_Screens/Registration_form';
import KeyboardAvoid from '../Registration_Screens/Keyboardavoidwrapper';
import Exp from '../Registration_Screens/Exp';
import Personal_detail from '../Registration_Screens/Personal_detail';

const Registration = ()=>{
  return(
    <>
    {/* <SafeAreaView> */}
    <KeyboardAvoid>
    <StatusBar translucent backgroundColor ="transparent" />
    <ScrollView  >
    <Header />
      <Personal_detail />
    <Exp />
      </ScrollView>
    </KeyboardAvoid>
    {/* </SafeAreaView> */}
    {/* <KeyboardAvoid>
    
    <Header />
    <ScrollView  >
      <Personal_detail />
      <Registration_form />
     
    </ScrollView>


    </KeyboardAvoid> */}
    
</>

)}

export default Registration;
