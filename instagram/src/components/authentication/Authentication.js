import React from 'react';


const withAuthenticate  = App =>
  class extends React.Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
        
    //   }
    // }

    // addUpCounter = () => {
    //   this.setState((prevState, props) => {
    //     return {
    //       counter: prevState.counter + 1
    //     }
    //   })
    // }
    render() {
      return <App />;
    }
  }






export default withAuthenticate;