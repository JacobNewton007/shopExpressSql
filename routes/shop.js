const express = require('express')
const router = express.Router()
const path = require('path')

const dirRoot = require('../util/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(dirRoot, 'views', 'shop.html'))
});

module.exports = router;
