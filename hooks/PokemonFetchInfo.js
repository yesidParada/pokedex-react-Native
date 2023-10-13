import { useEffect, useState } from "react";

const usePokemonFetchInfo = (url) => {
  console.log(url)
  const [state, setState] = useState({
    name: '',
    img: '',
    experience: 0,
    abilities: {},
    detail: [],
  });

  useEffect(() => {
    getDataItem(url).then((response) => {
      // console.log(JSON.stringify(response))
      setState({
        name: response.name,
        img: response.sprites.other['official-artwork'].front_default,
        experience: response.base_experience,
        abilities: response.abilities.map((item) => item.ability.name),
        detail: response.stats.map((item) => ({
          name: item.stat.name,
          value: item.base_stat,
        }))
      });
    })
  }, [url]);

  return state;
};

export default usePokemonFetchInfo;

export const getDataItem = async(url) => {
  const pathDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  const path = url ? url : pathDefault;
  const response = await fetch(path);
  const data = await response.json();
  
  return data;
}
