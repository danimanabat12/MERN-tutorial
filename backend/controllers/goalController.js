// Gikan ni sa package nga express-async-handler. Basically, para di na mag-try catch daw. 
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc  Get goals.
// @route GET /api/goals
// @access Private.
const getGoals = asyncHandler(async (req, res) => {
    // JSON file jud na usually. 
    const goals = await Goal.find({ user: req.user.id})
    // res.status(200).json({message: 'Get goals'})
    res.status(200).json(goals)
})

// @desc  Set goals.
// @route POST /api/goals
// @access Private.
const setGoals = asyncHandler(async (req, res) => {
    // Check nato if naay unod ang request body lol. 
    if(!req.body.text) {
        res.status(400)//.json({message: 'Please add a text field'}) -> Pwede ni pero naa may error handler ang express so... 
        // text/html page ang ihatag ani by default, but we can change it sa through adding middleware function.
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    // JSON file jud na usually. 
    // res.status(200).json({message: 'Set goal'})
    res.status(200).json(goal)
})

// @desc  Update goals.
// @route PUT /api/goals:id
// @access Private.
// NOTE: Dili na need ang id diri kay naa nato sa routes.
const updateGoal = asyncHandler(async (req, res) => {
    // Backticks kay para maka-add og variable sa string. 
    // req gikan sa parameter. 
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401) 
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    // res.status(200).json({message: `Update goal ${req.params.id}`})
    res.status(200).json(updatedGoal)
})

// @desc  Delete goals.
// @route DELETE /api/goals
// @access Private.
const deleteGoal = asyncHandler(async (req, res) => {
   // JSON file jud na usually. 
    const goal = await Goal.findById(req.params.id)
    if(!goal){
    res.status(400)
    throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401) 
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    // Dili na need tong like sa put/update. 
    await goal.remove()
    
    // res.status(200).json({message: `Deleted goal ${req.params.id}`})
    res.status(200).json({id: req.params.id})
})
// Basically, exportable ang getGoals, then ginatawag nato ni siya sa routes, specifically goalRoutes.
module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
}