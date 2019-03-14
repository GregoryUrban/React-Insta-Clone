import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* single instance of the Search Bar being rendered at the top of the page */}
        <PostContainer posts={this.state.posts} />
        {/* a Post Container and a Comment Section for every piece of mock data */}
      </div>
    );
  }
}

export default App;


// Instructions
// Any commented out lines will directly referenct instructions below.

// At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page, 
// as well as a Post Container and a Comment Section for every piece of mock data in the dummy-data.js file.
