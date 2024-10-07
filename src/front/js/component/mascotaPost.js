import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/mascotaPost.css";
import { MapComp } from "../component/mapComp.js";


const MascotaPost = (props) => {
    const { store } = useContext(Context);

    return (

        <div className="min-vh-100">
            
            {/* title */}
            <h1 className="text-center border" style={{marginTop: "40px", marginBottom: "40px", fontFamily: "Montserrat", textShadow: "1px 1px 1px #aaa"}}>
                {props.estado === "PERDIDO" ? "Estoy perdido!" :
                props.estado === "ENCONTRADO" ? "Estoy buscando a mi familia!" :
                props.estado === "ADOPCION" ? "En adopción" :
                props.estado === "REUNIDO" ? "Final feliz" : ""}
            </h1>

            {/* Contenedor de la card */}
            <div className="container d-flex justify-content-center w-100 p-0 border">

                <div className="card mb-3 w-100" id="perrito">

                    <div className="row">

                        {/* image container */}
                        <div className="col-md-6">
                            <img src={props.imagen} className="img-fluid" style={{ minWidth: "20rem", maxHeight: "30rem", objectFit: "cover" }} alt="Mascota" />
                        </div>
        
                        {/* Condicionales para mostrar datos de la mascota según su ESTADO (perdido, encontrado, adopción, reunido)  */}
                        {props.estado === "PERDIDO" ? (
                        <div className="col-md-6">
                            <div className="cardBody" style={{"display": "grid", padding: "20px"}}>
                                <p><strong>Nombre: </strong> {props.nombre}</p>
                                <p><strong>Especie: </strong> {props.especie}</p>
                                <p><strong>Raza: </strong> {props.raza}</p>
                                <p><strong>Edad: </strong> {props.edad}</p>
                                <p><strong>Sexo: </strong>: {props.sexo}</p>
                                <p><strong>Fecha de perdido: </strong> {props.fechaPerdido}</p>
                                <p><strong>Descripcion: </strong> {props.descripcion}</p>
                                <p><strong>Se perdió en: </strong> {props.localidad}, {props.departamento}</p>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ border: "none", backgroundColor: "#FF8A5B", margin: "0 auto", borderRadius: "20px", color: "#040926", fontWeight: "500" }}>Contactar al dueño</button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Contacto del dueño de esta mascota:</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p><strong>Nombre: </strong> {props.nombreUser}</p>
                                                <p><strong>Email: </strong> {props.email}</p>
                                                {props.telefono && (<p><strong>Teléfono: </strong> {props.telefono}<button style={{backgroundColor: 'white', border: 'none'}}><a href={`https://wa.me/598${props.telefono}?text=Hola%20vi%20tu%20publicacion%20en%20MascotApp`} target="blank"><i className="fa-brands fa-whatsapp" style={{color: 'green'}}></i></a></button></p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        ) : props.estado === "ENCONTRADO" ? (
                        <div className="col-md-6">
                            <div className="cardBody" style={{"display": "grid", padding: "20px"}}>
                                <p><strong>Título: </strong> {props.nombre}</p>
                                <p><strong>Especie: </strong> {props.especie}</p>
                                <p><strong>Raza: </strong> {props.raza}</p>
                                <p><strong>Fecha de registro: </strong> {props.fechaReg}</p>
                                <p><strong>Descripción: </strong>: {props.descripcion}</p>
                                <p><strong>Fue encontrado en: </strong> {props.localidad}, {props.departamento}</p>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ border: "none", backgroundColor: "#FF8A5B", margin: "0 auto", borderRadius: "20px", color: "#040926", fontWeight: "500" }}>Soy el dueño</button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">                    
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel"><strong>Contacto de la persona que registró a la mascota</strong></h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p><strong>Nombre: </strong> {props.nombreUser}</p>
                                                <p><strong>Email: </strong> {props.email}</p>
                                                {props.telefono && (<p><strong>Teléfono: </strong> {props.telefono}<button style={{backgroundColor: 'white', border: 'none'}}><a href={`https://wa.me/598${props.telefono}?text=Hola%20vi%20tu%20publicacion%20en%20MascotApp`} target="blank"><i className="fa-brands fa-whatsapp" style={{color: 'green'}}></i></a></button></p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div> 
                        ) : props.estado === "ADOPCION" ? (
                        <div className="col-md-6">
                            <div className="cardBody" style={{"display": "grid", padding: "20px"}}>
                                <p><strong>Especie: </strong> {props.especie}</p>
                                <p><strong>Raza: </strong> {props.raza}</p>
                                <p><strong>Sexo: </strong>: {props.sexo}</p>
                                <p><strong>Edad aproximada: </strong> {props.edad}</p>
                                <p><strong>Descripcion: </strong> {props.descripcion}</p>
                                <p><strong>Se encuentra en: </strong> {props.localidad}, {props.departamento}</p>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ border: "none", backgroundColor: "#FF8A5B", margin: "0 auto", borderRadius: "20px", color: "#040926", fontWeight: "500" }}>Quiero adoptar!</button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Contacto del responsable de esta mascota:</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p><strong>Nombre: </strong> {props.nombreUser}</p>
                                                <p><strong>Email: </strong> {props.email}</p>
                                                {props.telefono && (<p><strong>Teléfono: </strong> {props.telefono}<button style={{backgroundColor: 'white', border: 'none'}}><a href={`https://wa.me/598${props.telefono}?text=Hola%20vi%20tu%20publicacion%20en%20MascotApp`} target="blank"><i className="fa-brands fa-whatsapp" style={{color: 'green'}}></i></a></button></p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : props.estado === "REUNIDO" ? (
                        <div className="col-md-8" style={{alignContent: "center"}}>
                            <div className="cardBody" style={{"display": "grid", padding: "20px"}}>
                                <h5 className="text-center">Gracias al esfuerzo de todos {props.nombre}, se reencontró con su familia</h5>
                            </div>
                        </div>
                        ) : "" }
                        
                    </div>

                    {/* Fila donde se renderiza el mapa */}
                    <div className="row">
                        
                        {/* El mapa se muestra únicamente para mascotas de Estado perdido, encontrado y adopción */}
                        {props.estado === 'PERDIDO' || props.estado === 'ENCONTRADO' || props.estado === 'ADOPCION' ? (
                        <div className="col-md-12" style={{ minHeight: "200px", display: "flex" }}>
                            <MapComp mapHeight="100%" mapWidth="100%" mapZoom={12} mascotaCoords={{ coord_x: props.coord_x, coord_y: props.coord_y }} />
                        </div>
                        ) : ("") }
                        
                    </div>

                </div>
            </div>
        </div>
    )

}

export default MascotaPost;