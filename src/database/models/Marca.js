module.exports = (sequelize, dataTypes) =>{
  let alias = "Marca";
  let cols = {
    marca_id: {
    type: dataTypes.TINYINT(20),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  }, 
  
  marca_perfume: {
    type: dataTypes.STRING(60),
    allowNull: false
  },

  nombre_perfume:{
    type: dataTypes.STRING(60),
    allowNull: false
  },

  tamaño: {
    type: dataTypes.STRING(25),
  allowNull: false
  },
 
  cant_vendida: {
    type: dataTypes.BIGINT(5),
    allowNull: false
  },

  imagen_banner: {
    type: dataTypes.STRING(25),
    allowNull: false
  },

  concentracion: {
    type: dataTypes.STRING(25),
    allowNull: false
  },

  familia_perfume: {
    type: dataTypes.STRING(35),
    allowNull: false
  },

  id_categoria_perfume: {
    type: dataTypes.BIGINT(10).UNSIGNED,
    allowNull: false
  },

  precio: {
    type: dataTypes.BIGINT(10),
    allowNull: false
  },

  stock: {
    type: dataTypes.BIGINT(6),
    allowNull: false
  },

  oferta: {
    type: dataTypes.STRING(10),
    allowNull: false
  },

  imagen: {
    type: dataTypes.STRING(50),
    allowNull: false
  }

  };

  let config = {
      timestamps: false,
      
  }

  const Marca = sequelize.define(alias, cols, config);

  Marca.associate = function (models){
      Marca.belongsTo(models.Categoria, {
          as: 'categoria',
          foreignKey: 'id_categoria_perfume'
      })
  }

  return Marca
};