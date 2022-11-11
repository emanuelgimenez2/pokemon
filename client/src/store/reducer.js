import {
  GET_POKEMONS,
  FILTER_BY_TEMPERAMENTS,
  GET_DOG_DETAIL,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "../store/type";

const initialState = {
  pokemons: [],
  // pokemonsByName: [],
  // pokemoncreate: [],
};

function SortArrayAZ(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

function SortArrayZA(x, y) {
  if (x.name > y.name) {
    return -1;
  }
  if (x.name < y.name) {
    return 1;
  }
  return 0;
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER_BY_TEMPERAMENTS:
      const alldogs = state.dogs;

      const temperamentsFiltered = alldogs.filter((el) =>
        el.temperament[0].name.includes(action.payload)
      );

      return {
        ...state,
        dogs: temperamentsFiltered,
        dogsByTemperament: temperamentsFiltered,
      };

    case FILTER_CREATED:
      const createdFilter =
        action.payload === "Db"
          ? state.dogs.filter((dog) => dog.createdAtDb === null)
          : state.dogs.filter((dog) => typeof dog.id === "number");

      return {
        ...state,
        pokemoncreate: createdFilter,
      };

    case ORDER_BY_NAME:
      const orderByName =
        action.payload === "A-Z"
          ? state.pokemons.sort(SortArrayAZ)
          : state.pokemons.sort(SortArrayZA);

      return {
        ...state,       
        pokemons: orderByName,
      };

    default:
      return state;
  }
}
export default rootReducer;
