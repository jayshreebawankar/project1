const express = require('express');
const router = express.Router();
const placesController = require('../controller/places-controller');

router.get('/:pid', placesController.getPlaceByID);
router.post('/',placesController.createNewPlace);

module.exports = router;   