import React, {useContext} from "react";
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

export  const  Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = (e) => {
    e.preventDefault()
    auth.logout()
    history.push("/")
  }
  return (
    <nav>
      <div className="nav-wrapper" style={{ padding: '0 2rem'}}>
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">CREATE</NavLink></li>
          <li><NavLink to="/links">LIST</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>EXIT</a></li>
        </ul>
      </div>
    </nav>
  )
}