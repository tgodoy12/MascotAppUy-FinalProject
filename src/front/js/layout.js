import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
// src/front/js/layout.js

import { Home } from "./pages/home";
//import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
//import { Busqueda } from "./component/busqueda";
import FormLogin from './pages/FormLogin';
import FormSignup from './pages/FormSignup.js';

import { AgregarMascota } from './pages/agregarMascota';
import AllMascotasEncontradas from "./pages/allMascotasEncontradas.jsx";
import AllMascotasPerdidas from "./pages/allMascotasPerdidas.jsx";
import MapView from "./pages/mapView.js";
import { SingleMascota } from "./pages/singleMascota.js";
// import { MiMascota } from "./pages/miMascota.js";
import PerfilMock from "./pages/perfilMock.js";
import { Frecuentes } from "./pages/frecuentes.js";
import Contacto from "./pages/contacto.js";
import MascotasAdopcion from "./pages/mascotasAdopcion.js";
import ResultadosBusqueda from "./pages/resultadosBusqueda.js";
import MascotasReunidos from "./pages/mascotasReunidos.js";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<FormLogin/>} path='/form-login' />
                        <Route element={<FormSignup/>} path='/form-signup' />
                        <Route element={<AllMascotasPerdidas />} path="/mascotas-perdidas" />
                        <Route element={<AllMascotasEncontradas />} path="/mascotas-encontradas" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<AgregarMascota />} path="/agregarmascota" />
                        <Route element={<MapView />} path="/mapa" />
                        <Route element={<PerfilMock />} path="/profile" />
                        <Route path="/mascota/:theid" element={<SingleMascota />} />

                        <Route element={<MascotasAdopcion />} path="/mascotas-adopcion" />
                        <Route element={<MascotasReunidos />} path="/mascotas-reunidos" />
                        
                        {/* <Route element={<MiMascota/>} path="/mismascotas/:theid"/> */}
                        <Route element={<Frecuentes />} path="/preguntas-frecuentes" />
                        <Route element={<Contacto/>} path="/contacto" />
                        <Route element={<ResultadosBusqueda />} path="/resultados" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
