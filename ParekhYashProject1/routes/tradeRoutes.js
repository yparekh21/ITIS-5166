const express = require('express');
const controller = require('../controllers/tradeControllers');

const router = express.Router();

//GET /items: send all items to the user
router.get('/', controller.trades);

//GET /items/new: send HTML form for creating a new trade
router.get('/new', controller.newTrade);

//POST /items: create a new trade
router.post('/', controller.create);

//GET /items/:id: send details of item identified by id
router.get('/:id', controller.trade);

//GET /items/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);


//PUT /items/:id: update the item identified by id
router.put('/:id', controller.update);

//DELETE /items/:id: delete the item identified by id
router.delete('/:id', controller.delete);

//exports so we can use in other files
module.exports = router;