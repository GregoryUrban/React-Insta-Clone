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
      timestamp: props.timestamp
      // time: this.props.time
    };
  } 

  commentChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  addNewComment = (event, index) => {
    event.preventDefault();

    const comments = this.state.comments.slice();
    const newComment = { 
      text: this.state.comment, 
      username: 'Greg Comment Section',
      timeVal: moment().format('MMMM Do YYYY')
     }
    
    if (this.state.comment[0] !== '') {
      comments.push(newComment);
      this.setState({ comments, comment: '' })
    }
  };


  render() {
    // const time = moment.format("D MMM");
    // <Date>{moment(this.state.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</Date>
    // const time = moment(this.state.time, "MMM Do YYYY, hh:mm:ss a");
    // const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a");

    // console.log(time);
    // const newTime = time.fromNow().toUpperCase();
    return (
      <div className='comments-container'>
        {this.state.comments.map((comment) => {
            return (
            // <Comment comment={comment} timestamp={this.props.comments.timestamp}/>
            <Comment comment={comment} timestamp={this.props.timestamp} />

        //  <Comment comment={this.props.comments} timestamp={this.props.comments.timestamp} />
            
            // <Date>{moment(this.state.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</Date>
            )
        })}
        {/* <p>{newTime}</p> */}
        <div className='comment-input'>
            <form onSubmit={this.addNewComment}>
                {/* <input type='text' onChange={this.commentChange} timestamp={moment(this.state.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()} placeholder='Add a comment'/> */}
                {/* <input type='text' onChange={this.commentChange} timestamp={moment(this.state.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()} placeholder='Add a comment'/> */}
                <input type='text' onChange={this.commentChange} placeholder='Add a comment'/>

                
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