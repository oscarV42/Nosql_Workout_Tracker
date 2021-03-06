const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get('/workouts', async ({ body }, res) => {
    try {
        const dbWorkouts = await Workout.aggregate([
            { $sort: { day: 1 }},
            { $set: {
                totalDuration: {
                    $reduce: {
                        input: '$exercises',
                        initialValue: 0, 
                        in: {
                            $add : ['$$value', '$$this.duration']
                        }
                    }
                }
            } }
        ])

        if(dbWorkouts){
            res.status(200).json(dbWorkouts)
        }else{
            res.status(400).json({ message: 'No workouts found in the database!'})
        }
    }catch(err) {
        res.status(500).json(err)
    }
});

router.post('/workouts', async (req, res) => {
    try {
        const dbWorkout = await Workout.create(req.body);
        if (dbWorkout) {
            console.log(dbWorkout)
            res.status(200).json(dbWorkout);    
        } else {
          res.status(400).json({ message: 'workout not created' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/workouts/:id', async (req, res) => {
    try {
        const dbWorkout = await Workout.updateOne(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body
            }
        })
        if(dbWorkout){
            res.status(200).json(dbWorkout)
        }else {
            res.status(400).json({ message: 'No workout found under this id!' })
        }
    }catch(err) {
        res.status(500).json(err)
    }
});

router.get('/workouts/range', async (req, res) => {
    try {
        const dbWorkoutRange = await Workout.aggregate([
            { $sort: { day: -1 }},
            { $limit: 7 },
            {$set: {
                totalDuration: {
                    $reduce: {
                        input: '$exercises', 
                        initialValue: 0, 
                        in: {
                            $add : ['$$value', '$$this.duration']
                        }
                    }
                }
            }}
        ])
        if(dbWorkoutRange){
            res.status(200).json(dbWorkoutRange)
        }else {
            res.status(400).json({ message: 'No workouts found in the database!' })
        }
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router
