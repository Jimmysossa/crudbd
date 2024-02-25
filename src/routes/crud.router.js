const { getAll, create, remove, update } = require('../controllers/Crud.controllers');
const express = require('express');

const crudRouter = express.Router();

crudRouter.route("/crud")
		.get(getAll)
        .post(create);

crudRouter.route("/crud/:id")
    .delete(remove)
    .put(update);

module.exports = crudRouter;