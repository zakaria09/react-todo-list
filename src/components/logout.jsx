import React, { Component } from 'react';
import fire from '../config/fire';
import {Link} from 'react-router-dom';

class Logout extends Component {

    signOut = e => {
        e.preventDefault();
        fire.auth().signOut();
    }

    render() { 
        return (
            <Link onClick={this.signOut}>
                Sign Out
            </Link>
        );
    }
}
 
export default Logout;