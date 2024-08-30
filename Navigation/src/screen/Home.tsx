import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../App'

type HomePros = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({ navigation }: HomePros) {

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button title='Go to Details Screen'
                //  onPress={() => navigation.navigate('Details', {
                //     productId: '86'
                // })}

                // onPress={() => navigation.navigate('Details')}        ----> App/RootStackParamList - Details undefined set

              //  onPress={() => navigation.push('Details', { productId: '86' })}
              onPress={() => navigation.replace('Details', { productId: '86' })}

            />
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