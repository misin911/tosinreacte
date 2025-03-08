import {NavLink } from "react-router"


function Navigator () {
    return (
    
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
  <ul>
            <li>
      <NavLink to="/home">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/service"> Contact</NavLink>
            </li>
            <li>
            <NavLink to="/contact">Service</NavLink>
            </li>
        </ul>
  </div>
</nav>


        
    )
}

export default Navigator;