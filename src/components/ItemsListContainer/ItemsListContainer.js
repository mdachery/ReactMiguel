import React, { useEffect, useState } from "react"
import BasicCard from "../Cards/Cards"
import { Grid } from "@mui/material"
import productos from "../../utils/productsMocks"
import { collection, getDocs } from "firebase/firestore"
import db from "../../utils/firebaseConfig"




const ItemsListContainer = () => {

    const [products, setProducts] = useState([])


const getProducts = async () => {
    
    const productSnapshot = await getDocs (collection(db, "productos"));
    //console.log ("productSnapshot: ", productSnapshot)
    const productList = productSnapshot.docs.map ((doc) => {
        console.log ("doc: ", doc.data())
        
        let product = doc.data()
        product.id = doc.id

        return product
    })
    console.log ("Product List: ", productList)
    return productList
    

}
   

// const getProducts = () => {
//     return new Promise ( (resolve, reject) => {
//         setTimeout ( () => {
//             resolve (productos)
//         }, 2000)
//     } )
// }

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
                    {console.log ("Products: ", products)}

            {
                products.map ((item) => {

                    return (
                        <Grid item xs={6} key={item.id}>
                        <BasicCard title={item.title} precio={item.precio} id={item.id} category={item.category} img={item.img}/>
                        </Grid>
                    )

                    
                })

            }

        </Grid>

    )

    }

export default ItemsListContainer