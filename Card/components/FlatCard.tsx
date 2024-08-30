import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCard</Text>

            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.cardText}>RED</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.cardText}>BLUE</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.cardText}>GREEN</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    cardText: {
        fontSize: 15,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 7
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 7,
        margin: 3
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#5DA3F2',
    },
    cardThree: {
        backgroundColor: '#50DBB4',
        
    }
})