import React, {Component} from 'react';
import Login from '../Login/Login';


//Extending the functionality of the HOC to conditionally render the LoginPage or the App

//First, we need to change our withAuthenticate HOC to return a second function that will take in a second component (which will be the LoginPage). This will look like a "double arrow" function - const withAuthenticate = PostsPage => LoginPage => {}.
const withAuthenticate = PostsPage => LoginPage =>
  class extends Component {
    constructor(props) {
     //Inside of the class component that the inner function in withAuthenticate returns, we need to add a constructor to hold our state data.
      super(props);
      this.state = {
        loggedIn:false
        // On state we need a loggedIn boolean flag.
      }
    }

    componentDidMount() {
      //In componentDidMount we need to check localStorage to see if a user is logged in, and setState accordingly.
       const user = localStorage.getItem('username')
            user ?  this.setState({loggedIn: true})
            :  this.setState({loggedIn: false})
      }

logout = (event) => {
      event.preventDefault()
      localStorage.clear()
      this.setState({ loggedIn: false })
    }
    render() {
      return (
        (this.state.loggedIn)
        //Inside of the render function we will check if a user is logged in from the state boolean flag
          ?  <PostsPage />
          :  <Login />
          //If a user is logged in we will return the <PostsPage />, else we will return the <LoginPage>


        // <React.Fragment>
        //   {this.state.loggedIn ? <App logout={this.logout}/> : <Login />}
        // </React.Fragment>
      )
    }
  };


export default withAuthenticate;


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