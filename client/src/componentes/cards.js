/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector } from "react-redux";


import loader from "../assets/loaderimage.gif";
import Card from "./card";
import Pagination from "./pagination";




export default function Cards() {
 
const initialData = useSelector((state) => state.pokemons);

console.log(initialData)
  /********************Paginado****************************/
  const dogsPerPage = 12;//cantidad de perros por pagina
  const [currentPage, setCurrentPage] = useState(1);//pagina actual
  const indexOfLastDog = currentPage * dogsPerPage;//indice del ultimo perro
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;//indice del primer perro
  const currentDog = initialData.slice(indexOfFirstDog, indexOfLastDog);//perros de la pagina actual

  const pagination = (pageNumber) => {//funcion para cambiar de pagina
    setCurrentPage(pageNumber);
  };

  // if (currentDog.length === 0) {
  //   return (
  //     <div className="loader">
  //       <img src={loader} alt="loader" />
  //     </div>
  //   );
  // }

  return (
    <div>
      <div>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={initialData.length - 1}
          page={pagination}
        />
      </div>
      <div className="container-cards">
        {/* {currentDog.map((dog, index) => {
          return ( */}
            <Card
              // height={dog?.height}
              // weight={dog?.weight}
              // id={dog?.id}
              // image={dog.image ? dog.image : loader}
              // name={dog?.name}
              // temperament={dog.temperament}
              // key={dog?.id}
            />
          {/* );
        })} */}
      </div>
    </div>
  );
}