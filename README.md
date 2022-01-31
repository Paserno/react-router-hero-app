> __Elemento Anterior 👀:__ __[Hook App 🎣](https://github.com/Paserno/react-hooks)__
# HeroesApp - React
Se hará un Aplicación utilizando __React Router__, para lograr hacer una __SPA__ _(Single Page Aplication)_ relacionada a Heroes. Se utilizo el siguiente elemento.

* __[React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)__

#
Recordar que si se desea ejecutar esta aplicación, deben de reconstruir los módulos de node así:
````
npm install
````
Y luego para hacerla correr.
````
npm start
````
<br>

#
### 1.- Inicio del Proyecto HeroesApp
En este punto se crea el proyecto en __React__ y se eliminan algunos elementos, para luego adaptarlo a lo que se hará:

Pasos a Seguir
* Crear __HeroesApp__ en `HeroesApp.js`.
* Limpiar `index.js` agregar importación de `HeroesApp.js` y renderizar.
* Crear 📂carpeta de `componentes/` y crear subcarpetas.
    * `dc/` agregar archivo `DcScreen.js`.
    * `login/` agregar archivo `LoginScreen.js`.
    * `marvel/` agregar archivo `MarvelScreen.js`.
    * `search/` agregar archivo `SearchScreen.js`.
    * `ui/` agregar archivo `NavBar.js`.

#
### 2.- Configurar Router
Se instala __React Router__ para su uso y configurar:

Pasos a Seguir
* Crear __AppRouter__ en `routers/AppRouter.js`.
* Agregamos contenido Boostrap a __NavBar__.

En `routers/AppRouter.js`
* Importamos React Router con los elementos que se utilizarán y los diferentes componentes que se utilizarán.
````
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DcScreen } from "../components/dc/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";
````
* En el return del componente __AppRouter__ se agrega el __NavBar__ con las rutas.
````
return (
    <BrowserRouter>
      <Navbar />
      <Routes>
     
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />

      </Routes>

    </BrowserRouter>
  )
````
En `HeroesApp.js`
* Importamos el componente __AppRouter__.
* Return del componente.
````
import { AppRouter } from './routers/AppRouter';

return (
        <AppRouter />
    )
````
En `components/ui/NavBar.js`
* Importamos React y los elementos de `Link` y `NavLink`.
````
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
````
* Adaptamos un __NavBar__ de boostrap y lo insertamos en return del componente.
````
return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
````
#
### 3.- Modificar NavBar
En este punto eliminamos algunos errores de React Router v6, ya que en esta actualización se presentaron cambios:

Pasos a seguir
* Adaptar componente NavBar en `components/ui/NavBar.js`

En `components/ui/NavBar.js`
* En el `NavLink` tanto de Marvel como el de DC eliminamos `activeClassName="active"` y `exact` ya que en esta versión ya no existen estos elementos en __React Router__.
* Agregamos alguna función en la clase utilizando la propiedad `isActive` validamos si el `NavLink` esta activo, en el caso que lo este le agregamos una clase adicional.
````
<NavLink
    className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active ' : '') }
    to="/marvel"
>
    Marvel
</NavLink>
````
* Agregamos algunas clases del __boostrap__ para el `<div>` para mostrarlo en la izquierda los elementos del `<ul>`.
* Agregamos un `<span>` que ira el nombre del usuario y cambiamos el `NavLink` por un botón con un `onClick` para en el futuro utilizar.
````
<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
    <ul className="navbar-nav ml-auto">

        <span className='nav-item nav-link text-info'>
            Diego
        </span>
        
        <button
            className="nav-item nav-link btn"
            onClick={ handleLogout }
        >
            Logout
        </button>
    </ul>
</div>
````
#
### 4.- Crear un nuevo Router
Aquí se creará un segundo __Router__ para manejar el login de la aplicación, donde no se mostrará el __NavBar__:

Pasos a Seguir
* Crear nuevo router __DashboardRouter__ en `routers/DashboardRouter.js`.
* Adaptar __AppRouter__ para solo recibir el login.
* Crear un nuevo componente __HeroScreen__ en `hero/HeroScreen.js`.

En `hero/HeroScreen.js`
* Creamos el componente nuevo.
````
export const HeroScreen = () => {
    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    )
};
````
En `routers/DashboardRouter.js`
* Importamos los elementos de __React Router__ y los componentes que se utilizarán
````
import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/hero/HeroScreen";
````    
* Dentro del componente agregamos el return, con el __NavBar__ y los diferentes elementos que se mostraran con este, mencionar que el componente __DashboardRoutes__ es un Router hijo.
````
return (
        <>
            <Navbar />
            <Routes>

                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero" element={<HeroScreen />} />
                
                
                <Route path="/" element={<MarvelScreen />} />

            </Routes>
        </>
    )
````
En `routers/AppRouter.js`
* Eliminamos algunas importaciones que ya no se usaran en este componente, y agregamos la importación de __DashboardRoutes__ como Router Hijo.
````
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
````
* Ahora tenemos el componente __LoginScreen__ y ademas agregamos __DashboardRoutes__ que seria el otro router que recibirá el __Navbar__.
````
return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route path="/*" element={<DashboardRoutes />}/>
      </Routes>

    </BrowserRouter>
  )
````
#