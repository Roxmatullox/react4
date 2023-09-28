import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    
    return ( 
     <header>
        <div className="container">
            <Nav
            activeKey="/home"
          >
            <Nav.Item>
              <NavLink  to="/">All</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/electronics">Electronic</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/jewelery">Jewelery</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/mens" >Mens</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/womens" >Womens</NavLink>
            </Nav.Item>
          </Nav>
        </div>
     </header>
    )
  }
}

export default Header