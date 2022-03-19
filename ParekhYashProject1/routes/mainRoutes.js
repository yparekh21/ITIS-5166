const express = require('express');
const controller = require('../controllers/mainControllers');

const router = express.Router();


//GET /about: send all items to the user
router.get('/about', controller.about);

//GET /contact: send all items to the user
router.get('/contact', controller.contact);


//exports so we can use in other files
module.exports = router;