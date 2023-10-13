import { useEffect, useState } from "react";

const usePokemonFetchList = (url) => {
  const [state, setState] = useState({
    pokemonList: {},
    backList: '',
    nextList: '',
  });

  useEffect(() => {
    getDataItem(url).then(({results, previous, next}) => {
      setState({
        pokemonList: results,
        backList: previous,
        nextList: next
      });
    })
  }, [url]);

  return state;
};

export default usePokemonFetchList;

export const getDataItem = async(url) => {
  const pathDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  const path = url ? url : pathDefault;
  const response = await fetch(path);
  const data = await response.json();
  
  return data;
}
