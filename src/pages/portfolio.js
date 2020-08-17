import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import image from './FullSizeRender.jpeg'
import './style.css';

class Portfolio extends Component {

    render() {
        return (
            <Fade>
                <section className="container block">
                    <h2 className="page-header">Projects</h2>
                </section>
            </Fade>
        )
    }
};

export default Portfolio;