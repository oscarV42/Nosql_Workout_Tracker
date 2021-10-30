const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get('/workouts', async ({ body }, res) => {
    try{
        const dbWorkouts = await Workout.find({})
        .sort({ day: 1 })
        if(dbWorkouts){
            res.status(200).json(dbWorkouts)
        }else{
            res.status(400).json({ message: 'No workouts found in the database!'})
        }
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/workouts', async ({ body }, res) => {
    try{
        const dbWorkout = await Workout.create(body);
        if (dbWorkout) {
            res.status(200).send(dbWorkout);
        } else {
          res.status(400).send('workout not created');
        }
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router
