const router = require("express").Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html')
})

router.get('/stats', (req, res) => {
    res.sendFile(__dirname + '../public/stats.html')
})

module.exports = router