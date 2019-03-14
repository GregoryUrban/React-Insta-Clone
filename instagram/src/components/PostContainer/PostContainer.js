import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
      <div className="posts-container-wrapper">
        {props.posts.map(p => <Post key={p.imageUrl} post={p} />)} 
        {/* ^^^iterate over said data ^^^*/}
      </div>
    );
  };


export default PostContainer;

// Instructions:
// Any commented out lines will be pasted from the  instructions below.

//  The root App component of your application should import the dummy data from the dummy-data.js file
// with import dummyData from './dummy-data'; and iterate over said data, passing each individual object 
// as a prop to an instance of PostContainer.
