import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

  const contacts = [
    {
      uid: 1,
      name: 'sidd',
      status: "anime",
      imageUrl: "https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg"
    },
    {
      uid: 2,
      name: 'soma',
      status: "tokyo ghoul",
      imageUrl: "https://i.pinimg.com/736x/2f/47/9e/2f479e7ad97f3c420dcb775b81111691.jpg"
    },
    {
      uid: 3,
      name: 'soma',
      status: "anime",
      imageUrl: "https://i.pinimg.com/736x/ae/38/f6/ae38f622bdedd6b7a00b0a68daca8e00.jpg"
    },
    {
      uid: 4,
      name: 'gojo',
      status: "anime",
      imageUrl: "https://i.pinimg.com/736x/8f/b2/33/8fb2335d458a81c3a5760167e5ceb060.jpg"
    },
    {
      uid: 5,
      name: 'anime4',
      status: "anime",
      imageUrl: "https://i.pinimg.com/736x/42/e3/f1/42e3f187f5a5cf16fa0d94edc31bf82e.jpg"
    },
    {
      uid: 6,
      name: 'goku',
      status: "anime",
      imageUrl: "https://i.pinimg.com/736x/e2/bf/25/e2bf25f812b501141564d3c955c23baf.jpg"
    },
    {
      uid: 7,
      name: 'devil',
      status: "anime",
      imageUrl: "https://i.pinimg.com/736x/54/f3/5e/54f35e2abcb2b9a54ff3272bba49c209.jpg"
    }

  ]


  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>

        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image style={styles.userimage} source={{ uri: imageUrl }} />
            <View>
              <Text style={styles.UserName}>{name}</Text>
              <Text style={styles.UserStatus}>{status}</Text>
            </View>
          </View>
        ))}


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
    paddingHorizontal: 20,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#737478',
    borderRadius: 3
  },
  userimage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    padding: 7,
    margin: 7

  },
  UserName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'

  },
  UserStatus: {
    fontSize: 12,
    color: '#FFF',
  }

})