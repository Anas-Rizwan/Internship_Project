import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'

const Cart = ({ route }) => {

    const { item } = route.params
    console.log(item)

    return (
        <View>
            <ImageBackground resizeMode="contain" style={styles.image} source={{ uri: item.url }}  />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
});
export default Cart