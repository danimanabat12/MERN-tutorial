// Gikan ni sa package nga express-async-handler. Basically, para di na mag-try catch daw. 
const asyncHandler = require('express-async-handler')

// @desc  Get goals.
// @route GET /api/goals
// @access Private.
const getGoals = asyncHandler(async (req, res) => {
    // JSON file jud na usually. 
    res.status(200).json({message: 'Get goals'})
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
    // JSON file jud na usually. 
    res.status(200).json({message: 'Set goal'})
})

// @desc  Update goals.
// @route PUT /api/goals:id
// @access Private.
// NOTE: Dili na need ang id diri kay naa nato sa routes.
const updateGoal = asyncHandler(async (req, res) => {
    // Backticks kay para maka-add og variable sa string. 
    // req gikan sa parameter. 
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc  Delete goals.
// @route DELETE /api/goals
// @access Private.
const deleteGoal = asyncHandler(async (req, res) => {
   // JSON file jud na usually. 
   res.status(200).json({message: `Delete goal ${req.params.id}`})
})
// Basically, exportable ang getGoals, then ginatawag nato ni siya sa routes, specifically goalRoutes.
module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
}