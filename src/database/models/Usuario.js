module.exports = (sequelize, dataTypes) =>{
    let alias = "Usuario";
    let cols = {
        usuario_id  : {
      type: dataTypes.TINYINT(4),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }, 
    
    nombre_usuario: {
      type: dataTypes.STRING(30),
      allowNull: false
    },

    apellido_usuario: {
        type: dataTypes.STRING(30),
        allowNull: false
      },

      email_usuario: {
        type: dataTypes.STRING(30),
        allowNull: false
      },

      password: {
        type: dataTypes.STRING(25),
        allowNull: false
      },
      telefono: {
        type: dataTypes.BIGINT(10),
        allowNull: false
      },
      pais: {
        type: dataTypes.STRING(25),
        allowNull: false
      },
  
      categoria:{
      type: dataTypes.STRING(25),
      allowNull: false
    },

    url_imagen:{
        type: dataTypes.STRING(50),
        allowNull: false
      }
  
    };

    let config = {
        
        timestamps: false,
        
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models){
        Usuario.hasMany(models.Marca, {
            as: 'marcas',
            foreignKey: 'id_categoria_perfume'
        })
    }

    return Usuario;
};