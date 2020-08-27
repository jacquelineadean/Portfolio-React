import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            <section className="menu">
                <div ref={this.wrapperRef} className="wrapper">
                    <div className="nav">
                        <span className="menu_enter" type="menu-fold" onClick={() => this.handleClick()}> - Menu </span>
                        <span className="nav__body">
                            <ul>
                                <li>
                                    <Link to="/" className="link">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="link">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/discover" className="link">
                                        Discover
                                    </Link>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}
