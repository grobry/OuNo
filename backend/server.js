require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const studyRoutes = require('./routes/studies')

//express app stored in this const
const backdoor = express()

//middleware - checks if request has body, attatches it to request body if so
backdoor.use(express.json())

backdoor.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//all routes, study/studies
backdoor.use('/api/studies', studyRoutes)

//mongoose, parse in URI 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //only listen for requests if connected to db
        backdoor.listen(process.env.PORT, () => {
            console.log("Successfully connected to db, now listening on port", process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


