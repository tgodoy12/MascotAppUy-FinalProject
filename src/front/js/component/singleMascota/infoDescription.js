import React, { useState } from "react";
import "../../../styles/infoDescription.css"
import { Link } from "react-router-dom";

const InfoDescription = (props) => {

    const [estado, setEstado] = useState("")
    const [navItem, setNavItem] = useState("descripcion")

    const getBadgeClass = (estado) => {
        switch (estado) {
            case 'PERDIDO':
                return 'badge-PERDIDO';
            case 'ENCONTRADO':
                return 'badge-ENCONTRADO';
            case 'REUNIDO':
                return 'badge-REUNIDO';
            case 'ADOPCION':
                return 'badge-ADOPCION';
            case 'UBICACION':
                return 'badge-UBICACION';
        }
    };

    return (
        <div className="col-md-6 d-flex justify-content-center">
            <div className="info-box rounded-1 shadow-sm w-100 my-3 p-5">
                
                <div className="d-flex align-items-center mb-2">
                    <h2 className="mb-0 me-4">
                        <strong>{props.nombre}</strong>
                    </h2>

                    <div className={`badge ${getBadgeClass(props.estado)} align-items-center`}> 
                        {props.estado}
                    </div>

                    <div role="button" className="email-btn">
                            <Link to={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-square-envelope fa-2xl"></i>
                            </Link>
                        </div>
                    
                    {props.telefono && (
                        <div role="button" className="whatsapp-btn">
                            <Link to={`https://wa.me/598${props.telefono}?text=Hola%20vi%20tu%20publicacion%20en%20MascotApp`} target="blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                            </Link>
                        </div>
                    )}
                    
                </div>
               
                
                <div className="mb-1 text-lowercase ms-1">
                    <i class="fa-solid fa-location-dot me-2"></i>
                    <span className="info-location">{props.localidad}, {props.departamento}</span>
                </div>

                

                {props.estado === 'REUNIDO' ? (
                    <div>
                        Gracias al esfuerzo de todos, {props.nombre} se reencontró con su familia.
                    </div>
                ) : (
                    <>
                        <ul className="nav nav-tabs mt-4">
                            <li className="nav-item">
                                <p
                                    role="button"
                                    className={`info-nav-link nav-link ${navItem === "descripcion" ? "active" : ""}`}
                                    onClick={() => setNavItem("descripcion")}
                                >
                                    Descripción
                                </p>
                            </li>

                            <li className="nav-item">
                                <p
                                    role="button"
                                    className={`info-nav-link nav-link ${navItem === "info" ? "active" : ""}`}
                                    onClick={() => setNavItem("info")}
                                >
                                    + Info
                                </p>
                            </li>
                        </ul>

                        {navItem === "descripcion" ? (
                            <div className="description mt-4 p-4 bg-light">

                                <p className="info-text">{props.descripcion}</p>

                            </div>
                        ) : (
                            <>
                                <table className="table my-3 me-4 bg-light">
                                    
                                    <tbody>
                                        <tr>
                                            <th scope="row"><span className="ps-2">Especie</span></th>
                                            <td>{props.especie}</td>   
                                        </tr>
                                        <tr>
                                            <th scope="row"><span className="ps-2">Raza</span></th>
                                            <td>{props.raza}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span className="ps-2">Edad</span></th>
                                            <td colspan="2">{props.edad}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span className="ps-2">Sexo</span></th>
                                            <td colspan="2">{props.sexo}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                {/* <p><strong>Especie: </strong> {props.especie}</p>
                                <p><strong>Raza: </strong> {props.raza}</p>
                                <p><strong>Edad: </strong> {props.edad}</p>
                                <p><strong>Sexo: </strong> {props.sexo}</p> 
                                <p><strong>Fecha de perdido: </strong> {props.fechaPerdido}</p>
                                <p><strong>Se perdió en: </strong> {props.localidad}, {props.departamento}</p> */}
                            </>
                        )}
                    </>
                )}

                
            {/* boton de contactar al dueño */}
                {/* <button className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ border: "none", backgroundColor: "#FF8A5B", margin: "0 auto", borderRadius: "20px", color: "#040926", fontWeight: "500" }}>Contactar al dueño</button>
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
                                {props.telefono && (
                                    <p><strong>Teléfono: </strong> {props.telefono}
                                        <button style={{ backgroundColor: 'white', border: 'none' }}>
                                            <a href={`https://wa.me/598${props.telefono}?text=Hola%20vi%20tu%20publicacion%20en%20MascotApp`} target="blank">
                                                <i className="fa-brands fa-whatsapp" style={{ color: 'green' }}></i>
                                            </a>
                                        </button>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default InfoDescription;