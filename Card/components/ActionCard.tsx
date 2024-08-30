import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

  function openWensite(weblink: string) {
    Linking.openURL(weblink)
  }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingtContainer}>
          <Text style={styles.textheader}>What's new in Anime s2 release date</Text>
        </View>
        <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg' }} />

        <View style={styles.cardBody}>

          <Text>

            sad anme dp for boys.....dark anime dp.feel the pain
          </Text>

        </View>
        <View style={styles.cardFooter}>

          <TouchableOpacity
            style={styles.animelink}
            onPress={() => { openWensite('https://www.anime4i.com/') }}>

            <Text style={styles.linktext}>Anime4i</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.animelink}
            onPress={() => { openWensite('https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg') }}>

            <Text style={styles.linktext} >Animei1</Text>

          </TouchableOpacity>

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
  card: {
    height: 440,

    margin: 10,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12
  },
  elevatedCard: {
    backgroundColor: '#323639',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingtContainer: {
    height: 40,
    flexDirection: 'row'
    , justifyContent: 'center',
    alignItems: 'center'
  },
  textheader: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  image: {
    height: 300
  },
  cardBody: {
    padding: 10,

  },
  cardFooter: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  animelink: {
    fontSize: 16,
    color: '#0000000',
    backgroundColor: '#747578',
    paddingHorizontal: 20,
    borderRadius: 6,
    paddingVertical: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4

  },
  linktext: {
    color: '#000'
  }


})