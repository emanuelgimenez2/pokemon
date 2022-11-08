import {
  GET_POKEMONS,
  //   GET_DOGS,
  //   GET_TEMPERAMENTS,
  //   FILTER_BY_TEMPERAMENTS,
  //   GET_DOG_DETAIL,
  //   FILTER_CREATED,
  //   ORDER_BY_NAME,
  //   ORDER_BY_WEIGHT,
  //   POST_DOG,
  //   POST_DOG_SUCESS,
  //   GET_DOG_BY_NAME,
} from "../store/type";

const initialState = {
  pokemons: [],
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

    //     case FILTER_BY_TEMPERAMENTS:
    //       const alldogs = state.dogs;

    //       const temperamentsFiltered = alldogs.filter((el) =>
    //         el.temperament[0].name.includes(action.payload)
    //       );

    //       return {
    //         ...state,
    //         dogs: temperamentsFiltered,
    //         dogsByTemperament: temperamentsFiltered,
    //       };

    //     case FILTER_CREATED:
    //       const createdFilter =
    //         action.payload === "Db"
    //           ? state.dogs.filter((dog) => dog.createdAtDb === null)
    //           : state.dogs.filter((dog) => typeof dog.id === "number");

    //       return {
    //         ...state,
    //         dogs: createdFilter,
    //       };

    //     case ORDER_BY_NAME:
    //       const orderByName =
    //         action.payload === "asc"
    //           ? state.dogs.sort(SortArrayAZ)
    //           : state.dogs.sort(SortArrayZA);

    //       return {
    //         ...state,
    //         dogs: orderByName,
    //         dogsByName: orderByName,
    //

    default:
      return state;
  }
}
export default rootReducer;
