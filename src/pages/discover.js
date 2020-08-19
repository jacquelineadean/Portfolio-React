import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import image from './austin.jpeg'
import './style.css';

class Discover extends Component {
    render() {
        return (
            <Fade>
                <section>
                    <img className="hero-image"src={image} alt="austin"/>
                    <div className="container block">
                        <h2 className="page-header">Discover</h2>
                    </div>
                    <div className="row">
                        
                    </div>
                </section>
            </Fade>
        )
    }
}

export default Discover;