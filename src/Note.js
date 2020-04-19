import React from 'react';
import './Note.css';

export default class Note extends React.Component {

    render() {
        return (
            <div className="Note-text">
                {this.props.body}
            </div>
        );
    }
}