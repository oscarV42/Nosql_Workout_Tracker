const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [],
}) 

const workout = mongoose.model('Workout', workoutSchema);

module.exports = workout;