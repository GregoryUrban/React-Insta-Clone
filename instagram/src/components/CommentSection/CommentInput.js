import React from 'react';
 
const CommentInput = props => {
  return (
    <div className='commentForm'>
    <form>
      <input type="text" placeholder="Add a commentinput... " />
      {/* .then(() => reset()) */}
    </form>
    </div> 
  //   an input box that allows users to submit a new comment for any post
  );
};


export default CommentInput;

// From Ryan:
// You aren't setting the value to that input for your new comment. Basically, changes to the field 
// are being tracked in state because of your onChange, but the value of the input is not being 
// controlled anywhere else. It has no reference. So resetting the comment state will reset the 
// comment state but you aren't telling the input to reset. think of it as a snake eating it's own tail. 
// You want to track the value of the input in the state, but you also want to track the state in the
//  value of the input


// Instructions
// Any commented out lines will be pasted from the  instructions below.

// The CommentSection component will receive the array of comments as 
// props and render a Comment component with the username of the poster 
// as well as the post's text. Additionally, there should be an input box 
// that allows users to submit a new comment for any post. We'll work on 
// posting new comments tomorrow.