var router = require('express').Router();

router.get('*', function(request, response) {
    var initialState = { title: 'Universal React' };

    var html = '';

    response.send('Привет авыпыфвараяеро');
});

module.exports = router;
