import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevatedCard]}>
                    <Text style={styles.cardText}>😊tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevatedCard]}>
                    <Text style={styles.cardText}>😁me</Text>
                </View>
                <View style={[styles.card, styles.cardElevatedCard]}>
                    <Text style={styles.cardText}>😆to</Text>
                </View>
                <View style={[styles.card, styles.cardElevatedCard]}>
                    <Text style={styles.cardText}>🤩Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevatedCard]}>
                    <Text style={styles.cardText}>😗fast</Text>
                </View>
                <View style={[styles.card, styles.cardElevatedCard]}>
                    <Text style={styles.cardText}>😮more..</Text>
                </View>
            </ScrollView>
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
        padding: 8,


    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 7,
        margin: 3
    },
    cardElevatedCard: {
        backgroundColor: "#CSCSV4",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,

        },
        shadowColor: '#333'
    }
})