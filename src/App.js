import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Profesores from './page/Profesores';
import ProfesoresAgregar from './components/ProfesoresAgregar';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element = {<Home /> } ></Route>
        <Route path='/profesores'  >
          <Route index element = {<Profesores /> }></Route>
          <Route path='agregar' element = {<ProfesoresAgregar /> } ></Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
