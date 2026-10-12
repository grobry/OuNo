import { useEffect, useState } from 'react'

import StudyDetails from '../components/StudyDetails'

const Template = () => {

const [studies, setStudies] = useState(null)

    useEffect(() => {
        const fetchStudies = async () => {
            console.log("attempting fetch to middleware....")
            //Make sure to resolve during deployment
            fetch('/api/studies')
                .then(response => response.text()) // Switch from .json() to .text()
                .then(text => console.log("Server returned:", text)) 

            const response = await fetch('/api/studies')
            const json = await response.json()

            if (response.ok){
                console.log("fetched")
                setStudies(json)
            }
            if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
            }
        }

        fetchStudies()
    }, [])

    return (
    <div className = "template"> 
        <div className = "study-map">
                {studies && studies.map((study) => (
                    <StudyDetails key= {study._id} study={study}/>
                ))}
        </div>
    </div>
    )
}

export default Template