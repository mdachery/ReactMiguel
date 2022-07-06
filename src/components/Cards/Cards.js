import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import './Cards.css'




export default function BasicCard(props) {

  const {addProductToCart} = useContext(CartContext)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <img class="img" src={props.img}/>
        <Typography variant="body2">
          {props.precio}
        </Typography>
        <Typography variant="body2">
          <Link to={`/product/${props.id}`}><h5>Ver Detalle</h5></Link>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => addProductToCart(props)}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}