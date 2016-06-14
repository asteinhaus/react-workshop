import React from 'react';

export default class HelloMessage extends React.Component {
    render() {
        return (
          <div>
            <input ref={input => this.input = input} 
                    onChange={event => this.updateModel(event)} 
                    value={this.state.greeting} />
            <p>{this.state.greeting}, World</p>
            <button onClick={() => this.reset()}>
              CLEAR 
              </button>
          </div>
        );
    }

    //constructor
    constructor(props) {
       super(props);
       this.state = {greeting: this.props.greeting};
    }
    //reset
    reset() {
      this.setState({greeting: ""});
      this.input.focus();
    }

    //updateModel
    updateModel(event) {
      this.setState({greeting: event.target.value});
    }
}
