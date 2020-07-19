import { useState, useEffect } from 'react';
import React from 'react';
import NotesLoader from './NotesLoader'
import './app.css';

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
      {!(Object.keys(notesData).length === 0 && notesData.constructor === Object) ?
        <NotesLoader notesData={notesData} /> :
        null
      }
    </div>
  );
}

export default App;
