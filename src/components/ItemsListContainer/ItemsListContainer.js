import React from "react"
import BasicCard from "../Cards/Cards"
import { Grid } from "@mui/material"


const ItemsListContainer = () => {
    return (
       
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <BasicCard texto1="Texto 1" texto2="Este es el card 1"/>
            </Grid>
            <Grid item xs={4}>
                <BasicCard texto1="Texto 2" texto2="Este es el card 2"/>
            </Grid>
            <Grid item xs={4}>
                <BasicCard texto1="Texto 3" texto2="Este es el card 3"/>
            </Grid>
            <Grid item xs={8}>
                <BasicCard texto1="Texto 4" texto2="Este es el card 4"/>
            </Grid>
        </Grid>

    )

    }

export default ItemsListContainer