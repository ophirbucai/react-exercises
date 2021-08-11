import React from 'react';

function Task(props, {key}) {
    return (
        <li key={key}>{props.children}</li>
    );
}

export default Task;
