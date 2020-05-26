import { useState, useEffect } from 'react';
import React from 'react';
import NotesLoader from './NotesLoader'
import Note from './Note'
import './app.css';

function App() {
  const [notesData, setNotesData] = useState({});

  useEffect(() => {
    fetch('/index').then(res => res.json()).then(
      data => {
        setNotesData(JSON.parse(data));
      });
  }, []);


  return (
    <div className="app-container">
      {!(Object.keys(notesData).length === 0 && notesData.constructor === Object) ?
        <NotesLoader notesData={notesData} /> :
        <Note body={""} />
      }
    </div>
  );
}

export default App;
