import React from 'react';
import './note.css';

export default class Note extends React.Component {

    render() {
        return (
            <div className="note-container">
                {this.props.body}
            </div>
        );
    }
}