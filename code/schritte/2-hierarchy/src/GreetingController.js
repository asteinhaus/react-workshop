import React from 'react';
// import GreetingMaster from './GreetingMaster';
import GreetingMaster from './GreetingMaster';
import GreetingDetail from './GreetingDetail';

let currentId = 0;

const sampleGreetings = [{
    id: currentId++,
    name: 'Olli',
    greeting: 'Huhu'
},
    {
        id: currentId++,
        name: 'Oma',
        greeting: 'Hallo'
    }
];

const MODE_MASTER = 'MODE_MASTER';
const MODE_DETAIL = 'MODE_DETAIL';

export default class GreetingController extends React.Component {
    render() {
        const {mode, greetings} = this.state;
        return (
            <div>
                {mode === MODE_MASTER ? 
                    <GreetingMaster greetings={greetings}
                        onAdd={() => this.setState({mode: MODE_DETAIL})}
                    /> :
                    <GreetingDetail onAdd={(greeting) => this.addGreeting(greeting)} />
                }
            </div>);
    }
    constructor(props) {
        super(props);
        this.state = {
            greetings: sampleGreetings,
            mode: MODE_MASTER
        };
    }

    addGreeting(greetingToBeAdded) {
        const {greetings} = this.state;
        greetingToBeAdded.id = currentId++;
        greetings.push(greetingToBeAdded);
        this.setState({
            greetings,
            mode: MODE_MASTER
        });
    }
}
