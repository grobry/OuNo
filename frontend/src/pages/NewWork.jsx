import React from 'react';
import './NewWork.css';
import '../Main.css';

function CreateNotes(){
    const [summaryText, setSummaryText] = React.useState('');
    const [studyText, setStudyText] = React.useState('');    
    const [titleText, setTitleText] = React.useState('');

    return (
    <div id="new-main">
    <form class = "new-work" method = "post" action = "/new" accept-charset = "UTF-8">
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
                class = "normal"
                onChange = {(e) => setTitleText(e.target.value)}
                />
            </dd>
            <dt class = "summary-header">
               <label for = "summary">Summary</label>
            </dt>
            <dd class = "summary">
            <textarea 
            class = "small"
            placeholder="Test"
            onChange = {(e) => setSummaryText(e.target.value)}
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
                placeholder="Test"
                onChange = {(e) => setStudyText(e.target.value)}
            />
            </dd>
            </dl>
        </fieldset>
         <fieldset class = "study-set">
          <legend class ="required">Create Studyguide</legend>
            <ul>
                <li>
                    <input type='submit' name = 'save_button' value="post"
                    />
                </li>
            </ul>
        </fieldset>
    </form>
    </div>
    )
}

export default CreateNotes;