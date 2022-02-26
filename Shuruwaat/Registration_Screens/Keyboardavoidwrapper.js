import React from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native'

const KeyboardAvoid = ({children})=>{
    return(
        <KeyboardAvoidingView style={{flex : 1}}>
             {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss()}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
                {children}
        </ScrollView>
            {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>

    )
}

export default KeyboardAvoid