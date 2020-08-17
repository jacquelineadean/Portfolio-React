import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import image from './FullSizeRender.jpeg'
import './style.css';

class Discover extends Component {
    render() {
        return (
            <Fade>
                <section className="container block">
                <h2 className="page-header">Discover</h2>
                </section>
            </Fade>
        )
    }
}

export default Discover;