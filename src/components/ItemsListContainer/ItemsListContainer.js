import React, { useEffect, useState } from "react"
import BasicCard from "../Cards/Cards"
import { Grid } from "@mui/material"
import productos from "../../utils/productsMocks"




const ItemsListContainer = () => {

    const [products, setProducts] = useState([])
   

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
                        <BasicCard title={item.title} precio={item.precio} id={item.id}/>
                        </Grid>
                    )

                    
                })

            }

        </Grid>

    )

    }

export default ItemsListContainer