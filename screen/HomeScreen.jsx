import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import usePokemonFetchList from '../hooks/PokemonFetchList';
import Card from '../components/Card';


export default function HomeScreen({ navigation }) {
  const {pokemonList} = usePokemonFetchList(null);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => <Card key={item.name} name={item.name} url={item.url} navigation={navigation}/>}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});