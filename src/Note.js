import React from 'react';
import './note.css';

export default class Note extends React.Component {

    render() {
        const noteData = this.props.thisNote
        return (
            <div className="note-container">
                <div className="note-body">
                    {noteData.body}
                </div>
                <div className="note-action-bar">
                    <button className="note-button">
                        Edit
            </button>
                    <button className="note-button">
                        Delete
            </button>
                </div>
            </div>
        );
    }
}