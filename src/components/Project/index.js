import React, { Component } from 'react';
import Budget from "./Budget.png";
import FitFeed from "./FitFeed_Brand.png";
import Workout from "./workout.png";
import Cuisine from "./cuisine.jpeg";
import Employee from "./employee.jpg";
import Covid from "./covid.jpg";

class Project extends Component {

    render() {
        return (
            <section> 
                {/* Row 1 */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="card col-md-4 border-4">
                        <img className="card-img-top" src={Budget} alt="Project" ></img>
                            <div className="card-body">
                                <h5 className="card-title">Budget Tracker</h5>
                                <p className="card-text">Full-Stack Budget Tracking Application</p>
                                <a href="https://github.com/jacquelineadean/BudgetTracker" className="btn" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <a href="https://offlinebudgettrackerapp.herokuapp.com/" className="btn" target="_blank"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></a>
                            </div>
                    </div>
                    <br></br>
                    <div className="card col-md-4 border-4" >
                        <img className="card-img-top" src={FitFeed} alt="Project" ></img>
                            <div className="card-body">
                                <h5 className="card-title">Fit Feed</h5>
                                <p className="card-text">Full-Stack Social Media Platform for Fitness</p>
                                <a href="https://github.com/jacquelineadean/FitFeed" className="btn" target="_blank"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <a href="https://fitfeed123.herokuapp.com/" className="btn" target="_blank"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></a>
                            </div>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="card col-md-4 border-4">
                        <img className="card-img-top" src={Workout} alt="Project" ></img>
                            <div className="card-body">
                                <h5 className="card-title">Workout Tracker</h5>
                                <p className="card-text">Full-Stack Fitness Tracking Application</p>
                                <a href="https://github.com/jacquelineadean/WorkoutTracker" className="btn" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <a href="workouttracker123.herokuapp.com/" className="btn" target="_blank"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></a>
                            </div>
                    </div>
                    <br></br>
                    <div className="card col-md-4 border-4" >
                        <img className="card-img-top" src={Employee} alt="Project" ></img>
                            <div className="card-body">
                                <h5 className="card-title">Template Engine</h5>
                                <p className="card-text">Express CLI application to generate an employee directory.</p>
                                <a href="https://github.com/jacquelineadean/TemplateEngine-EmployeeSummary.git" className="btn" target="_blank"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <a href=" https://drive.google.com/file/d/1FaPoOH48wX0xpsYGqRqjcKVIY9UoQJdc/view?usp=sharing" className="btn" target="_blank"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></a>
                            </div>
                    </div>
                </div>
                {/* Row 3 */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="card col-md-4 border-4">
                        <img className="card-img-top" src={Covid} alt="Project" ></img>
                            <div className="card-body">
                                <h5 className="card-title">Covid Corner</h5>
                                <p className="card-text">Full-Stack Application for Covid-19 Visualization and Awareness</p>
                                <a href="#" className="btn" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <a href="#" className="btn" target="_blank"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></a>
                            </div>
                    </div>
                    <br></br>
                    <div className="card col-md-4 border-4" >
                        <img className="card-img-top" src={Cuisine} alt="Project" ></img>
                            <div className="card-body">
                                <h5 className="card-title">CuEARated Cuisine</h5>
                                <p className="card-text">Front-end Interactive Cooking Application</p>
                                <a href="https://github.com/Jaesenix/CuEARated-Cuisine" className="btn" target="_blank"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
                                <a href=" https://jaesenix.github.io/CuEARated-Cuisine/" className="btn" target="_blank"><i className="fa fa-desktop fa-lg" aria-hidden="true"></i></a>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Project;