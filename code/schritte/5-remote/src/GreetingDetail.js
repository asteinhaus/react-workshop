import React, {PropTypes} from 'react';

export default class GreetingDetail extends React.Component {
    render() {
        const {name, greeting} = this.state;

        return (
            <div>
                <input ref={input => this.input = input}
                       onChange={event => this.updateModel('name', event.target.value)}
                       value={name} />
                <input onChange={event => this.updateModel('greeting', event.target.value)}
                       value={greeting} />
                <button
                    onClick={() => this.reset()}>
                    Clear
                </button>
                <button
                    onClick={() => this.save()}>
                    Save
                </button>
            </div>);
    }
    constructor(props) {
        super(props);
        if (this.props.greeting) {
            const {name, greeting} = this.props.greeting;
            this.state = {
                name,
                greeting
            };
        } else {
            this.state = {
                name: "",
                greeting: ""
            };
        }
    }
    reset() {
        this.setState({name: '', greeting: ''});
        this.input.focus();
    }
    save() {
        const {onAdd} = this.props;
        const {name, greeting} = this.state;
        onAdd({
            name,
            greeting
        });
    }

    updateModel(name, value) {
        this.setState({[name]: value});
    }
}
GreetingDetail.propTypes = {
    greeting: PropTypes.object,
    onAdd: PropTypes.func.isRequired
};