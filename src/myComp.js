import React from 'react';

function MyComp(props) {
    function myOnClick() {
        console.log('Clicked from component.')
    }

    return (
        <div>
            <h2 onClick={props.increment}>Hi there, from my component. Count from hoc: {props.count}</h2>
        </div>
    );
}

export default MyComp;