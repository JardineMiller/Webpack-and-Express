const express = require('express');
const router = express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res) {
  res.json({response: 'success'})
})

module.exports = router;