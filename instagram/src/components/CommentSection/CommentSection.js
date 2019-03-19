import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      // The CommentSection component will receive the array of comments as props  
      comment: '' ,
    };
  } 

  commentChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  addNewComment = (event, index) => {
    let form = event.target;// this contributes to resetting form after input
    event.preventDefault();// this contributes to resetting form after input
    form.reset(); // this contributes to resetting form after input

    const comments = this.state.comments.slice();
    const newComment = { 
      text: this.state.comment, 
      username: 'Greg Comment Section',
     }

    if(this.state.comment !== undefined){
      comments.push(newComment);

      this.setState(prevState => {
        return {
          comments: [...prevState.comments, newComment],
          newComment: ''
          
        };
      });
      
    }

  }; // END OF addNewComment

  state = this.initialState
  handleFormReset = () => {
    this.setState(() => this.initialState)
  }

  componentDidUpdate(prevProps, prevState) {
    if( prevProps.searchTerm !== this.props.searchTerm) {
      console.log('search has changed to ', this.state.searchTerm);
      this.setState(
         {searchTerm: this.props.searchTerm}
      )
    }
  }



  render() {
    const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a");
    const newTime = time.fromNow().toUpperCase();
    return (
      <div className='comments-container'>
        {this.state.comments.map((comment) => {
            return (
            <Comment comment={comment} />
            )
        })}
        <p>{newTime}</p>
        <div className='comment-input'>
            <form onSubmit={this.addNewComment}>
                <input 
                type='text' 
                onChange={this.commentChange} 
                placeholder='Add a comment'
                />
            </form>
        </div>
      </div> 
    );
  } 
  // render a Comment component with the username of the poster as well as the post's text
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ username: PropTypes.string , text: PropTypes.string, timestamp: PropTypes.string})
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