import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <NavBar/>
      <ItemsListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
