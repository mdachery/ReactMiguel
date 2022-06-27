import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';


export default function CartWidget() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {CartListItems} = useContext(CartContext)
  console.log ("CartWidget: ", CartListItems)

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ShoppingCartIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >

            {CartListItems.length === 0 && <p>No hay products agregados al carrito</p>}

            {
                CartListItems.map ((item) => {

                    console.log ("Mapa: ", item)
                    console.log ("Mapa_titulo: ", item.title)
                    return (
                        <div key={item.id}>

                            <p>{item.title}</p>
                            <p>${item.precio}</p>
                        
                        </div>
                    )

                    
                })

            }


      </Menu>
    </div>
  );
}

