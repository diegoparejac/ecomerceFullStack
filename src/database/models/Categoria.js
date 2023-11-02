module.exports = (sequelize, dataTypes) =>{
    let alias = "Categoria";
    let cols = {
      id_categoria : {
      type: dataTypes.TINYINT(10),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }, 
    
    cat_perfume: {
      type: dataTypes.STRING(50),
      allowNull: false
    },
  
    icono:{
      type: dataTypes.STRING(30),
      allowNull: false
    }
  
    };

    let config = {
        tableName: 'categorias',
        timestamps: false,
        
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (models){
        Categoria.hasMany(models.Marca, {
            as: 'marcas',
            foreignKey: 'id_categoria_perfume'
        })
    }

    return Categoria;
};