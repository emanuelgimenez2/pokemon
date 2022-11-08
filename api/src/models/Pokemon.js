const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },

    life: {
      type: DataTypes.INTEGER,
    },

    strength: {    // capaz es Attack...
      type: DataTypes.INTEGER,
    },

    defending: {
      type: DataTypes.INTEGER,
    },

    speed: {
      type: DataTypes.INTEGER,
    },

    height: {
      type: DataTypes.INTEGER, //pocos digitos
    },

    weight: {
      type: DataTypes.INTEGER, //pocos digitos
    },

    image: {
      type: DataTypes.STRING,
    },
  });
};
