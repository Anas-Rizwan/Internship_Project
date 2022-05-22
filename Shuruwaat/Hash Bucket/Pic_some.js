import React, { useEffect, useState } from 'react'
import { View, FlatList, ImageBackground, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const Pic_some = ({ navigation }) => {

    const [click, setclick] = useState(false)
    const [load, setload] = useState(true)

    // Retrieve data from API
    const getpic = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            const data = await response.json()
            setSelect(data)
            setload(false)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getpic()
    }, [])

    // Selection of Filled or un-fill Heart
    const [select, setSelect] = useState();
    console.log("Selection : ", select)

    const handleSelect = (i) => {
        const newItem = select.map((v) => {
            if (v.id === i.id) {
                return { ...v, isFavorite: !v.isFavorite }
            }
            else {
                return v
            }
        })
        setSelect(newItem)
    };


    // Hover
    const [id, setid] = useState()
    console.log("click", id)

    const hideshow = (item) => {
        setclick(true)
        setid(item.id)
    }



    const renderItem = ({ item }) => {
        return (
            <>
                <View style={styles.img_main_view}>

                    <View style={styles.img_view}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => hideshow(item)}>
                            {click && id === item.id ?
                                <ImageBackground resizeMode="cover" style={styles.image} source={{ uri: item.url }} >
                                    <View style={styles.img_icon_view}>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelect(item)}>
                                            {item.isFavorite ? <AntDesign name="heart" size={40} color="red" /> : <AntDesign name="hearto" size={40} color="red" />}
                                        </TouchableOpacity>

                                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Cart", { item: item })}>
                                            <MaterialIcons name='add-circle' size={40} color="white" />
                                        </TouchableOpacity>

                                    </View>
                                </ImageBackground>
                                :
                                <ImageBackground resizeMode="cover" style={styles.image} source={{ uri: item.url }} >
                                </ImageBackground>}
                        </TouchableOpacity>

                    </View>
                </View>

            </>
        )
    }


    return (
        <View style={styles.view}>
            {load ? <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" /></View>
                :
                (
                    <View>
                        <FlatList
                            data={select}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={item => item.id}
                        />
                    </View>
                )}
        </View>
    )
}


const styles = StyleSheet.create({
    loader: {
        minHeight: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 190,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 15,
    },
    img_view: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
    },
    img_icon_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: "100%",
        marginHorizontal: -30,
        marginVertical: -5,
    }
});
export default Pic_some