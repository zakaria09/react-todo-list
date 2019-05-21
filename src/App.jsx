import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import TaskInput from './components/taskInput';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import fire from './config/fire';
import Logout from './components/logout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        // setState user
        this.setState({ user });
      } else {
        // setState user: null
        this.setState({ user: null });
      }
    });
  }

  render() { 
    return ( 
      <div>
        <NavBar user={this.state.user} />
        <div className="content">
          <Switch>
            <Route 
              path="/create-task" 
              render={props => {
                if(!this.state.user) return <Redirect to="/login" />
                return <TaskInput {...props}/>
              }} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;
