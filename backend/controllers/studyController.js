const Study = require('../models/studyModel')
const mongoose = require('mongoose')

//get all studies
const getStudies = async (req, res) => {
    //grabs all studies, lists in descesending order ("-1")
    const studies = await Study.find({}).sort({createdAt: -1})

    res.status(200).json(studies)
}

//get a single study
const getStudy = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No matching study exists!'})
    }

    const study = await Study.findById(id)

    if (!study){
        //exit to avoid continued waiting 
        return res.status(404).json({error: 'No matching study exists!'})
    }

    res.status(200).json(study)
}

//create a new study
const createStudy = async (req, res) => {
    const {title, notes, summary} = req.body

    try{
        const study = await Study.create({title, notes, summary})
        res.status(200).json(study)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//delete a study
const deleteStudy = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No matching study exists!'})
    }

    const study = await Study.findOneAndDelete({_id: id})

     if (!study){
        //exit to avoid continued waiting 
        return res.status(404).json({error: 'No matching study exists!'})
    }

    res.status(200).json(study)
}

//update a study
const updateStudy = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No matching study exists!'})
    }

    const study = await Study.findOneAndUpdate({_id: id}, {
        //spread out body
        ...req.body
    })

    if(!study){
        return res.status(404).json({error: "No matching study exists!"})
    }
    res.status(200).json(study)
}

module.exports = {
    createStudy,
    getStudies,
    getStudy,
    deleteStudy,
    updateStudy
}