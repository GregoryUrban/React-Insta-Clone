import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    return (
      <div className="comment-text">
        <p>
            <span className='bolded-name'>
                {props.comment.username}
                {'  '}
            </span>
            {props.comment.text}
        </p>
      </div>
    //a Comment component with the username of the poster as well as the post's text
    );
  };
  
  Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };


export default Comment;

// Instructions
// Any commented out lines will be pasted from the  instructions below.

// The CommentSection component will receive the array of comments as 
// props and render a Comment component with the username of the poster 
// as well as the post's text. Additionally, there should be an input box 
// that allows users to submit a new comment for any post. We'll work on 
// posting new comments tomorrow.