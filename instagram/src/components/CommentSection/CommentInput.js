import React from 'react';
 
const CommentInput = props => {
  return (
    <div className='commentForm'>
    <form>
      <input type="text" placeholder="Add a comment... " />
      .then(() => reset())
    </form>
    </div> 
  //   an input box that allows users to submit a new comment for any post
  );
};

export default CommentInput;


// Instructions
// Any commented out lines will be pasted from the  instructions below.

// The CommentSection component will receive the array of comments as 
// props and render a Comment component with the username of the poster 
// as well as the post's text. Additionally, there should be an input box 
// that allows users to submit a new comment for any post. We'll work on 
// posting new comments tomorrow.