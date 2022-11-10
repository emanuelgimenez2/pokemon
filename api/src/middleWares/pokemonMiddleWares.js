require('dotenv').config();
const axios = require("axios");
const https = require("https");
const { POKEMON_NUMBER } = process.env;

const agent = new https.Agent({
    rejectUnauthorized: false,
});

const fechingData = async () => {
    const pokemons = [];
    for (var i = 1; i <= POKEMON_NUMBER; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        const responseApi = axios.get(url, {httpsAgent: agent});
        pokemons.push(responseApi);
    }
    const arrayPromesasResueltas = await Promise.all(pokemons);
    const dataArray = arrayPromesasResueltas.map(promesaResuelta => promesaResuelta.data);
    return dataArray;
}

const buscarPokemonPorApiId = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const responseApi = await axios.get(url, {httpsAgent: agent});
    return responseApi.data;
}

const buscarPokemonPorNombre = async (name) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const responseApi = await axios.get(url, {httpsAgent: agent});
    return responseApi.data;
}

const buscarTodosLosTypesEnPokeApi = async () => {
    let url = `https://pokeapi.co/api/v2/type`;
    const responseApi = await axios.get(url, {httpsAgent: agent});
    return responseApi.data.results;
}

module.exports = {fechingData , buscarPokemonPorApiId, buscarPokemonPorNombre, buscarTodosLosTypesEnPokeApi};