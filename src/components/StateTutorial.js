import React, { useState } from 'react'

const StateTutorial = () => {

    const [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter(counter + 1);
    }
    
    return (
        <div>
            {counter}
            <button onClick={onClick} >Increment</button>
        </div>
    )
}

export default StateTutorial
