import { useState } from 'react';


const ItemsCount= () => {

    const [count, setCount] = useState (0)

    const addCount = () => {

    setCount(count + 1)

    }

    const subCount = () => {

        setCount(count - 1)

    }
    
    return (

        <div>
            <button onClick={subCount} disabled={count == 0}>-</button>
            <p>{count}</p>
            <button onClick={addCount}>+</button>
        </div>


    )

}

export default ItemsCount