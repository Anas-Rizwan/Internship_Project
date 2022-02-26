import React from 'react'
import {   Image,  StyleSheet, View,   } from 'react-native';

const Header = ()=>{
    return(
        <View style={styles.header_view}>
        <Image  source={require('../assets/logo.png')} style={styles.Image} />
      </View>
     
    )
}

const styles = StyleSheet.create({
      header_view:{
        backgroundColor: "#140b26",
        justifyContent: 'center',
        alignItems: 'center',
        height: '38%',
        borderBottomRightRadius: 70,
      },
      Image:{
        height: '50%',
        width: '50%',
      }
})

export default Header;