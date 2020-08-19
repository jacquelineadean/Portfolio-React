import React, { Component } from 'react';
import project1 from "./Project1.png"
import project2 from "./Project2.png"


class Project extends Component {

    render() {
        return (
            <section className="row">
                <div className="col-md-4">
                    <img src={project1} alt="project" />
                    {/* <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <a href={props.repositoryURL}>Repository</a>
                    <a href={props.demoURL}>Demo</a> */}
                </div>
                <div className="col-md-4">
                    <img src={project2} alt="project" />
                </div>
            </section>
        )
    }
}

export default Project;