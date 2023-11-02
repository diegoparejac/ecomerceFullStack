const express = require("express");
const router = express.Router();
const marcasController = require('../controllers/marcasController');
 
router.get('/marcas', marcasController.list); 
router.get('/marcas/detail/:marca_id', marcasController.detail); 
router.get('/marcas/add', marcasController.add);
router.post('/marcas/create', marcasController.create);
router.get('/marcas/edit/:marca_id', marcasController.edit);
router.put('/marcas/update/:marca_id', marcasController.update);
router.get('/marcas/delete/:marca_id', marcasController.delete);
router.put('/marcas/delete/:marca_id', marcasController.destroy)


module.exports = router;
