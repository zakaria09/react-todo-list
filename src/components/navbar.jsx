import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {

    logout = (e) => {
        e.preventDefault();
        
    }

    render() { 
        return ( 
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link><Link exact to="/">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link><Link to="/create-task">Create Task</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                { this.props.user ? 
                    <Nav.Link><Logout/></Nav.Link>
                    :
                    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                }
                    <Nav.Link eventKey="link-2"></Nav.Link>
                </Nav.Item>
            </Nav>
         );
    }
}
 
export default NavBar;