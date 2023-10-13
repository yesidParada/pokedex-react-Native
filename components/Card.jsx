import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function Card({ name, url, navigation }) {
  const onPress = () => navigation.navigate('Details', {url});
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
          {/* <View>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/16/16364.png'}} style={{width: 50, height: 50}} />
          </View> */}
          <View style={styles.cardContent}>
            <Text>{name}</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: '100%',
  },
  cardContent: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20,
  },
});