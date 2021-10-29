const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post('/workouts', async ({ body }, res) => {
    try{
        const dbWorkout = await Workout.create(body);
        if (dbWorkout) {
            res.status(201).send(dbWorkout);
        } else {
          res.status(400).send('workout not created');
        }
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router
