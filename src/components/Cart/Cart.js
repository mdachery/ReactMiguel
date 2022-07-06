import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore'
import db from "../../utils/firebaseConfig";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Cart = () => {

    const [formValue, setFormValue] = useState({ //estados pueden contener arrays, objectos...
        name: '',
        phone: '',
        email: ''
    })




    const { CartListItems, TotalPrice } = useContext (CartContext)
    console.log ("CartListItems desde el checkout: ", CartListItems)

    const [order, setOrder] = useState({
        buyer: {},
        items: CartListItems.map((item) => {
            return {
                id: item.id,
                title: item.title,
                precio: item.precio
            }
        }),
        total: TotalPrice

    })

    //modal

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    //

    const [success, setSuccess] = useState ()


    //form

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder ({...order, buyer: formValue})
        saveData ({...order, buyer: formValue})
    }

    const handleChange = (e) => {

        setFormValue ({...formValue, [e.target.name]: e.target.value}) // si no pongo ...formValue me va a pisar los valores anteriores
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("Orden generada: ", orderDoc)
        setSuccess(orderDoc.id)
    }



    return (
        
        <>
        {console.log("Order", order)}
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

        <div>
      <Button onClick={handleOpen}>Completar Compra</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {success ? "Compra finalizada" : "Formulario de Contacto"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        {success ? (

            <div>
                La orden <b>{success}</b> se genero con exito!
            </div>

        ) : (

            <form onSubmit={handleSubmit}>
            <TextField
               id="outlined-basic"
               name="name"
               label="Nombre y Apellido"
               variant="outlined"
               value={formValue.name}
               onChange={handleChange}
            />
            <TextField
               id="outlined-basic"
               name="phone"
               label="Telefono"
               variant="outlined"
               value={formValue.phone}
               onChange={handleChange}
            />
            <TextField
               id="outlined-basic"
               name="email"
               label="E-Mail"
               variant="outlined"
               value={formValue.email}
               onChange={handleChange}
            />
            <button type="submit">Enviar</button>
            </form>

        )}


          </Typography>
        </Box>
      </Modal>
    </div>

        </>
    )

}

export default Cart