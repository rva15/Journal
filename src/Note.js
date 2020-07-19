import React from 'react';
import './note.css';

export default class Note extends React.Component {

    render() {
        const noteData = this.props.thisNote
        console.log(noteData)
        return (
            <div className="note-container">
                {noteData.body}
            </div>
        );
    }
}