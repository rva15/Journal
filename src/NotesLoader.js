import React from 'react';
import Note from './Note'
import NoteCreator from './NoteCreator'
import './notesLoader.css';

export default class NotesLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notesData: []};
    }

    componentDidMount() {
        // testing git username
        fetch('/journal/api/notes').then(res => res.json()).then(
            data => {
              this.setState({notesData: data});
            });
    }


    render() {
        const notesData = this.state.notesData;
        const notesList = [];
        for (var i = 0; i < notesData.length; i++) {
            notesList.push(<Note thisNote={notesData[i]} key={i} />)
        }
        return (
            <div className="timeline-container">
            <NoteCreator />
            <div className="loader-container">
                {notesList}
            </div>
            </div>
        )
    }
}