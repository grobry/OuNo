import { useState } from 'react';
import './NewWork.css';
import '../Main.css';

const CreateNotes = () => {
    const [title, setTitleText] = useState('');
    const [summary, setSummaryText] = useState('');
    const [notes, setNotesText] = useState('');
    const [error, setError] = useState('');    
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const study = {title, summary, notes}
        console.log("attempting post to middleware....")

        const response = await fetch('/api/studies', {
            method: 'POST',
            body: JSON.stringify(study),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            console.log(error)
        }
        if(response.ok){
            setTitleText('')
            setSummaryText('')
            setNotesText('')
            setError(null)
            console.log('New study added!', json)
        }
    }

    return (
    <div id="new-main">
    <form class = "new-work" onSubmit={handleSubmit}>
      <div id = "new-head">
        <h2 >Create a New Study Sheet</h2>
     </div>
    <fieldset class = "study-summary">
        <legend class>Preface</legend>
          <dl>
            <dt class = "title-header required">
                <label for = "title">Study Title</label>
            </dt>
            <dd class = "title">
                <input
                type='text'
                class = "normal"
                onChange = {(e) => setTitleText(e.target.value)}
                value = {title}
                />
            </dd>
            <dt class = "summary-header">
               <label for = "summary">Summary</label>
            </dt>
            <dd class = "summary">
            <textarea 
            class = "small"
            onChange = {(e) => setSummaryText(e.target.value)}
            value = {summary}
                />
            </dd>
            </dl>
    </fieldset>
        <fieldset class = "study-set">
          <legend class ="required">Notes</legend>
            <dl>
            <dt class = "study-header">
                <label for = "study-text">Study Text</label>
            </dt>
            <dd class = "study required">
                <textarea 
                class = "large"
                onChange = {(e) => setNotesText(e.target.value)}
                value = {notes}
            />
            </dd>
            </dl>
        </fieldset>
          <button>Add Studyguide</button>
         <div className ="error"> {error} </div>
    </form>
    </div>
    )
}

export default CreateNotes;