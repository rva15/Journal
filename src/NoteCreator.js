import React from 'react';
import './noteCreator.css';

export default class NoteCreator extends React.Component {
    render() {
        return(
            <div className='creator-container'>
            <textarea className='textarea-style'/>
            <div>
                <button className='creator-action-bar'>
                    Create
                    </button>
            </div>
            </div>
        )
    }
}