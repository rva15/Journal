import { useState, useEffect } from 'react';
import React from 'react';
import NotesLoader from './NotesLoader'
import Note from './Note'
import './app.css';

function App() {
  const [note, setNote] = useState({});

  useEffect(() => {
    fetch('/index').then(res => res.json()).then(
      data => {
        setNote(data);
      });
  }, []);

  return (
    <div className="app-container">
      {!(Object.keys(note).length === 0 && note.constructor === Object) ?
        <NotesLoader notesData={note.posts} /> :
        <Note body={""} />
      }
    </div>
  );
}

export default App;
