import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState();

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h1> Counter App</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter