import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/accion";
import Card from "./card";
import Pagination from "./pagination";
import "./cards.scss";

export default function Cards() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.pokemons);
  const getDataPokemons = useSelector((state) => state.pokemons);
  const getDataPokemonsByName= useSelector((state) => state.pokemonsByName);

  /********************Paginado****************************/
  const dogsPerPage = 12; //cantidad de perros por pagina

  
  const [currentPage, setCurrentPage] = useState(1); //pagina actual
  const indexOfLastDog = currentPage * dogsPerPage; //indice del ultimo perro
  const indexOfFirstDog = indexOfLastDog - dogsPerPage; //indice del primer perro
  const currentDog = initialData.slice(indexOfFirstDog, indexOfLastDog); //perros de la pagina actual

  const pagination = (pageNumber) => {
    //funcion para cambiar de pagina
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  // if (currentDog.length === 0) {
  //   return (
  //     <div className="loader">
  //       <img src={loader} alt="loader" />
  //     </div>
  //   );
  // }

  return (
    <>
      <Pagination
        dogsPerPage={dogsPerPage}
        allDogs={initialData.length - 1}
        page={pagination}
      />
      <div className="container-cards">{getDataPokemons.map((e,i)=>{
        return <Card key={i} name={e.name} image={e.image} id={e.id} types={e.types}/>
      })}</div>
    </>
  );
}
