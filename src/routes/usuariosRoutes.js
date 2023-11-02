const express = require("express");
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
 
router.get('/usuarios', usuariosController.list); 
router.get('/users/profile/:usuario_id', usuariosController.detail); 
router.get('/usuarios/add', usuariosController.add);
router.post('/usuarios/create', usuariosController.create);
/*router.get('/usuarios/edit/:marca_id', usuariosController.edit);
router.get('/usuarios/delete/:marca_id', usuariosController.delete);
router.put('/usuarios/delete/:marca_id', usuariosController.destroy)*/



module.exports = router;
