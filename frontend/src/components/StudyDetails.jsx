function StudyDetails({study}){
    if(study.summary){
        
    }
    return (
        <div className = "study-details">
            <h2>{study.title}</h2>
    
            <p>Date Due: <i>{study.date}</i></p>
            <p>{study.notes}</p>
        </div>
    )
}

export default StudyDetails;