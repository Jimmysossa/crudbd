const express = require('express');
const crudRouter = require('./crud.router');
const router = express.Router();

// colocar las rutas aquí
router.use(crudRouter)

module.exports = router;