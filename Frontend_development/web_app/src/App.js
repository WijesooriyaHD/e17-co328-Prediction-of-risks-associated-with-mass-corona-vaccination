import logo from './logo.svg';
import './App.css';
import Form from './Pages/form';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import {Route,Routes , Link} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>
      <Route exact path="/" element={ <Home /> }/>
      <Route path="/form" element={ <Form /> }/>
      <Route path="/about" element={ <About /> }/>
      <Route path="/home" element={ <Home /> }/>
      <Route path="/contact" element={ <Contact /> }/>
      </Routes>

    </div>
    


    

  );
}

export default App;
