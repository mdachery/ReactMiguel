import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsByCategory from './components/ProductsByCategory/ProductsByCategory';


function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemsListContainer/>}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/productsByCategory/:category' element={<ProductsByCategory/>}></Route>
          <Route path='/cart' element={<h5>Prueba</h5>}></Route>
        </Routes>

      </BrowserRouter>

      
     

    </div>
  );
}

export default App;
