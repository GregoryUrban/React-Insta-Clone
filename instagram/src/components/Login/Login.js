import React from 'react';
import Proptypes from 'prop-types';


class Login extends React.Component {
    constructor(props) {
            super();
            this.state = {
                username: '',
                password: ''
            }
            
        } // constructor
        
        loginHandler = (event) => {
            this.setState({[event.target.name]: event.target.value} );
            } // loginHandler

        loginSubmitHandler = event => {
            // event.preventDefault();
            localStorage.setItem('username', this.state.username);
            // localStorage.removeItem('username={"Greg"}')

            //This login function should set a username on localStorage
            window.location.reload();
            // Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
        }; // loginSubmitHandler

    render() {
        return(
          <div className = "login-container">
            <h1 className = "loginTitle">Welcome to Instagram</h1>
    
            <form className = "loginForm">
    
              <input
                type = "text"
                placeholder = " enter username"
                name = "username"
                value = {this.state.username}
                onChange = {this.loginHandler}
                className = "loginFormat"
              />
    
              <input
                type = "password"
                placeholder = " enter password"
                name = "password"
                value = {this.state.password}
                onChange = {this.loginHandler}
                className = "loginFormat"
              />
    
              <button
                className = "loginButton"
                onClick = {this.loginSubmitHandler}
              > Login
              </button>
    
            </form>
    
          </div>
    
        )
      }
    
} // Login extends React.Component




export default Login;


// Day 3
// In your components directory, create a directory called Login and add a new file called Login.js.
// done

// There should be a username input, a password input, and a Login button.
// done

// The component should invoke the login function in Login.js when a user logs in.
// done

// This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.
// done

// Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
// done