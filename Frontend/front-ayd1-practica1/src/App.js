import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './componentes/navegacion/Navbar';
import AcercaDe from './componentes/AcercaDe';
import Contacto from './componentes/Contacto';
import Favoritos from './componentes/Favoritos';
import Inicio from './componentes/Inicio';
import NuevoContacto from './componentes/NuevoContacto';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path={'/Inicio'} element={<Inicio/>} />
          <Route path={'/Contacto'} element={<Contacto/>} />
          <Route path={'/Favoritos'} element={<Favoritos/>} />
          <Route path={'/Nuevo'} element={<NuevoContacto/>} />
          <Route path={'/Acerca'} element={<AcercaDe/>} />
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
