const express = require('express');
const router = express.Router();
const {getSite,getSites}  = require('../controllers/siteController');
const {authenticateToken} =require('../middleware/authenticate')

router.get('/',authenticateToken,getSites);
router.get('/:id',authenticateToken,getSite);
module.exports = router;