import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>

      <Text style={styles.headingText}>FancyCard Trending</Text>


      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card, styles.cardElevatedCard]}>

          <Image source={{
            uri: "https://lh3.googleusercontent.com/pw/AIL4fc-jpu5svN5BthUtAkTO1vXdl_jhB940aJ2FM1a9DuQaFoJa_m5qOSTMdqO-rMfwOnwRHkeJpqk1w1-fwUhEbYrgrqsLw4umfrtqBMUDNm3DVV4II68vq_UYOqdwBIwYUFr2h9X40HRhUDcmpL9kqqbR=w600"
          }} style={styles.Cardimage} />

          <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>Anime/Donghuwa</Text>
            <Text style={styles.cardLabel}>Jade Dynasty</Text>
            <Text style={styles.cardSeason}>Season 2</Text>

            <Text style={styles.cardSeasonEnd}>Season 5</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevatedCard]}>

          <Image source={{
            uri: "https://lh3.googleusercontent.com/pw/AIL4fc-jpu5svN5BthUtAkTO1vXdl_jhB940aJ2FM1a9DuQaFoJa_m5qOSTMdqO-rMfwOnwRHkeJpqk1w1-fwUhEbYrgrqsLw4umfrtqBMUDNm3DVV4II68vq_UYOqdwBIwYUFr2h9X40HRhUDcmpL9kqqbR=w600"
          }} style={styles.Cardimage} />

          <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>Anime/Donghuwa</Text>
            <Text style={styles.cardLabel}>Jade Dynasty</Text>
            <Text style={styles.cardSeason}>Season 2</Text>

            <Text style={styles.cardSeasonEnd}>Season 5</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevatedCard]}>

          <Image source={{
            uri: "https://lh3.googleusercontent.com/pw/AIL4fc-jpu5svN5BthUtAkTO1vXdl_jhB940aJ2FM1a9DuQaFoJa_m5qOSTMdqO-rMfwOnwRHkeJpqk1w1-fwUhEbYrgrqsLw4umfrtqBMUDNm3DVV4II68vq_UYOqdwBIwYUFr2h9X40HRhUDcmpL9kqqbR=w600"
          }} style={styles.Cardimage} />

          <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>Anime/Donghuwa</Text>
            <Text style={styles.cardLabel}>Jade Dynasty</Text>
            <Text style={styles.cardSeason}>Season 2</Text>

            <Text style={styles.cardSeasonEnd}>Season 5</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevatedCard]}>

          <Image source={{
            uri: "https://lh3.googleusercontent.com/pw/AIL4fc-jpu5svN5BthUtAkTO1vXdl_jhB940aJ2FM1a9DuQaFoJa_m5qOSTMdqO-rMfwOnwRHkeJpqk1w1-fwUhEbYrgrqsLw4umfrtqBMUDNm3DVV4II68vq_UYOqdwBIwYUFr2h9X40HRhUDcmpL9kqqbR=w600"
          }} style={styles.Cardimage} />

          <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>Anime/Donghuwa</Text>
            <Text style={styles.cardLabel}>Jade Dynasty</Text>
            <Text style={styles.cardSeason}>Season 2</Text>

            <Text style={styles.cardSeasonEnd}>Season 5</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevatedCard]}>

          <Image source={{
            uri: "https://lh3.googleusercontent.com/pw/AIL4fc-jpu5svN5BthUtAkTO1vXdl_jhB940aJ2FM1a9DuQaFoJa_m5qOSTMdqO-rMfwOnwRHkeJpqk1w1-fwUhEbYrgrqsLw4umfrtqBMUDNm3DVV4II68vq_UYOqdwBIwYUFr2h9X40HRhUDcmpL9kqqbR=w600"
          }} style={styles.Cardimage} />

          <View style={styles.cardbody}>
            <Text style={styles.cardTitle}>Anime/Donghuwa</Text>
            <Text style={styles.cardLabel}>Jade Dynasty</Text>
            <Text style={styles.cardSeason}>Season 2</Text>

            <Text style={styles.cardSeasonEnd}>Season 5</Text>
          </View>
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
  container: {
    padding: 8,
  },
  card: {

    height: 500,
    margin: 10,
    borderRadius: 10

  },
  cardElevatedCard: {
    backgroundColor: 'white',
    elevation: 3
    , textShadowOffset: {
      width: 1,
      height: 1,

    }


  },
  Cardimage: {

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 350,


  },
  cardbody: {
    margin: 7,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },

  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12

  },
  cardLabel: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 12
  }, cardSeason: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 12
  },
  cardSeasonEnd: {
    color: "#000000",
    fontSize: 16
  }
})