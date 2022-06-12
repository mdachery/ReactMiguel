const ItemDetail = ({data}) => {
    return (
        <div>
            Informacion del Producto
            <h2>{data.title}</h2>
            <h3>Precio: {data.precio}</h3>
            <h4>Stock: {data.stock}</h4>
        </div>
    )
}

export default ItemDetail