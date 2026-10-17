import { useStudiesContext } from "../hooks/useStudiesContext"
import { Link } from 'react-router-dom'


function StudyDetails({study}){
    const{ dispatch }= useStudiesContext()
 
    const handleDelete = async () => {
        const response = await fetch('/api/studies/' + study._id,  {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_STUDIES', payload: json})
        }
    }

    return (
        <div className = "study-details">
            <h2>{study.title}</h2>
            <p>Date Due: <i>{study.date}</i></p>
            <p>{study.summary}</p>
            <p>{study.notes}</p>
            <button onClick={handleDelete}>Delete</button>
            <Link to={'/update/' + study._id} className ="link">
                <a>Link</a>
            </Link>
        </div>
    )
}

export default StudyDetails;