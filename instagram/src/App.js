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
    console.log("In the constructor");
  }

  changeHandler = id => {
    console.log(id);
  };

  componentDidMount() {
    console.log("In CDM");
    this.setState({ data: dummyData });
  }
 
  componentDidUpdate(prevProps, prevState) {
    console.log("CDU called");
    if (this.state.posts.length > prevState.posts.length) {
      console.log("Posts state changed, component will update");
      this.setState({ name: "Greg" });
    }
  }

  componentWillUnmount() {}
 
  render() {
    console.log("In render");
    return (
      <div className="App">
      <header>
          <SearchBar changeHandler={this.changeHandler} />
      </header>
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
