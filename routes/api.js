const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html')
})
