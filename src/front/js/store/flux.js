//Si hiciste git pull o cambiaste de codespace, hay que cambiar el link y crear nuevas mascotas

// const URL = process.env.BACKEND_URL
const URL = "https://super-chainsaw-jjr69gx4w4gg35w65-3001.app.github.dev"


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			mascotas:[],
			especies: [],
			localidades: [],
			departamentos: [],
			razas: [],
			coord_x: null,
			coord_y: null
			
			
		},
		actions: {
			getAllMascotas: async () => {
				try {
					
					const response = await fetch(URL+"/api/mascotas");
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					
					// console.log(data.results)
					setStore({ mascotas: data.results });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}
			},

			agregarMascota: async (values) =>{
				// const userId = getStore().user.id
				try {
					const formattedValues = {
						nombre: values.nombre,
						edad: values.edad,
						sexo: values.sexo,
						descripcion: values.descripcion,
						estado: values.estado,
						fecha_perdido: values.fecha_perdido,
						especie_id: parseInt(values.especie_id),
						raza_id: parseInt(values.raza_id),
						localidad_id: parseInt(values.localidad_id),
						departamento_id: parseInt(values.departamento_id),
						user_id: values.user_id,
						url_image: values.url_image || null,
						coord_x: values.coord_x || null,
						coord_y: values.coord_y || null,
					};
					const response = await fetch(URL+'/api/mascotas', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(formattedValues)
					});
	
					if (!response.ok) {
						const errorResponse = await response.json();
						throw new Error(errorResponse.message || 'Error al agregar la mascota');
					}
			
					const newMascota = await response.json();
					const store = getStore();
					setStore({ mascotas: [...store.mascotas, newMascota] });
					
					return true;
				} catch (error) {
					console.error(error);
					return false;
				}
			},

			getEspecies: async () => {
				try {
					
					const response = await fetch(URL+"/api/especies");
					
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					
					// const nombresEspecies = data.results.map(especie => especie.name);
					
					// console.log(nombresEspecies)
        			setStore({ especies: data.results });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}

			},

			getDepartamentos: async () => {
				try {
					
					const response = await fetch(URL+"/api/departamentos");
					
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					// console.log(data.results);
					

					// const nombresDepartamentos = data.results.map(departamento => departamento.name);
					// console.log(nombresDepartamentos);
					
        			setStore({ departamentos: data.results });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}

			},

			getLocalidades: async () => {
				try {
					
					const response = await fetch(URL+"/api/localidades");
					
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					// console.log(data.results);
					
					// const nombresLocalidades = data.results.map(localidad => localidad.name);
					// console.log(nombresLocalidades);
					
        			setStore({ localidades: data.results });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}

			},

			getRazas: async () => {
				try {
					
					const response = await fetch(URL+"/api/razas");
					
					if(!response.ok) {
						throw new Error("Status: " + response.status)
					}
					const data = await response.json();
					
					// const nombresRazas = data.results.map(raza => raza.name);
					// console.log(data.results);
					
        			setStore({ razas: data.results });
					
					return true;
				} catch (error) {
					console.log(error);
					return false;	
				}

			},

			login: async (values) => {
				try {
					let response = await fetch(URL+"/api/login",{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"email": values.email,
							"password": values.password
						  })});
						  let data = await response.json()
						  if (response.ok){
							localStorage.setItem('access_token', data.access_token)
							setStore({user:data.user})
							return true
						  }
						  setStore({user: null})
						  return false
				} catch (error) {
					console.log("Error:" + error);
					setStore({user: null})
					return false
				}},

			signup: async (values) => {
				try {
					let response = await fetch(URL+"/api/signup",{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
							},
							body: JSON.stringify({
								"email": values.email,
								"password": values.password,
								"nombre": values.nombre,
								"telefono": values.telefono
							  })});
							  let data = await response.json()
							  if (response.ok){
								localStorage.setItem('access_token', data.access_token)
								setStore({user:data.user})
								return true
							  }
							  return false
					} catch (error) {
						// console.log(error);
						return false
					}
			},
			
			validateToken: async () => {
				let token = localStorage.getItem('access_token');
				if (!token) {
					setStore({user: null});
					return false;
				}
				try {
					let response = await fetch(URL+"/api/valid-token", {
						method: 'GET',
						headers: {
							'content-type': 'application/json',
							'authorization': `Bearer ${token}`
						}
					})
					let data = await response.json();
					if (response.ok){
						setStore({user:data})
						// console.log(data);
						
						return true
					}

					setStore({user:null})
					return false;
				} catch (error) {
					console.log(error);
					setStore({user:null})
					return false;
				}
			},

			validateTokenGoogle: async () => {
				let token = localStorage.getItem('access_token'); // Obtener el token del localStorage
				if (!token) {
					setStore({ user: null });
					return false;
				}
				try {
					const res = await fetch(URL+"/api/valid-token-google", {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${token}`, // Usa el token del localStorage
							'Content-Type': 'application/json',
						}
					});
			
					const contentType = res.headers.get('Content-Type');
			
					if (res.ok) {
						if (contentType && contentType.includes('application/json')) {
							const data = await res.json();
							console.log('Backend response:', data);
							setStore({ user: data });
							return true;
						} else {
							console.error('Response is not JSON:', await res.text());
						}
					} else {
						console.error('Error validating token:', res.statusText);
					}
			
					setStore({ user: null });
					return false;
				} catch (error) {
					console.error('Fetch error:', error);
					setStore({ user: null });
					return false;
				}
			},

			// validateToken: async () => {
			// 	let token = localStorage.getItem('access_token'); // Obtener el token del localStorage
			// 	if (!token) {
			// 		setStore({ user: null });
			// 		return false;
			// 	}
			// 	try {
			// 		const res = await fetch(`${URL}/api/valid-token`, {
			// 			method: 'GET',
			// 			headers: {
			// 				'Authorization': `Bearer ${token}`, // Usa el token del localStorage
			// 				'Content-Type': 'application/json',
			// 			}
			// 		});
			
			// 		const contentType = res.headers.get('Content-Type');
			
			// 		if (res.ok) {
			// 			if (contentType && contentType.includes('application/json')) {
			// 				const data = await res.json();
			// 				console.log('Backend response:', data);
			// 				setStore({ user: data });
			// 				return true;
			// 			} else {
			// 				console.error('Response is not JSON:', await res.text());
			// 			}
			// 		} else {
			// 			console.error('Error validating token:', res.statusText);
			// 		}
			
			// 		setStore({ user: null });
			// 		return false;
			// 	} catch (error) {
			// 		console.error('Fetch error:', error);
			// 		setStore({ user: null });
			// 		return false;
			// 	}
			// },

			logout: async () => {
				localStorage.removeItem("access_token");
				setStore({user:null})
			},

			editarMascota: async (values) =>{
				try {
					const response = await fetch(URL+'/api/mascotas', {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							nombre: values.nombre, 
							edad: values.edad, 
							sexo: values.sexo, 
							descripcion: values.descripcion, 
							estado: values.estado, 
							fecha_perdido: values.fecha_perdido,  
							especie_id: parseInt(values.especie_id),
							raza_id: parseInt(values.raza_id), 
							localidad_id: parseInt(values.localidad_id),
							departamento_id: parseInt(values.departamento_id),
							url_image: values.url_image,
							coord_x: values.coord_x,
							coord_y: values.coord_y,
							// user_id: values.user_id,
						})
					});
	
					if (!response.ok) {
						throw new Error('Error al editar los datos de la mascota');
					}
					const newMascota = await response.json();
					const store = getStore();
					setStore({ mascotas: [...store.mascotas, newMascota] });
					// console.log(newMascota);
					
					return true
				} catch (error) {
					console.error(error);
					return false
				}
			},
			uploadImage: async (formData) => {
				
			
				try {
					const response = await fetch(URL+'/api/upload-file', {
						method: 'POST',
						body: formData,
					});
			
					if (!response.ok) {
						throw new Error('Error al subir la imagen');
					}
			
					const data = await response.json();
					return data.url; // URL de la imagen subida
				} catch (error) {
					console.error(error);
					return null;
				}
			},
			editarUsuario: async (values) =>{
				const store = getStore();
				try {
					const response = await fetch(URL+`/api/usuarios/${store.user.id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							"email": values.email,
							"password": values.newPassword,
							"nombre": values.nombre,
							"telefono": values.telefono,
							"is_active": true
						})
					});
	
					if (response.ok) {
						const data = await response.json();
						setStore({ user: data.user }); 
						return true;
					} else {
						return false;
					}
				} catch (error) {
					console.error("Error updating user:", error);
					return false;
				}
			},
			setCoords: (coord_x, coord_y) => {
				if (coord_x === undefined || coord_y === undefined) {
					console.log('No hay coordenadas');
					return false; // Devuelve false si no hay coordenadas
				}

				// Actualiza el estado con ambos valores en una sola llamada
				setStore({ coord_x, coord_y });
				return true; // Devuelve true si se actualizaron las coordenadas
			},
		}
	}
}

export default getState;
