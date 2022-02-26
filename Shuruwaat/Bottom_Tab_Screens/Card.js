import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

export default function Card(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>

        <View style={styles.card}>
        <View style={styles.bigIcon}>
            <Icon
                type="font-awesome"
                name={props.bigIcon}
                color='orange'
                size={30}
                iconStyle={{ marginTop: 3, opacity:0.5 }}
            />
            </View>
        <View>
            <Text style={styles.cardText}>{props.title}</Text>

        </View>
        <View style={styles.bigIcon}>
            <Icon
                type="font-awesome"
                name={props.smallIcon}
                color='lightgray'
                size={25}
                
            />
            </View>
        </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e9eaeb',
        marginHorizontal: 30,
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        marginBottom:19,
        paddingHorizontal:15,

    },
    cardText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 13,
    },
    icontext:{
        marginBottom:5
    }

});


