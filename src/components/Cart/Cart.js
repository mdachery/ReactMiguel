import CartContext from "../../context/CartContext"
import { useContext } from "react"

const Cart = () => {

    const { CartListItems, TotalPrice } = useContext (CartContext)
    console.log ("CartListItems desde el checkout: ", CartListItems)


    return (
        <>
        <h2>Check Out</h2>
        <table>
            <thead>
            <tr>
                <td><b>Item</b></td>
                <td><b>Categoria</b></td>
                <td><b>Cantidad</b></td>
                <td><b>Precio</b></td>
            </tr>
            </thead>
            <tbody>
            {CartListItems.map ( (item) => {
                return (
                    <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>1</td>
                    <td>{item.precio}</td>
                </tr>

                )

            })}
            </tbody>

        </table>

        <h4>Precio total: {TotalPrice}</h4>

        </>
    )

}

export default Cart