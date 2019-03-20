import React from 'react';
import heart from '../imgs/iconfinder_heart_430099.png';
import chat from '../imgs/iconfinder_Chat_bubble_2202260.png';
import './Comment.css';


function CommentHeader() {
  const Liked = higherOrderComponent()
  return (
    <div className="CommentHeader">
      <Liked />
    </div>
  )
}

// create a HOC
const higherOrderComponent = () => {
  //hOC is a function, returning a class component
  return class Liked extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        likes: 0

      }
    }

    incrementCount = () => {
      this.setState(prevState => {
        return { likes: prevState.likes + 1 }
      })
    }

    render() {
      return (
        <div className='comment-header'>
        <h2 onClick={this.incrementCount}>
          <img src={heart} />
        </h2>
       <h2>
        <img src={chat} />
         </h2> 
       
       <div>
         <h3>Likes {this.state.likes} {this.state.count} </h3>
       </div>
       
      </div>
       
      )
    }
  }
}

export default CommentHeader;

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






// Below is the old version before getting likes to work, keeping until confirmed no longer needed
// class CommentHeader extends React.Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//     this.state = {
//       likes: 0,
//     }

//   }


//  componentDidMount() {
//     this.setState({
//       likes: this.props.likes
//     })

//  }



//   render() {


//     return(
//       <div className = "commentsHeader-container">
//         <div className = "commentsHeaderIMG">
//           <img
//             src = {heart}
//             alt = "heart"
//             onClick = { this.likeHandler } 
//           />
//           <img 
//           src = {chat} 
//           alt = "chat"
//           // onClick = { this.chatHandler } 
//           />
//         </div>
//         <h3> {this.state.likes} {this.state.count} likes </h3>
//       </div>
//     )

//   }

// }

// const CommentHeader = (props) => {
//   // console.log('CommentsHeader props  ', props);

//   return(
//     <div className = "commentsHeader-container">
//       <div className = "commentsHeaderIMG">
//         <img
//           src = {heart}
//           alt = "heart"
//           onClick = { props.likeHandler }
//         />
//         <img src = {chat} alt = "chat"/>
//       </div>
//       <h3 className = "commentsHeaderLikes"> {props.likes} {props.likesVar} </h3>
//     </div>
//   )




// };