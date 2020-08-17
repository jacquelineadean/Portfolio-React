import React, { Component } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import image from './FullSizeRender.jpeg'
import './style.css';

class About extends Component {
    // const items = `"Without continual growth and progress, such words as improvement, achievement, and success have no meaning." - Benjamin Franklin`
    render() {
        return (
            <section className="container">
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
                            {/* <a data-toggle="modal" data-target="#ModalPDF" className="btn">Resume</a> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;