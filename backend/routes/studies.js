const express = require('express')
const {
    createStudy,
    getStudies,
    getStudy,
    deleteStudy,
    updateStudy
} = require('../controllers/studyController')
const router = express.Router()

//Get all studies
router.get('/', getStudies)

//Get single study
router.get('/:id', getStudy)

//Post a new study
router.post('/', createStudy)

//Delete a study
router.delete('/:id', deleteStudy)

//Update a workout
router.put('/:id', updateStudy)

module.exports = router