import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoClaro from "../../img/pet2.png"

import "../../styles/navbar.css"
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

 

export const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { store, actions } = useContext(Context);
  const userName = store.user?.nombre;
  const initial = userName ? userName.charAt(0).toUpperCase() : '';

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')</style>
      <div className="container-fluid" id="nav">
        

            <Link to="/" className="navbar-brand d-flex align-items-center">
            <div className="image-container d-flex align-items-center pe-0 me-0">
                <img src={logoClaro} alt="Static Image" className="static-image pb-0" />
               
            </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav ms-auto">
                <li className="nav-item d-flex justify-content-end">
                <Link to="/mascotas-encontradas" className="nav-link">
                    <button type="button" className="button-no-border btn" data-bs-toggle="collapse" data-bs-target="#navbarNav">Encontradas</button>
                </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                <Link to="/mascotas-perdidas" className="nav-link">
                    <button type="button" className="button-no-border btn" data-bs-toggle="collapse" data-bs-target="#navbarNav">Perdidas</button>
                </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                <Link to="/mascotas-adopcion" className="nav-link">
                    <button type="button" className="button-no-border btn" data-bs-toggle="collapse" data-bs-target="#navbarNav">En adopción</button>
                </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                <Link to="/mapa" className="nav-link">
                    <button type="button" className="button-no-border btn" data-bs-toggle="collapse" data-bs-target="#navbarNav">Mapa</button>
                </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                <Link to="/mascotas-reunidos" className="nav-link">
                    <button type="button" className="button-no-border btn" data-bs-toggle="collapse" data-bs-target="#navbarNav">Reunidas</button>
                </Link>
                </li>
                
                {store.user ? (
                <>
                    <li className="nav-item d-flex justify-content-end">
                    <Link to="/" className="nav-link text-danger" onClick={() => {actions.logout();Toast.fire({icon: "success",title: "Sesión cerrada exitosamente"});nav("/");}}>
                        <button type="button" className="btn btn-outline-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Cerrar sesión</button>
                    </Link>
                    </li>
                    <li className="nav-item d-flex justify-content-end">
                    <Link to="/profile" className="nav-link">
                        
                        <button type="button" className="profile-name btn btn-outline-light mb-1" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        {store.user.url_image ? (
                            <img src={store.user.url_image} alt="Profile" className="profile-image-navbar" />
                            ) : (
                            initial
                            )}  
                        </button>
                    </Link>
                    </li>
                </>
                ) : (
                <>
                    {location.pathname !== '/form-login' && (
                    <li className="nav-item d-flex justify-content-end">
                        <Link to="/form-login" className="nav-link">
                        <button type="button" className="boton-ingresar btn" data-bs-toggle="collapse" data-bs-target="#navbarNav"><i className="fas fa-sign-in-alt"></i></button>
                        </Link>
                    </li>
                    )}
                    {/* {location.pathname !== '/form-signup' && (
                    <li className="nav-item d-flex justify-content-end">
                        <Link to="/form-signup" className="nav-link">
                        <button type="button" className="boton-registrarse btn btn-outline-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Registrarse</button>
                        </Link>
                    </li>
                    )} */}
                </>
                )}
            </ul>
           
        </div>
      </div>
    </nav>
  );
};



