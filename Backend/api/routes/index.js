var express = require('express'),
    router = express.Router(),
    passwordCardsRouter = require('./PasswordCards.Route');

router.use('/password-cards', passwordCardsRouter);

module.exports = router;