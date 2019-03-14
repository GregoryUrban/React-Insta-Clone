import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
      // The CommentSection component will receive the array of comments as props   
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((e, i) => <Comment key={i} comment={e} />)}
        <CommentInput />
      </div>
    );
  } 
  // render a Comment component with the username of the poster as well as the post's text
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


export default CommentSection;

// Instructions
// Any commented out lines will be pasted from the  instructions below.

// The CommentSection component will receive the array of comments as 
// props and render a Comment component with the username of the poster 
// as well as the post's text. Additionally, there should be an input box 
// that allows users to submit a new comment for any post. We'll work on 
// posting new comments tomorrow.