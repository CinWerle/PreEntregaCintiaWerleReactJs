
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos 🍔"/>
      
    </div>
  );
}

export default App;