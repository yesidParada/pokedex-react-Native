import React from 'react';
import { StyleSheet, ImageBackground , Text, View } from 'react-native';
import usePokemonFetchInfo from '../hooks/PokemonFetchInfo';

function DetailAbility ({name, value}) {
  return (
    <View style={styles.detailAbilityCard}>
      <Text style={styles.text}>{value}</Text>
      <Text style={styles.subTitle}>{name}</Text>
    </View>
  )
}

export default function DetailScreen(props) {
  const url = props.route.params.url;
  const data = usePokemonFetchInfo(url);
  console.log(data.detail)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.experience} global</Text>
      </View>
      <View style={styles.content}>
        <ImageBackground  source={{uri: data.img }} style={styles.photo} />
        <Text style={styles.title}>{data.name}</Text>
      </View>
      {
          data.abilities.map && data.abilities.map(ability => (<Text key={ability}>{ability}</Text>))
        }
      <View style={styles.footer}>
        
        {
          data.detail.map && data.detail.map(detail => (<DetailAbility key={detail.name} name={detail.name} value={detail.value}/>))
        }
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3498DB',
    backgroundColor: '#E67E22',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  header: {
    alignItems: 'start',
    justifyContent: 'flex-start',
    fontSize: 64,
    // borderWidth: 1,
    width: '100%',
  },
  content: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    padding: 20,
    rowGap:5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c066',
    borderRadius: 5,
    textAlign: 'center'
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: '#c0c0c066',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
  detailAbilityCard: {
    // borderWidth:1,
    width: '50%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 15,
    fontStyle: 'italic',
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 38,
    color: 'white',
  }
});