import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title='Galería de Imágenes con React'/>

        <Card direccion="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" titulo='Gato' descripcion='Gato sentado'/>

        <Card direccion="https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg" titulo='Leon' descripcion='Leon con una gran melena'/>

        <Card direccion="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_960_720.jpg" titulo='Tortuga' descripcion='Tortuga nadando'/>

        <Footer descripcion='Todos los derechos reservados'/>
      </header>
    </div>
  );
}

export default App;
