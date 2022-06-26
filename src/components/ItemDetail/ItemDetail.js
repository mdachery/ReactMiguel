import ItemsCount from "../ItemCounts/ItemCounts"
import { useState } from "react"
import { Link } from "@mui/material"

const ItemDetail = ({data}) => {

    const [showButton, setShowButton] = useState (false)

    return (
        <div>
            Informacion del Producto
            <h2>{data.title}</h2>
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
              <button><Link to='/cart'>Terminar mi compra</Link></button>}

            
            
        </div>
    )
}

export default ItemDetail