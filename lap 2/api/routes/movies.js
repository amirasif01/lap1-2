const express = require('express');
// use express library, create router constant using for routing
const router = express.Router();

const moviesControls = require('../controllers/movies')
// for get and post the "/" is after the movies -url
router.get('/', moviesControls.index)

router.post('/', moviesControls.create)

router.delete('/:id', moviesControls.destroy)
module.exports = router;