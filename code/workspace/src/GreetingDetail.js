import React from 'react';

export default class GreetingDetail extends React.Component {
    render(props) {
      const {name, greeting} = this.state;
        return (
          <div>
            <input ref={input => this.input = input} 
                    onChange={event => this.updateModel('name', event.target.value)} 
                    value={name} />
            <input ref={input => this.input = input} 
                    onChange={event => this.updateModel('greeting', event.target.value)} 
                    value={greeting} />
            <button onClick={() => this.reset()}>
              CLEAR 
            </button>
            <button onClick={() => this.save()}>
              SAVE
            </button>
          </div>
        );
    }

    // Constructor nimmt 2 Properties von außen
    // props.name
    // props.greeting
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
      this.setState({[key]: value});
    }

    save() {
      const onAdd = this.props.onAdd;
      const name = this.state.name;
      const greeting = this.state.greeting;
      onAdd({ name, greeting });
    }

}
