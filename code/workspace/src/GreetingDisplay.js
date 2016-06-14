import React from 'react';

export default function GreetingDisplay(props) {
    return <h1>{props.location.query.greeting} {props.location.query.name}</h1>;
}
