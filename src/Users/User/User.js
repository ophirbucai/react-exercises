import React from 'react';

function User(props, {key}) {
    return (
        <li key={key}>{props.children}</li>
    );
}

export default User;