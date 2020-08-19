import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';
import Project from '../components/Project';
import './style.css';

class Portfolio extends Component {
    state = {
        onfrontEnd: false,
        onbackEnd: false,
        onfullStack: false,
        isOpen: false,
    };

    render() {
        const allElement = (event) => {
            event.preventDefault();
            this.setState({
                onfullStack: true,
                onbackEnd: true,
                onfrontEnd: true,
            });
        };

        const frontEnd = (event) => {
            event.preventDefault();
            this.setState({
                onfrontEnd: true,
                onbackEnd: false,
                onfullStack: false,
                isOpen: true,
            });
        };

        const backEnd = (event) => {
            event.preventDefault();
            this.setState({
                onbackEnd: true,
                onfrontEnd: false,
                onfullStack: false,
                isOpen: true
            });
        };

        const fullStack = (event) => {
            event.preventDefault();
            this.setState({
                onfullStack: true,
                onbackEnd: false,
                onfrontEnd: false,
                isOpen: true
            });
        };

        return (
            <Fade>
                <section> 
                    <div className="container block">
                        <h2 className="page-header">Portfolio</h2>
                    </div>
                    <div className="row">
                        <Project/>
                    </div>
                </section>
            </Fade>
        )
    }
};

export default Portfolio;