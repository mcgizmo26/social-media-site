// External Libraries **************************************************
import React from 'react';
import { Link } from 'react-router-dom';


// Project Imports *****************************************************
import "../Styles/header.css";
import Logout from "../Components/Logout";


// React Component *****************************************************
const HeaderNavigation = () => {
    return(
        <div className="headerStyle">
            <Link className="linkStyles" to="/home">Home</Link>
            <Link className="linkStyles" to="/profile">Profile</Link>
            <Link className="linkStyles" to="/settings">Settings</Link>
            <Logout />
        </div>
    )
};

export default HeaderNavigation;