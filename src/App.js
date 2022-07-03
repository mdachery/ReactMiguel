import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsByCategory from './components/ProductsByCategory/ProductsByCategory';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">

    <CartProvider>  
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemsListContainer/>}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/productsByCategory/:category' element={<ProductsByCategory/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>

      </BrowserRouter>
    </CartProvider>
      
     

    </div>
  );
}

export default App;
