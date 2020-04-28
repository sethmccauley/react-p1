import React, { useState } from 'react';

function MyComp() {
    const [count, setCount] = useState(1000);

    function myOnClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h2 onClick={myOnClick}>Hi there, from my component. Local Count: {count}</h2>
        </div>
    );
}

export default MyComp;