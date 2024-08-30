import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'


import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../App'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type DetailsPros = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: DetailsPros) => {

    const { productId } = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Details : {productId}</Text>
            <Button title='Go To Home ' 
            
            onPress={() => navigation.navigate("Home")} 
            // onPress={() => navigation.goBack()} 
        
            />

            {/* <Button title='Go To First Screen  '

                // onPress={() => navigation.pop(2)}
                // onPress={() => navigation.popToTop()}


            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallText: {
        color: "#000"
    }
})

export default Details