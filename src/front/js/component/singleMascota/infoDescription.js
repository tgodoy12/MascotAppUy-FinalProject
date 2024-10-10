import React, { useState } from "react";
import "../../../styles/infoDescription.css"

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
            <div className="info-box rounded-1 shadow-sm w-100 my-3 p-4">
                <h2>
                    <strong>{props.nombre}</strong>
                </h2>
                <div className={`badge ${getBadgeClass(props.estado)}`}>
                    {props.estado}
                </div>
                <div className={`badge ${getBadgeClass('UBICACION')} ms-1`}>
                    {props.localidad}, {props.departamento}
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
                            <div className="description mt-4 border p-3">

                                <p className="info-text">{props.descripcion}</p>

                            </div>
                        ) : (
                            <>
                                <table class="table table-striped">
                                    
                                    <tbody>
                                        <tr>
                                        <th scope="row">Especie</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Raza</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">Edad</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
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
                <button className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ border: "none", backgroundColor: "#FF8A5B", margin: "0 auto", borderRadius: "20px", color: "#040926", fontWeight: "500" }}>Contactar al dueño</button>
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
                </div>
            </div>
        </div>
    )
}

export default InfoDescription;