import React from 'react';

export default class GreetingDetail extends React.Component {
    render() {
      const {name, greeting} = this.state;
        return (
          <div>
            <input ref={input => this.input = input} 
                    onChange={event => this.updateModel('name', event.target.value)} 
                    value={name} />
            <input ref={input => this.input = input} 
                    onChange={event => this.updateModel('greeting', event.target.value)} 
                    value={greeting} />
          </div>
        );
    }

    //constructor
    constructor(props) {
       super(props);
       const name = this.props.name;
       const greeting = this.props.greeting
       this.state = {name, greeting};
    }
    //reset
    reset() {
      this.setState({name: "", greeting: ""});
      this.input.focus();
    }

    //updateModel
    updateModel(key, value) {
      this.setState({[name]: value});
    }
}
