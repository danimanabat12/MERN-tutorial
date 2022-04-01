// common json 
const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')

// Shorthand kay same route. 
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoal).put(updateGoal)

// Ang /api/goals kay naa na siya sa server.js. Bantog slash na lang daw gibutang diri
// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
// Kaning mga router above kay mao ni sila ang ga-specify sa CRUD operations. 


module.exports = router