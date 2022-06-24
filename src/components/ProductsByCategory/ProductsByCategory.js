import React, { useEffect, useState } from "react"
import BasicCard from "../Cards/Cards"
import { Grid } from "@mui/material"
import productos from "../../utils/productsMocks"
import { useParams } from "react-router-dom"




const ProductsByCategory = () => {

    const [products, setProducts] = useState([])

    const { category } = useParams ()
   

const getProducts = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            resolve (productos)
        }, 2000)
    } )
}

useEffect (() => {

    setProducts ([])
    getProducts ()
    .then ((response) => {
        //setProducts(response)
        filterByCategory (response)
    })
    .catch ((err) => {
        console.log("Catch fallo", err)
    })

}, [category])

const filterByCategory = (array) => {
    return array.map ( (item) => {
        if (item.category == category) {
            return setProducts (products => [...products, item])
        }
    }
    )
}


    return (
       
        <Grid container spacing={2}>
                    {console.log (products)}

            {
                products.map ((item) => {

                    return (
                        <Grid item xs={6} key={item.id}>
                        <BasicCard texto1={item.title} texto2={item.precio} id={item.id}/>
                        </Grid>
                    )

                    
                })

            }

        </Grid>

    )

    }

export default ProductsByCategory