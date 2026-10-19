import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useStudiesContext } from '../hooks/useStudiesContext';
import './NewWork.css';
import '../Main.css';


import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, BlockTypeSelect, CreateLink, ListsToggle, toolbarPlugin  } from '@mdxeditor/editor'
import { headingsPlugin, listsPlugin, linkDialogPlugin, linkPlugin  } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'

function UpdateNotes(){
    const [title, setTitleText] = useState('');
    const [summary, setSummaryText] = useState('');
    const [notes, setNotesText] = useState('');
    const [error, setError] = useState('');
    const [study, setStudy] = useState('') 
    
    
      const editorRef = useRef(null)
    
    
      const handleExternalUpdate = () => {
        // 2. Use optional chaining to safely set the new content
        editorRef.current?.setMarkdown(notes)
      }
    
    const{ dispatch }= useStudiesContext()
    const { id } = useParams();
    console.log(id);

      useEffect(() => {
        const fetchStudy = async () => {
          
            console.log('/api/studies/' + id)
            const response = await fetch('/api/studies/' + id)
            const json = await response.json()

            if (response.ok){
                setStudy(json);

                editorRef.current?.setMarkdown(json.notes);
                setSummaryText(json.summary);
                setTitleText(json.title);
            }

         if(!response.ok){
            setError(json.error)
            console.log(error)
        }
    }
  
  
   fetchStudy() 
   
    }, [])
    


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const updated = {title, summary, notes}
        console.log("attempting put to middleware....")

        const response = await fetch('/api/studies/' + id, {
            method: 'PUT',
            body: JSON.stringify(updated),
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
            editorRef.current?.setMarkdown('')
            setError(null)
            handleExternalUpdate
            console.log('study updated!', json)
            dispatch({type: 'UPDATE_STUDY', payload: json})
    }
}

    return (
    <div id="new-main">
    <form class = "new-work" onSubmit={handleSubmit}>
      <div id = "new-head">
        <h2 >Update Study Sheet</h2>
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
               <MDXEditor 
                ref={editorRef} 
                markdown={notes}
                contentEditableClassName="prose"
                plugins={[
                listsPlugin(),
                headingsPlugin(),
                linkDialogPlugin(),
                linkPlugin(),
                toolbarPlugin({
                toolbarClassName: 'text-toolbar',
                toolbarContents: () => (
                    <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                    <ListsToggle options={['bullet', 'number']}/>
                    <CreateLink/>
                    </>
                )
                })
            ]}
                onChange = {(markdown) => setNotesText(markdown)}
                />
            </dd>
            </dl>
        </fieldset>
          <button class = "work-button">Update Studyguide</button>
         <div className ="error"> {error} </div>
    </form>
    </div>
    )
}

export default UpdateNotes