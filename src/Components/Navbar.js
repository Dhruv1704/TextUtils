// Components should start with capital letter.

import PropTypes from 'prop-types';
import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar(props){
    return(
        <nav className="navbar" id={"nav"}>
            <div className="title-div">
                <Link to="/" className="site-title">{props.title}</Link>
                <li>
                    <Link to="/" className="sub-title">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-item">{props.navItem}</Link>
                </li>
            </div>
            <div className="search-div">
                {/*<input type="checkbox" className="input" placeholder="Search"/>*/}
                <button type="button" className="search-btn" onClick={props.toggleMode}>Enable {props.mode} Mode</button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,   // is required compulsory if not written then error
    navItem : PropTypes.string
}

Navbar.defaultProps = {  // default value if props is not passed.
    title : 'Set title here',
    navItem: 'About text here'
}

