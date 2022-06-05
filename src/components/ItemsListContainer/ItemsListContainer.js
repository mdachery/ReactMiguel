import React, { useEffect, useState } from "react"
import BasicCard from "../Cards/Cards"
import { Grid } from "@mui/material"




const ItemsListContainer = () => {

    const [products, setProducts] = useState([])
    const productos = [
        {
            title: 'Remera Estilizada',
            precio: 400,
            stock: 12,
            id: 1,
        },
        {
            title: 'Remera Blanca',
            precio: 200,
            stock: 20,
            id: 2,
        },
        {
            title: 'Pantalon Jeans',
            precio: 800,
            stock: 8,
            id: 3,
        },
        {
            title: 'Campera',
            precio: 1200,
            stock: 4,
            id: 4,
        },

    ]

const getProducts = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            resolve (productos)
        }, 2000)
    } )
}

useEffect (() => {

    getProducts ()
    .then ((response) => {
        setProducts(response)
    })
    .catch ((err) => {
        console.log("Catch fallo", err)
    })

}, [])



    return (
       
        <Grid container spacing={2}>
                    {console.log (products)}

            {
                products.map ((item) => {

                    return (
                        <Grid item xs={6} key={item.id}>
                        <BasicCard texto1={item.title} texto2={item.precio}/>
                        </Grid>
                    )

                    
                })

            }

        </Grid>

    )

    }

export default ItemsListContainer