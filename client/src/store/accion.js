import {
    GET_POKEMONS
} from "./type"

export function getPokemons() {
    const url = "http://localhost:3001/pokemons";   
   
    return async function (dispatch) {
        const data = await fetch(url);
        const response = await data.json();
        dispatch({ type: GET_POKEMONS, payload: response });
      };       
}