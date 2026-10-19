import '../Main.css'
import './Work.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudiesContext } from '../hooks/useStudiesContext';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';


const Work = () => {


    const [title, setTitleText] = useState('');
    const [summary, setSummaryText] = useState('');
    const [notes, setNotesText] = useState('');
    const [error, setError] = useState('');


    const { id } = useParams();
    console.log(id);

      useEffect(() => {
        const fetchStudy = async () => {
          
            console.log('/api/studies/' + id)
            const response = await fetch('/api/studies/' + id)
            const json = await response.json()

            if (response.ok){

                setSummaryText(json.summary);
                setTitleText(json.title);
                setNotesText(sanitizeHtml(marked.parse(json.notes)))
            }

         if(!response.ok){
            setError(json.error)
            console.log(error)
        }
    }

       fetchStudy() 
   
    }, [])

    return(
        <div>
          <div id = "workskin">
            <div class = "preface">
                <h2 class = "work-title">{title}</h2>
                    <div id = "summary">
                        <h3>Summary:</h3> 
                        {/* Limit summary to 1250 char */}                                                                                                                                                                                                                                                                                                                                                                                                                                     
                        {summary}
                    </div>
            </div>
            <div id = "work">  
                <div dangerouslySetInnerHTML={
                { __html: notes}}></div>
            {notes}
            </div>
          </div>
        </div>
    )
}

export default Work