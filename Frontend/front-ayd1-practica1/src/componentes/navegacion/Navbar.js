import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => { 

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container-fluid"> 
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Inicio'>INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Contacto'>CONTACTOS</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Favoritos'>FAVORITOS</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Nuevo'>NUEVO CONTACTO</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Acerca'>ACERCA DE</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar