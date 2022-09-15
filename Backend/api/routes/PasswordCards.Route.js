var express = require('express');
var router = express.Router();
var control = require('../controllers/PasswordCards.Controller');

router.get('/', control.Get);
router.post('/', control.Post);
router.put('/:id', control.Put);
router.delete('/:id', control.Delete);

module.exports = router;