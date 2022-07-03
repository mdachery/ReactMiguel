import { createContext, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) => {

    const [CartListItems, SetCarListItems] = useState ([])
    const [TotalPrice, SetTotalPrice] = useState (0)

    const addProductToCart = (product) => {

        console.log ("Pre_Resultante: ", CartListItems)

        let isInCart = CartListItems.find (cartItem => cartItem.id === product.id)
        if  (!isInCart) {
            SetCarListItems (CartListItems => [...CartListItems, product]) //con los 3 puntitos le agrego objetos al final de la array!
            console.log ("Se agrego el product: ", product)
            console.log ("Resultante: ", CartListItems)
            SetTotalPrice (TotalPrice + product.precio)

        }
        



    }

    const data = {

        CartListItems,
        addProductToCart,
        TotalPrice

    }

    return (

        <CartContext.Provider value={data}>

        {children}

        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}