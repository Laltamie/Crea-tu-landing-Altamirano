import './App.css';
import Header from './components/Header/Header';
import ItemListContainber from './components/ItemListContanier/ItemListContaniner';
import NavBar from './components/Navegador/NavBar';

function App() {
  return (
    <div >

      <NavBar />
      <ItemListContainber greeting="Contenido"/>
      <Header />
      
    </div>
  );
}

export default App;
