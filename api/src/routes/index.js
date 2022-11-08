const { Router } = require("express");
const {
  fechingData,
  buscarPokemonPorApiId,
  buscarPokemonPorNombre,
  buscarTodosLosTypesEnPokeApi,
} = require("../middleWares/pokemonMiddleWares");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// por que?-----------------------------
const { conn } = require("../db");
const { Sequelize } = require("sequelize");
const { Type, Pokemon } = conn.models;
//--------------------------------------

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const functionToFetchingData = async () => {
  try {
    const dataFetch = await fechingData();
  
    return dataFetch;
  } catch (err) {
    console.log(err);
  }
};

const functionToFindPokemonById = async (id) => {
  try {
    const pokemon = await buscarPokemonPorApiId(id);
    return pokemon;
  } catch (err) {
    console.log(err);
  }
};

const functionToFindPokemonByName = async (name) => {
  try {
    const pokemon = await buscarPokemonPorNombre(name);
    return pokemon;
  } catch (err) {
    console.log(err);
  }
};

const functionToFindAllTypes = async () => {
  try {
    const types = await buscarTodosLosTypesEnPokeApi();
    return types;
  } catch (err) {
    console.log(err);
  }
};

const dataBase = async () => {
  try {
    let getDataBasePokemon2 = await Pokemon.findAll({ include: Type });
    return getDataBasePokemon2;
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------------------------------------------------------
router.get("/pokemons", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      let pokemon;
      const pokemonBaseDatos = await Pokemon.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: "%" + name + "%",
          },
        },
        include: Type,
      });
      if (pokemonBaseDatos.length) {
        pokemon = pokemonBaseDatos;
      } else {
        pokemon = await functionToFindPokemonByName(name);
      }
      if (pokemon) {
        return res.status(200).json(pokemon);
      } else {
        return res.status(404).send("Pokemon not found");
      }
    } else {
      let dataBaseDeDatos = await dataBase();
      let dataApi = await functionToFetchingData();
      const dataApiReformada = dataApi.map((dataApi) => {
        return {
          id: dataApi.id,
          name: dataApi.name,
          life: dataApi.stats[0].base_stat,
          strength: dataApi.stats[1].base_stat,
          defending: dataApi.stats[2].base_stat,
          speed: dataApi.stats[5].base_stat,
          height: dataApi.height,
          weight: dataApi.weight,
          image: dataApi.sprites.other.dream_world.front_default,
          types: dataApi.types.map((e) => {
            return { id: "", name: e.type.name };
          }),
        };
      });
      dataBaseDeDatos &&
        dataApi &&
        res.send([...dataBaseDeDatos, ...dataApiReformada]);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    let {
      name,
      life,
      strength,
      defending,
      speed,
      height,
      weight,
      image,
      types,
    } = req.body;
    let newPokemon = await Pokemon.create({
      name,
      life,
      strength,
      defending,
      speed,
      height,
      weight,
      image,
    });
    let typesDb = await Type.findOrCreate({
      where: {
        name: types,
      },
    });

    await newPokemon.setTypes(typesDb[0]);
    const pokemonCreated = await Pokemon.findOne({
      where: {
        id: newPokemon.id,
      },
      include: Type,
    });
    res.send(pokemonCreated);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    let { id } = req.params;

    if (id.includes("-")) {
      let pokemon = await Pokemon.findOne({
        where: {
          id,
        },
        include: Type,
      });
      res.send(pokemon);
    } else {
      let pokemonApi = await functionToFindPokemonById(id);
      if (pokemonApi) {
        const pokemonApiReformada = {
          id: pokemonApi.id,
          name: pokemonApi.name,
          life: pokemonApi.stats[0].base_stat,
          strength: pokemonApi.stats[1].base_stat,
          defending: pokemonApi.stats[2].base_stat,
          speed: pokemonApi.stats[5].base_stat,
          height: pokemonApi.height,
          weight: pokemonApi.weight,
          image: pokemonApi.sprites.other.dream_world.front_default,
          types: pokemonApi.types.map((e) => {
            return { id: "", name: e.type.name };
          }),
        };
        res.send(pokemonApiReformada);
      } else {
        res.status(404).send({
          status: "error",
          errorMessage: "Pokemon no encontrado",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/types", async (req, res) => {
  try {
    let types = await Type.findAll();
    if (!types.length) {
      let typesApi = await functionToFindAllTypes();

      typesApi.map( async ( typeApi) => {
        await Type.findOrCreate({
          where: {
            name: typeApi.name,
          },
        });
      });
      types = await Type.findAll();
    }
    res.send(types);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
