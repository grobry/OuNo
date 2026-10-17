import { useEffect } from 'react'
import { useStudiesContext } from '../hooks/useStudiesContext'

import StudyDetails from '../components/StudyDetails'

const Template = () => {
   const {studies, dispatch} = useStudiesContext()

    useEffect(() => {
        const fetchStudies = async () => {
          
            //Make sure to resolve during deployment
            const response = await fetch('/api/studies')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_STUDIES', payload: json})
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