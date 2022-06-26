import { useState } from 'react';


const ItemsCount= ({setShowButton}) => {

    const addToCart = () => {
        return (
            console.log ("Cantidad: ", cantidad)
        )
    }

    const [cantidad, setCantidad] = useState (1)


    const addCount = () => {

        setCantidad (cantidad + 1)

    }

    const subCount = () => {

        setCantidad (cantidad - 1)

    }
    
    return (

        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={subCount} disabled={cantidad == 0}>-</button>
            <p style={{margin: '0 10px'}}>{cantidad}</p>
            <button onClick={addCount}>+</button>
        </div>
        <button onClick={() => setShowButton(true)}>Agregar producto</button>
        </>


    )

}

export default ItemsCount