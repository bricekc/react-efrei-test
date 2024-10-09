import {useCallback, useState} from 'react';

function Count() {
    const [count, setCount] = useState(0)
    const setCountCallBackDecrement = useCallback(
        () => setCount(count - 1),
        [count]
    )
    return (
        <>
            <p> Counter : {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>increment count</button>
            <button onClick={() => setCountCallBackDecrement()}>decrement count</button>
        </>
    );
}

export default Count;