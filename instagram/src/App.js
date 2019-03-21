import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;


// Instructions
// Any commented out lines will directly referenct instructions below.

// At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page, 
// as well as a Post Container and a Comment Section for every piece of mock data in the dummy-data.js file.
