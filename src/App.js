import { useState, useEffect } from 'react';
import React from 'react';
import NotesLoader from './NotesLoader'
import NoteCreator from './NoteCreator'
import './app.css';
import './timeline.css'

function App() {
  const [notesData, setNotesData] = useState({});

  useEffect(() => {
    fetch('/journal/api/notes').then(res => res.json()).then(
      data => {
        setNotesData(data);
      });
  }, []);

  return (
    <div className="app-container">
        <div className="timeline-container">
          <NoteCreator/>
        {!(Object.keys(notesData).length === 0 && notesData.constructor === Object) ?
          <NotesLoader notesData={notesData} /> :
          null
        }
        </div>
      
    </div>
  );
}

export default App;
