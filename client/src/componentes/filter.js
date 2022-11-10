/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_BY_NAME } from "../store/type";

export default function Filter() {
  const dispatch = useDispatch();
  const temperamentsData = useSelector((state) => state.pokemons);
  const [filters, setFilters] = useState({
    orderPokemons: "",
    weightPokemons: "",
    temperamentPokemons: "",
    existPokemons: "",



    
  });

console.log("filters000000000000000000000000000000>",filters)
  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    filters.orderPokemons && dispatch({type: ORDER_BY_NAME, payload: filters.orderPokemons});
  }, [filters]);

  //*******************Filtros******************* */




  return (
    <div className="card-filter">
      <div className="filters">
        <select
          name="orderPokemons"
          value={filters.orderPokemons}
          // defaultValue={filters.orderPokemons}
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="select-filter"
        >
          <option>A-Z</option>
          <option>Z-A</option>
        </select>

        <select
          value={filters.weightPokemons}
          className="select-filter"
          onChange={(e) => {
            handleInputChange(e);
          }}
        >
          <option>Ordenar por peso</option>
          <option>ordnar por peso</option>
        </select>
        <select
          value={filters.temperamentPokemons}
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="select-filter"
        >
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
          <option>esitpokemon</option>
        </select>
      </div>
    </div>
  );
}
