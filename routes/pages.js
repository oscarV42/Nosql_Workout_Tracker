const router = require("express").Router();
const path = require('path')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/index.html'))
    res.redirect('/index.html')
})

router.get('/stats', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/stats.html'))
    res.redirect('/stats.html')
})

router.get('/exercise', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/exercise.html'))
    res.redirect('/exercise.html')
})

module.exports = router