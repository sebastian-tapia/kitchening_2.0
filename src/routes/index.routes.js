const express = require('express');
const { index, admin } = require('../controllers/indexController');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', adminCheck, admin);

module.exports = router;
