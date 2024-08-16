import React from "react";


export const Frecuentes = () => {

    
    
    return(
    <div className="container py-5 text-center">
        <h1>Preguntas Frecuentes</h1>
        <div className="row justify-content-evenly">
            <div className="col-md-4">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className="fa-solid fa-paw" style={{color: "#ff8a5b", marginRight: "10px"}}></i>¿Cómo elijo la foto más representativa de mi mascota?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Para garantizar que tu mascota sea identificable  y destacada en el sitio, elige una foro que sea clara y de buena calidad. La foto debe capturar bien las características principales de tu mascota y debe ser la más representativa posible. Esto ayudará a otros usuarios a reconocer a tu mascota más rapido.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <i className="fa-solid fa-paw" style={{color: "#ff8a5b", marginRight: "10px"}}></i>¿Qué debo incluir en la descripción de mi mascota?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Detalla características como color del pelaje, manchas, tamaño (pequeño, mediano, grande), peso aproximado, longitud del pelaje (corto, largo), etc. Menciona cualquier característica única, como cicatrices, ojos de diferente color, collar con placa, orejas caídas, cojea, etc.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <i className="fa-solid fa-paw" style={{color: "#ff8a5b", marginRight: "10px"}}></i>¿Cómo marco la última ubicación conocida de mi mascota?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <i className="fa-solid fa-paw" style={{color: "#ff8a5b", marginRight: "10px"}}></i>¿Cómo navego por el listado de mascotas encontradas?
                    </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <i className="fa-solid fa-paw" style={{color: "#ff8a5b", marginRight: "10px"}}></i>¿Cómo recibo notificaciones sobre nuevas mascotas encontradas?
                    </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    </div>    
    )
};