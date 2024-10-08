import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";

import "../../../styles/mascotaPost.css";
import "../../../styles/mascotaCard.css"
import { MapComp } from "../mapComp.js";
import InfoDescription from "./infoDescription.js";


const MascotaSingle = (props) => {
    const { store } = useContext(Context);

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

        <div className="min-vh-100">


            {/* Contenedor de la card */}
            <div className="container d-flex justify-content-center w-100 p-0">

                <div className="card border-0 mb-3 w-100" id="perrito">

                    <div className="row">

                        {/* image container */}
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="image-box rounded-3 bg-light shadow-sm d-flex justify-content-center w-100 my-3 p-4" style={{ height: "30rem" }}>
                                <img src={props.imagen} className="img-fluid" style={{ objectFit: "contain" }} alt="Mascota" />
                            </div>
                        </div>

                        {/* Condicionales para mostrar datos de la mascota según su ESTADO (perdido, encontrado, adopción, reunido)  */}
                        
                        <InfoDescription 
                            estado={props.estado} 
                            nombre={props.nombre}
                            especie={props.especie}
                            raza={props.raza}
                            edad={props.edad}
                            sexo={props.sexo}
                            fecha_perdido={props.fecha_perdido}
                            descripcion={props.descripcion} 
                            localidad={props.localidad} 
                            departamento={props.departamento}
                        />
                        

                    </div>

                    {/* Fila donde se renderiza el mapa */}
                    <div className="row">

                        {/* El mapa se muestra únicamente para mascotas de Estado perdido, encontrado y adopción */}
                        {props.estado === 'PERDIDO' || props.estado === 'ENCONTRADO' || props.estado === 'ADOPCION' ? (
                            <div className="col-md-12" style={{ minHeight: "200px", display: "flex" }}>
                                <MapComp mapHeight="100%" mapWidth="100%" mapZoom={12} mascotaCoords={{ coord_x: props.coord_x, coord_y: props.coord_y }} />
                            </div>
                        ) : ("")}

                    </div>

                </div>
            </div>
        </div>
    )

}

export default MascotaSingle;