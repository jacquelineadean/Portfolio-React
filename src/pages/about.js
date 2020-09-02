import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Header from '../components/Header';
import image from './FullSizeRender.jpeg';
import './style.css';

class About extends Component {
    render() {
        return (
            <Fade>
                <Header></Header>
                <section className="container block">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <img src={image} alt="profile" className="card-img profile-picture"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-box">
                                <h3 className="card-title">About</h3>
                                <p className="card-text">
                                    I am a Software Engineer passionate about building dynamic applications with attention to scalability. 
                                    Originally from Georgia, I currently live in Austin, Texas where I recently graduated from the University of Texas with a certificate in Full Stack Web Development.
                                    A few of my favorite technologies to work with include React, Node, and SQL/noSQL databases, but I am committed to continuous development and excited to further advance my repertoire of languages and technologies.
                                </p>
                                <p className="card-text">
                                    When I'm not programming, I try to get away from the screen and get outside. My favorite activities all involve the great outdoors. Whether it's going for a run, hiking, kayaking, or just
                                    having a picnic in the park, I am happiest when I'm getting fresh air in the sun.
                                </p>
                                <button className="btn resume">
                                    <a href="https://drive.google.com/file/d/11cLB0H9OLoVNq71mziWRvedWjWUrkXYa/view?usp=sharing" target="_blank" className="btn">Resume</a>
                                </button>
                                <button className="btn portfolio">
                                    <Link to="/portfolio" className="btn">Portfolio</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        )
    }
}

export default About;