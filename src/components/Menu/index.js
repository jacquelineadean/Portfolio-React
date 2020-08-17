import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from '../../pages/about';
import './style.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }
    
    render() {
        return (
            <Router>
                <section className="menu">
                    <div ref={this.wrapperRef} className="wrapper">
                        <div className="nav">
                            <span className="menu_enter" type="menu-fold" onClick={() => this.handleClick()}> - Menu </span> 
                            <div className="nav__body">
                                <ul>
                                    <li><a href={About}>About</a></li>
                                    <li>Porfolio</li>
                                    <li>Resume</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Router>
        );
    }
}
