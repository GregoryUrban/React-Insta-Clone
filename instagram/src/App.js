import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PropTypes from 'prop-types'; 
// import SearchBar from './components/SearchBar/SearchBar'
// import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <p> Structure setup by Greg </p>
      {/* <p>Structure setup</p> */}
      {/* <SearchBar /> */}
        {/* <PostContainer posts={this.state.posts} /> */}
      </div>
    );
  }
}

export default App;
