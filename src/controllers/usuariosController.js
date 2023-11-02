const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

const Usuarios = db.Usuario;


const usuariosController = {
    'list':(req, res) =>{
        db.Usuario.findAll()
        .then((usuarios)=>{
            res.render('usuariosList.ejs', {usuarios})
    })
},


'detail': (req, res) =>{
    db.Usuario.findByPk(req.params.usuario_id)
        .then(usuario =>{
            res.render('usuariosDetail.ejs', {usuario})
        })
},


add: (req, res) =>{
    res.render(path.resolve(__dirname, '..', 'views', 'registro'))
    
}, 

  
create: function (req, res){
    Usuarios.create(
        {
            nombre_usuario : req.body.nombre_usuario ,
            apellido_usuario : req.body.apellido_usuario,
            email_usuario : req.body.email_usuario,
            password : req.body.password,
            telefono : req.body.telefono,
            pais : req.body.pais,
            categoria : req.body.categoria,
            url_imagen : req.body.url_imagen,
            
            
        })
        .then(()=> {res.redirect('/usuariosList')})
        .catch(error => res.send(error))
},

/*
edit: function (req, res){
    const marcaId = req.params.marca_id;
    const promiseMarcas = Marcas.findByPk(marcaId,{include: ['categoria']});
    const promCategorias = Categorias.findAll();
    Promise.all([promiseMarcas, promCategorias])
    .then(([Marca, allCategorias])=>{
        res.render(path.resolve(__dirname, '..', 'views', 'marcasEdit'), {Marca, allCategorias})})
    .catch(error => {res.send(error)})
},

update: function (req, res){
    const marcaId = req.params.marca_id;
    Marcas.update(
        {
            marca_perfume : req.body.marca_perfume ,
            nombre_perfume : req.body.nombre_perfume,
            tamaño : req.body.tamaño,
            cant_vendida : req.body.cant_vendida,
            imagen_banner : req.body.imagen_banner,
            concentracion : req.body.concentracion,
            familia_perfume : req.body.familia_perfume,
            id_categoria_perfume : req.body.id_categoria_perfume,
            precio : req.body.precio,
            stock : req.body.stock,
            oferta : req.body.oferta,
            imagen : req.body.imagen,
        },
        {
            where: {marca_id : marcaId}
        }
        )
        .then(()=> {res.redirect('/marcas')})
        .catch(error => res.send(error))
},

delete: function(req, res){
    const marcaId = req.params.marca_id;
    Marcas.findByPk(marcaId)
    .then(Marca =>{
        return res.render(path.resolve(__dirname, '..', 'views', 'marcasDelete' ), {Marca})
    })
    .catch(error => res.send(error))
},

destroy: function(req, res){
    const marcaId = req.params.marca_id;
    Marcas.destroy({where: {marca_id:marcaId}})
    .then(() =>{
        return res.redirect('/marcas')
    })
    .catch(error => res.send(error))

}*/
}

module.exports = usuariosController;