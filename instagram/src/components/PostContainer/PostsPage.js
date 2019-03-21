import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import './Posts.css';


class PostsPage extends React.Component {
   
    constructor() {
      super();
      this.state = {
        posts: dummyData,
        searchTerm: ''
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
      } 
    }
  
    componentWillUnmount() {}
   
    render() {
      console.log("In render");
      return (
        <div className="PostsPage">
        <header>
            <SearchBar
              name = 'searchTerm'
              value = {this.state.searchTerm}
              updateHandler = {this.updateHandler}
            />
        </header>
          {/* single instance of the Search Bar being rendered at the top of the page */}
          <PostContainer 
          posts={this.state.posts} 
          name = 'searchTerm'
          searchTerm = {this.state.searchTerm}
          data = {dummyData}
          />
        </div>
      );
    }
  }


export default PostsPage;



// Tasks (Day III)
// Create a <PostsPage /> component in your components/PostsContainer directory. 
// Check

// You'll have to move a lot of what is rendered in app.js to this new component
//done

// In app.js, render the PostsPage component.
//done

// Make sure the app working as it was before since it has been re-factored now.
//done

// This is to ensure that we clean up our App component a little bit before we re-factor it to be wrapped up in an HOC