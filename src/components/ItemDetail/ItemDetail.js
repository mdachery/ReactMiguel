import ItemsCount from "../ItemCounts/ItemCounts"
import { useState } from "react"
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";



const ItemDetail = ({data}) => {

  const {addProductToCart} = useContext(CartContext)

    const [showButton, setShowButton] = useState (false)

    return (
        <div>
            Informacion del Producto
            <h2>{data.title}</h2>
            <img class="img" src={data.img}/>
            <h3>Precio: {data.precio}</h3>
            <h4>Stock: {data.stock}</h4>
            
            
            {showButton == false ?
              <>
              <label>Selecciona Cantidad</label>
              <ItemsCount
               setShowButton = {setShowButton}
              />
              </>
            :
              <>
              <button><Link to='/cart' onClick={() => addProductToCart(data)}>Terminar mi compra</Link></button>
              </>
              }

            
            
        </div>
    )
}

export default ItemDetail