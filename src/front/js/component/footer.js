import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container-fluid" 
		style={{backgroundColor: "#E0E1DD", color: "#040926"}}>
  		<footer className="py-3 my-4 sticky-bottom">
    		<ul className="nav justify-content-center pb-3 mb-3">
      			<li><Link to="/" className="nav-link px-2">Inicio</Link></li>
      			<li><Link to="/mascotas-perdidas" className="nav-link px-2 ">Perdidas</Link></li>
      			<li><Link to="/mascotas-encontradas" className="nav-link px-2 ">Encontradas</Link></li>
				<li><Link to="/mascotas-reunidos" className="nav-link px-2 ">Reunidas</Link></li>
      			<li><Link to="/mapa" className="nav-link px-2 ">Mapa</Link></li>
      			<li><Link to="/preguntas-frecuentes" className="nav-link px-2 ">FAQ</Link></li>
				<li><Link to="/contacto" className="nav-link px-2">Contacto</Link></li>
    		</ul>
			<p className="text-center text-muted">Ururguay</p>
    		<p className="text-center text-muted">© 2024 MascotApp</p>
  		</footer>
	</div>
);
