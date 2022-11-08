/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function Filter() {
  const temperamentsData = useSelector((state) => state.pokemons);

  //*******************Filtros******************* */

  return (
    <div className="card-filter">
      <div className="filters">
        <select
          //   onChange={(e) => setOrder(e.target.value)}
          className="select-filter"
        >
          <option>Ordenar Alfabeticamente</option>
          <option value="asc">A - Z</option>

          <option value="desc">Z - A</option>
        </select>

        <select
          className="select-filter"
          //   onChange={(e) => setWeight(e.target.value)}
        >
          <option>Ordenar por peso</option>
          <option value="+peso">Mayor Peso</option>

          <option value="-peso">Menor Peso</option>
        </select>
        <select
          //   onChange={(e) => setTemperament(e.target.value)}
          className="select-filter"
        >
          <option>Temperamentos</option>
          {temperamentsData.map((temp, i) => (
            <option value={temp} key={i}>
              {temp}
            </option>
          ))}
        </select>

        <select
          defaultValue={"DEFAULT"}
          //   onChange={(e) => setCreated(e.target.value)}
          className="select-filter"
        >
          <option value="DEFAULT" disabled>
            Creados/API
          </option>
          <option value="Api">API</option>
          <option value="Db">Creados</option>
        </select>
      </div>
    </div>
  );
}
