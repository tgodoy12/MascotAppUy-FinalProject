import React, { useContext } from "react";
import "../../styles/allMascotas.css"
import { Context } from "../store/appContext";


const MascotaCard = (props) => {
    const { store } = useContext(Context)

    return (
        <div className="card mt-5" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="random-img" />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>

                <div className="contenidoCard">
                    <div className="d-flex"><span><i className="fas fa-calendar"  style={{color: "#040926"}}></i></span><p className="card-text ms-2">{props.fecha}</p></div>
                    <div className="d-flex"><span><i className="fas fa-paw" style={{color: "#040926"}}></i></span><p className="card-text ms-2">{props.especie}</p></div>
                    <div className="d-flex"><span><i className="fas fa-map-marker-alt" style={{color: "#040926"}}></i></span><p className="card-text ms-2">{props.localidad}</p></div>
                    
                    
                </div>
                

                
            </div>
        </div>
    );
}

export default MascotaCard
