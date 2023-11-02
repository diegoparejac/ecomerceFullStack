const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

const Marcas = db.Marca;
const Categorias = db.Categoria;

const marcasController = {
    'list':(req, res) =>{
        db.Marca.findAll({
            include: ['categoria']
        })
        .then((marcas)=>{
            res.render('marcasList.ejs', {marcas})
    })
},


'detail': (req, res) =>{
    db.Marca.findByPk(req.params.marca_id,
        {
            include: ['categoria']
        })
        .then(marca =>{
            res.render('marcasDetail.ejs', {marca})
        })
},

add: function (req, res) {
    const promCategorias = Categorias.findAll();

    Promise.all([promCategorias])
    .then(([allCategorias]) =>{
        res.render(path.resolve(__dirname, '..', 'views', 'marcasAdd'), {allCategorias})})
    .catch(error => res.send(error))
}, 

  
create: function (req, res){
    Marcas.create(
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
            
        })
        .then(()=> {res.redirect('/marcas')})
        .catch(error => res.send(error))
},


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

}




}

module.exports = marcasController;