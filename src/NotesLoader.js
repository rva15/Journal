import React from 'react';
import Note from './Note'
import './notesLoader.css';

export default class NotesLoader extends React.Component {

    render() {
        const notesData = this.props.notesData;
        const notesList = [];
        for (var i = 0; i < notesData.length; i++) {
            notesList.push(<Note thisNote={notesData[i]} key={i} />)
        }
        return (
            <div className="loader-container">
                {notesList}
            </div>
        )
    }
}