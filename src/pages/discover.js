import React, { Component } from 'react';
import Locator from '../components/Locator';
import image from './austin.jpeg'
import './style.css';

class Discover extends Component {
    render() {
        return (
                <section>
                    <img className="hero-image"src={image} alt="austin"/>
                    <div className="container block">
                        <h2 className="page-header">Discover</h2>
                    </div>
                    <div className="row">
                        <Locator />  
                    </div>
                </section>
        )
    }
}

export default Discover;