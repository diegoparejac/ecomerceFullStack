const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

const Marcas = db.Marca;
const Categorias = db.Categoria;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const mainController = {
    home: (req,res)=>{
       
            res.render("index", {marca_perfume: "Marcas Perfumes"})
        
   
	},
    
    carrito: (req,res)=>{
        res.render('carrito');
        // renderizar vista de carrito
 
    }

}

module.exports = mainController;