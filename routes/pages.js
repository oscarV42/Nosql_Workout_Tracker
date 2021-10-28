const router = require("express").Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html')
})

router.get('/stats', (req, res) => {
    res.sendFile(__dirname + '../public/stats.html')
})

router.get('/exercise', (req, res) => {
    res.sendFile(__dirname + '../public/exercise.html')
})

module.exports = router