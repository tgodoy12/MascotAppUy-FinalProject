# MascotApp 🐾

MascotApp es una aplicación web diseñada para ayudar a los usuarios a encontrar, adoptar y reunificar mascotas con sus dueños. Con una interfaz amigable y diversas funcionalidades, permite la publicación de mascotas perdidas o encontradas, la búsqueda de animales disponibles para adopción y opciones de contacto directo con los dueños.


> Este proyecto se basa en el [boilerplate de React y Flask de 4Geeks Academy](https://start.4geeksacademy.com/starters/react-flask).
>
> **➡️ Sigue estos [primeros pasos de configuración](/TEMPLATE_README.md)** para instalar las dependencias y configurar el entorno, utilizando `pipenv` para la gestión de paquetes.


## Tabla de Contenidos
- [Instalación](#instalación)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Uso](#uso)
- [Capturas](#capturas)
- [Colaboradores](#colaboradores)
- [Contribución](#contribución)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/MascotAppUy-FinalProject.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd MascotAppUy-FinalProject
    ```
3. Configura el backend con las credenciales necesarias en un archivo `.env`. Algunas configuraciones necesarias incluyen:
    - `DATABASE_URL`: URL de la base de datos.
    - `CLOUDINARY_URL`: Credenciales para la integración con Cloudinary.
    - `JWT_SECRET`: Clave secreta para autenticación.

4. Instala las dependencias del backend usando `pipenv`:
    ```bash
    pipenv install
    ```
5. Activa el entorno virtual:
    ```bash
    pipenv shell
    ```
6. Realiza las migraciones y corre el backend:
    ```bash
    pipenv run migrate
    pipenv run upgrade
    pipenv run start
    ```
7. Instala y configura el frontend:
    ```bash
    npm install
    npm run start
    ```

## Características

1. **Publicación de mascotas:** Los usuarios pueden publicar mascotas perdidas o en adopción, adjuntando imágenes y detalles específicos.
2. **Filtro de búsqueda:** Los usuarios pueden buscar mascotas por especie, raza, y ubicación, gracias a filtros avanzados.
3. **Contacto directo:** La aplicación facilita el contacto con los dueños a través de botones directos a WhatsApp y correo electrónico.
4. **Autenticación:** Los usuarios pueden registrarse y autenticarse a través de JWT y autenticación social como Google.
5. **Panel de usuario:** Cada usuario cuenta con un perfil donde puede gestionar sus publicaciones, editar la información de sus mascotas, y realizar otras configuraciones.

## Tecnologías

### Frontend
- **React:** Librería para la construcción de interfaces de usuario.
- **Bootstrap:** Framework CSS para diseño responsivo.
- **React Router:** Navegación entre componentes.
- **SweetAlert2:** Librería de alertas y notificaciones.
- **Google Fonts:** Fuentes personalizadas para mejorar la estética.

### Backend
- **Python:** Lenguaje de programación principal.
- **Flask:** Framework para la creación de API REST.
- **JWT:** Manejo de autenticación y autorización segura.
- **SQLAlchemy:** ORM para la gestión de bases de datos.
- **Cloudinary API:** Servicio de almacenamiento de imágenes.
- **PostgreSQL:** Base de datos relacional para almacenar la información de usuarios y mascotas.

## Uso

1. **Inicio de sesión y registro:** Los usuarios pueden registrarse o iniciar sesión con su cuenta.
2. **Publicar mascotas:** Después de iniciar sesión, los usuarios pueden agregar mascotas perdidas o en adopción.
3. **Buscar mascotas:** Utiliza el filtro de búsqueda para encontrar mascotas por especie, localidad y otras características.
4. **Editar perfil y publicaciones:** Accede a la página de perfil para editar tus datos y gestionar tus publicaciones.

## Capturas

### 1. Página de Inicio
![Página de inicio](ruta/a/captura_inicio.png)

### 2. Página de Publicación de Mascotas
![Página de Publicación](ruta/a/captura_publicacion.png)

### 3. Perfil del Usuario
![Perfil del Usuario](ruta/a/captura_perfil.png)

*Estas capturas muestran la interfaz y las funcionalidades principales de MascotApp.*

## Colaboradores

Este proyecto fue desarrollado por un equipo de desarrolladores en el marco del proyecto final del bootcamp de 4Geeks Academy. El equipo trabajó de forma colaborativa en todas las etapas del desarrollo para crear esta plataforma web, aplicando habilidades adquiridas en tecnologías frontend y backend.

- **[Trilce Godoy]** - Fullstack Developer
- **[Agustín Soto]** - Fullstack Developer
- **[Leticia Machado]** - Fullstack Developer
- **[Paulina Pereyra]** - Fullstack Developer
