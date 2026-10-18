import { useStudiesContext } from "../hooks/useStudiesContext"
import { Link } from 'react-router-dom'
import '../pages/NewWork.css';



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
        <div class = "details">
            <ul class = "study-details">
                <li>
                    <h2 class>{study.title}</h2>
                </li>
                <li>
                    <div class = "links-bar">
                        <button onClick={handleDelete} class = "work-button">Delete</button>
                        <Link to={'/update/' + study._id} class = "work-button">
                            <a>Edit</a>
                        </Link>
                        <Link to={'/work/' + study._id} class = "work-button">
                            <a>View Study Guide</a>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default StudyDetails;