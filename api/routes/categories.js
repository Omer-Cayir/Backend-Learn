var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ success: true, message: 'Categories route is working' });
});

module.exports = router;
