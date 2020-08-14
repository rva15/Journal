import React from 'react';
import './noteCreator.css';

export default class NoteCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: this.state.value })
        };
        fetch('/journal/api/notes', requestOptions)
      }
    
    render() {
        return (
            <div className='creator-container'>
                <textarea 
                value={this.state.value}
                onChange={this.handleChange} 
                className='textarea-style' />
                <div>
                    <button 
                    onClick={this.handleSubmit}
                    className='creator-action-bar'>
                        Create
                    </button>
                </div>
            </div>
        )
    }
}