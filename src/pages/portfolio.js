import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Project from '../components/Project';
import './style.css';

class Portfolio extends Component {

    render() {
        return (
            <Fade>
                <section> 
                    <div className="container block">
                        <h2 className="page-header">Portfolio</h2>
                    </div>
                </section>
                <section className="jumbotron">
                    <Project/>
                </section>
            </Fade>
        )
    }
};

export default Portfolio;