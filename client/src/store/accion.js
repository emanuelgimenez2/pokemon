import axios from "axios";
import {
    GET_POKEMONS
} from "./type"

// const url = "http://localhost:3001";  

// export function getPokemons() {
  
   
//     return async function (dispatch) {
//         const data = await fetch(url);
//         const response = await data.json();

//         dispatch({ type: GET_POKEMONS, payload: response });
//       };       
// }
const url ="http://localhost:3001";// variable con la direccion de la BD 

export function getPokemons() {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.

      var json = await axios.get(`${url}/pokemons`);
        console.log(json.data)

    return dispatch({
      type: GET_POKEMONS,
      payload: json.data,
 
    });
  };
}