//requiring mongoose
const mongoose = require("mongoose");

//sets up the schema in mongoose
const Schema = mongoose.Schema;

//sets up a workout and how it will be stored to the database
const workoutSchema = new Schema({
    //type of exercise, weights or cardio
    type: {
        type: String,
        required: "Either a weight or cardio workout."
    },
    // name of the new exercise
    name: {
        type: String,
        required: "Please enter a name for the new workout."
    },
    //length, or duration of the new exercise
    duration: {
        type: Number,
        required: "Enter the duration of the exercise"
    },
    //weight needed for the new exercise
    //not required
    weight: {
        type: Number
    },
    //sets in the exercise
    //not required
    sets: {
        type: Number
    },
    //reps in the exercise
    //not required
    reps: {
        type: Number
    }
});

//sets up the workout model into a variable that can be exported
const Workout = mongoose.model("Workout", workoutSchema);

//export our new schema
module.exports = Workout;