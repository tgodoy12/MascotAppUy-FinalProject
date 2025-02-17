import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import DatosPerfil from "../component/datosPerfil";
import "../../styles/agregarMascota.css"
import { MapComp } from "../component/mapComp";

const PerfilMock = () => {

    
    const { store, actions } = useContext(Context);
    const [edit, setEdit] = useState(false);
    const [editPassword, setEditPassword] = useState(false)
    
    // ********* FORMIK PARA EDITAR DATOS GENERALES**********
    const validate = values => {
        const errors = {};
      
        if (!values.nombre) {
          errors.nombre = 'Required';
        } else if (values.nombre.length > 50) {
          errors.nombre = 'Must be 50 characters or less';
        }
    
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    
        if (values.telefono && values.telefono.length > 25) {
          errors.telefono = 'Must be 25 characters or less';
        }
      
        return errors;
    };
    
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

    const formik = useFormik({
        initialValues: {
          nombre: store.user.nombre || '',
          email: store.user.email || '',
          telefono: store.user.telefono || ''
        },
        validate,
        onSubmit: async (values) => {
          const userData = {
            nombre: values.nombre || store.user.nombre,
            email: values.email || store.user.email,
            telefono: values.telefono || store.user.telefono
          };
          
          const newData = await actions.editarUsuario(userData);

          if (newData) {
            Toast.fire({
              icon: "success",
              title: "Usuario editado correctamente"
            });
            setEdit(false);
          } else {
            Toast.fire({
              icon: "error",
              title: "Error al editar usuario",
              showConfirmButton: false,
            });
          }
        },
    });

    // ********* FORMIK PARA EDITAR CONTRASEÑA**********
    const formikPassword = useFormik({
        initialValues: {
            nombre: store.user.nombre || '',
            email: store.user.email || '',
            telefono: store.user.telefono || '',
            newPassword: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors = {};
            
            if (!values.newPassword) {
                errors.newPassword = 'New password is required';
            } else if (values.newPassword.length > 200) {
                errors.newPassword = 'Password can not be longer than 200 characters';
            }
            if (values.newPassword !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: async (values) => {
            const success = await actions.editarUsuario(values);
            if (success) {
                Toast.fire({
                    icon: 'success',
                    title: 'Contraseña cambiada'
                });
                setEditPassword(false);
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'Error al cambiar contraseña'
                });
            }
        }
    });
// ********* FIN FORMIK PARA EDITAR CONTRASEÑA**********

// ********* FORMIK PARA EDITAR MASCOTAS**********

    const [departamentoSelected, setDepartamentoSelected] = useState("");
    const [filteredLocalidades, setFilteredLocalidades] = useState([]);

    const [especieSelected, setEspecieSelected] = useState("");
    const [filteredRazas, setFilteredRazas] = useState([]);

    const nav = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [misMascotas, setMisMascotas] = useState([]);
    const [editMascota, setEditMascota] = useState(null);

    const [localidadSelected, setLocalidadSelected] = useState("")

    const selectedDepartmentCoords = store.departamentos.find(depto => depto.id === parseInt(departamentoSelected));
    const selectedLocalityCoords = store.localidades.find(loc => loc.id === parseInt(localidadSelected))

    
    
    //funciones para borrar y editar mascota que se pasan por props a datosPerfil.js
    const handleEditMascota = (mascota) => {
        setEditMascota(mascota)
    }

    const handleDeleteMascota = (mascotaId) => {
        actions.deleteMascota(mascotaId)
        const modal = document.getElementById('eliminarMascotaModal');
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide(); // Cierra el modal
    }
    //************************ */º

    const validateMascota = values => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = 'Required';
    } else if (values.nombre.length > 50) {
        errors.nombre = 'Must be 50 characters or less';
    }
    const today = new Date();

    today.setHours(0, 0, 0, 0); // Establecer la hora a medianoche
    const todayDateString = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD


    if (!values.estado) {
      errors.estado = 'Requerido';
    }
  
    if (!values.nombre) {
      errors.nombre = 'Requerido';
    } else if (values.nombre.length > 120) {
      errors.nombre = 'Debe ser 120 caracteres o menos';
    }
    if (!values.fecha_perdido) {
        errors.fecha_perdido = 'Requerido';
    }
    if (!values.sexo) {
        errors.sexo = 'Requerido';
    }

    if (!values.especie_id) {
        errors.especie_id = 'Requerido';
    }
    if (!values.raza_id) {
        errors.raza_id = 'Requerido';
    }
    if (!values.descripcion) {
        errors.descripcion = 'Requerido';
    }
    if (!values.fecha_perdido) {
        errors.fecha_perdido = 'Requerido';
    }else {
        
        const fechaPerdidoDateString = values.fecha_perdido;
        if (fechaPerdidoDateString > todayDateString) {
          errors.fecha_perdido = 'La fecha no puede ser en el futuro';
        }
    }
    
    if(values.estado !== 'ENCONTRADO'){
        if (!values.edad) {
            errors.edad = 'Requerido';
        } 
    }
    if (!values.departamento_id) {
        errors.departamento_id = 'Requerido';
    }
    if (!values.localidad_id) {
        errors.localidad_id = 'Requerido';
    }

    return errors;
};

    const formikMascota = useFormik({
        
        initialValues: {
            estado: '',
            nombre: '',
            edad: '',
            sexo: '',
            especie_id: '',
            raza_id: '',
            descripcion: '',
            fecha_perdido: '',
            departamento_id: '',
            localidad_id: '',
            url_image: ''
        },
        validate: validateMascota,
        onSubmit: async (values) => {

            let formData = null;
            let urlImg = values.url_image; // Inicialmente conserva la imagen existente
    
            if (selectedFile) {
                formData = new FormData();
                formData.append('file', selectedFile);
                // Subir la nueva imagen
                urlImg = await actions.uploadImage(formData);
            }

            const formattedValues = {
                ...values,
                user_id: store.user.id,
                url_image: urlImg,
                coord_x: store.coord_x,
                coord_y: store.coord_y
            };
            
            const added = await actions.editarMascota(formattedValues, editMascota);
            if (added) {
                Toast.fire({
                icon: "success",
                title: "Mascota editada correctamente"
                });
                
            }else {
                Toast.fire({
                icon: "error",
                title: "Error al editar mascota",
                showConfirmButton: false,
                });
            }
            setEditMascota(null)

        
    }});


    // UseEffects de los filtros para actualizar mascotas
    useEffect(() => {
        if (departamentoSelected) {
            const filterLoc = store.localidades.filter(localidad =>
                localidad.departamento_id === parseInt(departamentoSelected)
            );
            setFilteredLocalidades(filterLoc);
        } else {
            setFilteredLocalidades([]);
        }
    }, [departamentoSelected, store.localidades]);

    useEffect(() => {
        if(especieSelected) {
            const filterRaza = store.razas.filter(raza => 
                raza.especie_id === parseInt(especieSelected)
            );
            setFilteredRazas(filterRaza)
            
        } else {
            setFilteredRazas(store.razas)
        }

    }, [especieSelected, store.razas])
    //Cierre

    // Actualiza los valores de Formik después de que el usuario haya sido editado
    useEffect(() => {
        
        if (store.user) {
            
            formik.setValues({
                nombre: store.user.nombre || '',
                email: store.user.email || '',
                telefono: store.user.telefono || '',
                
                
            });
            
            
        }
    }, [store.user]); // Ejecuta este efecto cuando store.user cambie


    useEffect(() => {
        if (editMascota && store.user.mascotas) {
            const mascota = store.mascotas.find(m => m.id === editMascota);
            if (mascota) {
                formikMascota.setValues({
                    estado: mascota.estado || '',
                    nombre: mascota.nombre || '',
                    edad: mascota.edad || '',
                    sexo: mascota.sexo || '',
                    especie_id: mascota.especie_id || '',
                    raza_id: mascota.raza_id || '',
                    fecha_perdido: mascota.fecha_perdido || '',
                    descripcion: mascota.descripcion || '',
                    departamento_id: mascota.departamento_id || '',
                    localidad_id: mascota.localidad_id || '',
                    url_image: mascota.url_image || ''
                });
            }
        }
    }, [editMascota, store.user.mascotas]);

    useEffect(() => {
        if (store.user.mascotas) {
            // Filtra solo las mascotas activas
            const mascotasActivas = store.user.mascotas.filter(mascota => mascota.is_active);
            setMisMascotas(mascotasActivas);
        }
    }, [store.user.mascotas]);

    return (
        <div className="container mb-5">
            {edit ? (
                <>
                <div className="back-boton">
                <button 
                    type="button" 
                    className="btn btn-outline-dark btn-sm mt-4" 
                    onClick={()=> {setEdit(false)}}
                    >
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                </div>
                <div className="d-flex justify-content-center mt-5 pb-5">
                
                    <form className="editar-datos mb-5 pb-5" onSubmit={formik.handleSubmit}>
                    <h2 className="mb-5">Editar datos</h2>
                        <div className="input-group d-flex mb-4">
                            <span className='px-2'><i className="fas fa-user"></i></span>
                            <input
                                id="nombre"
                                name="nombre"
                                className="w-75 ps-2"
                                type="text"
                                placeholder={store.user.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nombre}
                            />
                            {formik.touched.nombre && formik.errors.nombre ? (
                                <div className="error-msg ms-2">{formik.errors.nombre}</div>
                            ) : null}
                        </div>
                        {!store.googleLogin && <div className="input-group d-flex mb-4">
                            <span className='px-2'><i className="fas fa-envelope"></i></span>
                            <input
                                id="email"
                                name="email"
                                className="w-75 ps-2"
                                type="email"
                                placeholder={store.user.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error-msg ms-2'>{formik.errors.email}</div>
                            ) : null}
                        </div>}
                        <div className="input-group d-flex mb-4">
                            <span className='px-2'><i className="fa-solid fa-phone"></i></span>
                            <input
                                id="telefono"
                                name="telefono"
                                className="w-75 ps-2"
                                type="text"
                                placeholder={store.user.telefono}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.telefono}
                            />
                            {formik.touched.telefono && formik.errors.telefono ? (
                                <div className='error-msg ms-2'>{formik.errors.telefono}</div>
                            ) : null}
                        </div>
                        
                        <button
                        className="mb-5"
                         type="submit" style={{
                            backgroundColor: '#FF8A5B',
                            border: 'none',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Enviar
                        </button>
                    </form>
                    
                </div>
                
                </>
            ) : editPassword ? (
                <>
                <div className="back-boton mb-5">
                <button 
                    type="button" 
                    className="btn btn-outline-dark btn-sm mt-4" 
                    onClick={()=> {setEditPassword(false)}}
                >
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                </div>
                <div className="d-flex justify-content-center mt-5 pb-5"> 
                    <form className="editar-datos mb-5 pb-5" onSubmit={formikPassword.handleSubmit}>
                        <h2 className="mb-5">Cambiar contraseña</h2>
                        <div className="input-group d-flex mb-4">
                            <span className='px-2'><i className="fas fa-key"></i></span>
                            <input
                                id="newPassword"
                                name="newPassword"
                                className="w-75 ps-2"
                                type="password"
                                placeholder="Nueva contraseña"
                                onChange={formikPassword.handleChange}
                                onBlur={formikPassword.handleBlur}
                                value={formikPassword.values.newPassword}
                            />
                            {formikPassword.touched.newPassword && formikPassword.errors.newPassword ? (
                                <div className="error-msg ms-2">{formikPassword.errors.newPassword}</div>
                            ) : null}
                        </div>
                        <div className="input-group d-flex mb-4">
                            <span className='px-2'><i className="fas fa-key"></i></span>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-75 ps-2"
                                type="password"
                                placeholder="Confirma nueva contraseña"
                                onChange={formikPassword.handleChange}
                                onBlur={formikPassword.handleBlur}
                                value={formikPassword.values.confirmPassword}
                            />
                            {formikPassword.touched.confirmPassword && formikPassword.errors.confirmPassword ? (
                                <div className="error-msg ms-2">{formikPassword.errors.confirmPassword}</div>
                            ) : null}
                        </div>
                        <button 
                            className="mb-5"
                            type="submit" style={{
                            backgroundColor: '#FF8A5B',
                            border: 'none',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Cambiar contraseña
                        </button>
                    </form>
                    
                </div>
                </>
            ) : editMascota ? (
            <div className="container">
                <h2 className="mt-5 text-center">
                    Editar mascota
                </h2>
                
                <div className="d-flex justify-content-center">
                <form className="agregar-mascota mt-5 w-75" onSubmit={formikMascota.handleSubmit}>
                    <div className="row">
                        
                {/* PRIMERA PARTE FORMULARIO */}    
                    <div className="col-12 col-md-6">
                        <div className="input-group input-group-sm">
                            <select 
                                className="form-select border-0" 
                                id="estado"
                                name="estado" 
                                value={formikMascota.values.estado} 
                                onChange={formikMascota.handleChange}
                                onBlur={formikMascota.handleBlur}
                            >
                                <option value="">Estado</option>    
                                <option value="PERDIDO">PERDIDO</option>
                                <option value="ENCONTRADO">ENCONTRADO</option>
                                <option value="ADOPCION">ADOPCIÓN</option>
                                <option value="REUNIDO">REUNIDO</option>  
                            </select>
                            {formikMascota.touched.estado && formikMascota.errors.estado ? (
                                <div className="error-msg ms-2">{formikMascota.errors.estado}</div>
                            ) : null}
                    </div>
                       
                    
                        <div className="row">

                        {/* Primera parte izquierda */}
                            {/* nombre */}
                            <div className="col-12 col-md-6">
                                <div className="input-group input-group-sm">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        // placeholder="Nombre de tu mascota" 
                                        placeholder={formikMascota.values.estado === 'ENCONTRADO' ? "Título de la publicación" : "Nombre de tu mascota"}
                                        id="nombre"
                                        name="nombre" 
                                        value={formikMascota.values.nombre} 
                                        onChange={formikMascota.handleChange}
                                        onBlur={formikMascota.handleBlur}
                                    />
                                    {formikMascota.touched.nombre && formikMascota.errors.nombre ? (
                                    <div className="error-msg ms-2">{formikMascota.errors.nombre}</div>
                                ) : null}
                                </div>

                                {/* sexo */}
                                <div className="input-group input-group-sm">
                                    <select 
                                        className="form-select border-0" 
                                        id="sexo"
                                        name="sexo" 
                                        value={formikMascota.values.sexo}
                                        onChange={formikMascota.handleChange}
                                        onBlur={formikMascota.handleBlur}
                                    >
                                        <option value="">Sexo</option>
                                        <option value="HEMBRA">HEMBRA</option>
                                        <option value="MACHO">MACHO</option> 
                                        <option value="INDEFINIDO">INDEFINIDO</option>  
                                    </select>
                                    {formikMascota.touched.sexo && formikMascota.errors.sexo ? (
                                    <div className="error-msg ms-2">{formikMascota.errors.sexo}</div>
                                ) : null}
                                </div>

                            </div>
                            
                            {/* Primera parte derecha */}
                            
                            <div className="col-12 col-md-6">
                                {/* fecha perdido */}
                                <div className="input-group input-group-sm">
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="fecha_perdido"  
                                        name="fecha_perdido" 
                                        value={formikMascota.values.fecha_perdido}
                                        onChange={formikMascota.handleChange}
                                        onBlur={formikMascota.handleBlur}
                                    />
                                    {formikMascota.touched.fecha_perdido && formikMascota.errors.fecha_perdido ? (
                                    <div className="error-msg ms-2">{formikMascota.errors.fecha_perdido}</div>
                                ) : null}
                                </div>
                                
                                {/* edad */}
                                <div className="input-group input-group-sm">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Edad de tu mascota" 
                                        id="edad"
                                        name="edad" 
                                        value={formikMascota.values.edad} 
                                        onChange={formikMascota.handleChange}
                                        onBlur={formikMascota.handleBlur}
                                    />
                                    {formikMascota.touched.edad && formikMascota.errors.edad ? (
                                    <div className="error-msg ms-2">{formikMascota.errors.edad}</div>
                                ) : null}
                                </div>

                            </div>

                        </div>
                    
                        <div className="input-group input-group-sm">
                            <select 
                                className="form-select border-0" 
                                id="especie_id"
                                name="especie_id" 
                                value={formikMascota.values.especie_id} 
                                onChange={e => {
                                    const { value } = e.target;
                                    formikMascota.handleChange(e);
                                    setEspecieSelected(value);
                                }}
                                onBlur={formikMascota.handleBlur}
                            >
                                <option value="">Especies</option>
                                {store.especies.map((especie, index) => (
                                    <option key={index} value={especie.id}>
                                        {especie.name}
                                    </option>
                                ))}
                            </select>
                            {formikMascota.touched.especie_id && formikMascota.errors.especie_id ? (
                                    <div className="error-msg ms-2">{formikMascota.errors.especie_id}</div>
                                ) : null}
                        </div>

                        {especieSelected && (
                            
                            <div className="input-group input-group-sm">
                                <select
                                    className="form-select border-0"
                                    id="raza_id"
                                    name="raza_id"
                                    value={formikMascota.values.raza_id}
                                    onChange={formikMascota.handleChange}
                                    onBlur={formikMascota.handleBlur}
                                >
                                    <option value="">Raza</option>
                                    {filteredRazas.map((raza, index) => (
                                    <option key={index} value={raza.id}>
                                        {raza.name}
                                    </option>
                                    ))}
                                </select>
                                {formikMascota.touched.raza_id && formikMascota.errors.raza_id ? (
                                    <div className="error-msg ms-2">{formikMascota.errors.raza_id}</div>
                                ) : null}
                            </div>
                            
                        )}

                            <div className="input-group input-group-sm">
                                <textarea 
                                    className="form-control border-0" 
                                    placeholder="Agrega una descripción de tu mascota. Todos los detalles son importantes para poder identificarla" 
                                    id="descripcion"
                                    name="descripcion" 
                                    value={formikMascota.values.descripcion} 
                                    onChange={formikMascota.handleChange}
                                    onBlur={formikMascota.handleBlur}
                                    style={{ height: '150px', resize: 'vertical' }}
                                ></textarea>
                                {formikMascota.touched.descripcion && formikMascota.errors.descripcion ? (
                                        <div className="error-msg ms-2">{formikMascota.errors.descripcion}</div>
                                    ) : null}
                            </div>
                    </div>

                {/* SEGUNDA COLUMNA PARA MAPA */}
                    <div className="col-12 col-md-6">

                        <div className="input-group input-group-sm">
                            <label className="form-label mx-2">Imagen</label>
                            <input
                                type="file"
                                className="form-control"
                                id="imagen"
                                name="imagen"
                                accept="image/*"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            />
                            
                        </div>

                        <div className="input-group input-group-sm">
                                    <select 
                                        className="form-select border-0" 
                                        id="departamento_id"
                                        name="departamento_id" 
                                        value={formikMascota.values.departamento_id} 
                                        onChange={e => {
                                            const { value } = e.target;
                                            formikMascota.handleChange(e); // Actualiza el valor en formikMascota
                                            setDepartamentoSelected(value); // Actualiza el estado del departamento
                                        }}
                                        onBlur={formikMascota.handleBlur}
                                    >
                                        <option value="">Departamento</option>
                                        {store.departamentos.map((departamento, index) => (
                                            <option key={index} value={departamento.id}>
                                                {departamento.name}
                                            </option>
                                        ))}
                                    </select>
                                    {formikMascota.touched.departamento_id && formikMascota.errors.departamento_id ? (
                                            <div className="error-msg ms-2">{formikMascota.errors.departamento_id}</div>
                                        ) : null}
                        </div>

                        {departamentoSelected && (
                           
                            
                           <div className="input-group input-group-sm">
                               <select
                                   className="form-select border-0"
                                   id="localidad_id"
                                   name="localidad_id"
                                   value={formikMascota.values.localidad_id}
                                   onChange={e => {
                                       const { value } = e.target;
                                       formikMascota.handleChange(e); // Actualiza el valor en formikMascota
                                       setLocalidadSelected(value); // Actualiza el estado de la localidad
                                   }}
                                   onBlur={formikMascota.handleBlur}
                               >
                                   <option value="">Localidad</option>
                                   {filteredLocalidades.map((localidad, index) => (
                                       <option key={index} value={localidad.id}>
                                           {localidad.name}
                                       </option>
                                   ))}
                               </select>
                               {formikMascota.touched.localidad_id && formikMascota.errors.localidad_id ? (
                               <div className="error-msg ms-2">{formikMascota.errors.localidad_id}</div>
                           ) : null}
                           </div>
                       
                           )}

                        <div id="emailHelp" className="form-text mb-1">Puedes marcar la localizacion exacta en el mapa antes de ENVIAR</div>
                        <MapComp selectedDepartmentCoords={selectedDepartmentCoords} selectedLocalityCoords={selectedLocalityCoords} mapHeight={"300px"} mapWidth={"100%"} mapZoom={6} />
                        
                        <button type="submit" className="btn enviar w-100 mt-2">
                            ENVIAR
                        </button>
                    </div>
                    </div>
                </form>
                </div>
                <div>
                <button 
                    type="button" 
                    className="btn btn-outline-dark btn-sm mt-4" 
                    onClick={()=> {setEditMascota(null)}}
                    >
                    <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                </div>
                
            </div>

            ) : (

                <div className="container mt-5 text-center">

                    <DatosPerfil 
                        editDatos={() => setEdit(true)} 
                        editPassword={() => setEditPassword(true)} 
                        misMascotas={misMascotas} 
                        editMascota={handleEditMascota} 
                        deleteMascota={handleDeleteMascota}/>

                </div>
              
                )}
        </div>
    );
};

export default PerfilMock;   