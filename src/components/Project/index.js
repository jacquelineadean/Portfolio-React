import React, { Component } from 'react';

class Project extends Component {

    render(props) {
        return (
            <div>
                <img src={props.image} alt="" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.repositoryURL}>Repository</a>
                <a href={props.demoURL}>Demo</a>
            </div>
        )
    }
}

export default Project;