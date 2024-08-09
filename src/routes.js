const router = require('express').Router();
const { getTest, getData, getID } = require('./controller');

router.get('/test', getTest);
router.get('/data', getData);

module.exports = router;