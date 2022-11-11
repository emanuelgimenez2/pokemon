/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_BY_NAME } from "../store/type";

export default function Filter() {
  const dispatch = useDispatch();
  // const temperamentsData = useSelector((state) => state.pokemons);
  const pokemonForName = useSelector((state) => state.pokemonsByName);

  const [filters, setFilters] = useState({
    orderPokemons: "DEFAULT",
    weightPokemons: "",
    temperamentPokemons: "",
    existPokemons: "",
  });
  console.log("filters", filters);

  
  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });

  };
  useEffect(() => {
    filters.orderPokemons &&
      dispatch({ type: ORDER_BY_NAME, payload: filters.orderPokemons });
  }, [filters]);

  //*******************Filtros******************* */

  return (
    <div className="card-filter">
      <div className="filters">
        <select
        // defaultValue={'DEFAULT'}
          name="orderPokemons"
          value={filters.orderPokemons}
          // defaultValue={filters.orderPokemons}
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="select-filter"
        >
          <option value="DEFAULT" >orden alfabetico</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>

        {/* <select
          value={filters.weightPokemons}
          className="select-filter"
          onChange={(e) => {
            handleInputChange(e);
          }}
        >
          <option selected>ataque</option>
          <option>Menor ataque</option>
          <option>Mayor ataque</option>
        </select>
        <select
          value={filters.temperamentPokemons}
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="select-filter"
        >
          <option selected>Tipos</option>
          <option>Temperamentos</option>
          <option>temperamentos</option>
        </select>

        <select
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="select-filter"
          value={filters.existPokemons}
        >
          <option selected>creados o existentes</option>
          <option>esitpokemon</option>
        </select> */}
      </div>
    </div>
  );
}
