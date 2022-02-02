> __Elemento Anterior 👀:__ __[Hook App 🎣](https://github.com/Paserno/react-hooks)__
# HeroesApp - React
Se hará un Aplicación utilizando __React Router__, para lograr hacer una __SPA__ _(Single Page Aplication)_ relacionada a Heroes. Se utilizo el siguiente elemento.

* __[React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)__
* __[Animate.css](https://animate.style)__

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
### 4,5.- Navegar entre Páginas
Se implementará el botón que de login y logout:

Pasos a Seguir
* Agregar CustomHook de __React Router__ en __LoginScreen__.
* Agregar CustomHook de __React Router__ en __NavBar__.

En `components/login/LoginScreen.js`
* Agregar importación de CustomHook de __React Router__ llamado __useNavigate__.
````
import { useNavigate } from 'react-router-dom';
````
* Agregamos el Hook __useNavigate__ y lo agregamos a nuestra nueva función `handleLogin`, lo que hará es enviarnos a una ruta de nuestra aplicación, le mandamos un segundo argumento llamado `replace`, lo que hará es remplazar la vista actual en el ← Back del navegador.
````
const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/marvel', {
            replace: true
        });
    }
````
Así mismo agregamos el CustomHook __useNavigate__ en el componente NavBar.
#
### 5.- Lista de Heroes
Mostramos una lista en cada componente, de marvel y DC comic:

Pasos a Seguir
* Agregar __[Data]()__ en `data/heroes.js`.
* Agregar 📂carpeta `selectors/`.
    * Crear archivo __getHeroById__.
    * Crear archivo __getHeroeByPublisher__.
* Crear componentes __HeroList__ en `components/hero/HeroList.js`.
* Agregar componente __HeroList__ en los dos componentes __MarvelScreen__ y __DcScreen__.

En `selectors/getHeroeByPublisher.js`
* Importamos la __data__.
````
import { heroes } from "../data/heroes";
````
* Creamos la función que recibe la propiedad `publisher`.
* Agregamos una constante con un arreglo con las dos unicas opciones, y agregamos una validación, en el caso que no tener una de las dos opciones emitir un error.
* En el caso que todo salga bien se mandará un `.filter()` con los resultados.
````
export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if( !validPublishers.includes( publisher ) ){
        throw new Error( `${ publisher } is not valid publisher` )
    }

    return heroes.filter( hero => hero.publisher === publisher );
};
````
En `components/hero/HeroList.js`
* Hacemos referencia a la función `getHeroesByPublisher`. que se utilizará en el componente __HeroList__.
* Creamos el componente y recibimos en los parametros el `{publisher}`.
````
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroList = ({ publisher }) => { ... }
````
* Recibiendo la función pasandole como parametro `publisher` y agregandolo a la constante `heroes`.
* Retornamos una lista desordenada, con los heroes que se recibiran gracias al `.map()` y pasandole una `key`.
````
const heroes = getHeroesByPublisher( publisher );

return (
        <>
            <ul>
                {
                    heroes.map( hero => (
                        <li key={ hero.id }>
                            { hero.superhero }
                        </li>
                    ))
                }
            </ul>
        </>
    )
````
En `components/dc/DcScreen.js` o `components/marvel/MarvelScreen.js` 
* importamos en ambos componente __HeroList__. 
````
import { HeroList } from '../hero/HeroList';
````
* En este ejemplo se muestra el componente de __DcScreen__, pero de igual manera se agrega en __MarvelScreen__, enviando el __HeroList__ el parametro correspondido. _(En el caso de __MarvelScreen__ `publisher="Marvel Comics"`)_
````
return (
        <div>
            <h1>DcScreen</h1>
            <HeroList publisher="DC Comics"/>
        </div>
    )
````
#
### 6.- Tarjetas de Heroe
Se creará las tarjetas con los diferentes héroes:

Pasos a Seguir
* Crear componente __HeroCard__ en `components/hero/HeroCard.js`.
* Agregar el componente nuevo a __HeroList__.

En `components/hero/HeroCard.js`
* Importamos `Link` para usarlo a futuro.
````
import { Link } from 'react-router-dom';
````
* Creamos el componente __HeroCard__ y traemos todas las propiedades que sacamos de `data/heroes.js`.
* Creamos el path donde estan las imagenes en la aplicación y lo guardamos en una constante.
````
export const HeroCard = ({ 
     id,
     superhero,
     publisher,
     alter_ego,
     first_appearance,
     characters,
    }) => {

    const imagePath = `/assets/${id}.jpg`;
    ...
    }
````
* Retornamos varios `<div>` con diferentes clases de __boostrap__, para mostrar el contenido de una manera agradable.
````
return (

    <div className="col">
        <div className="card">
            
            <div className="row no-gutters">
                <div className="col-4">
                ...                
                </div>
                <div className="col-8">

                    ...


                </div>
            </div>
        </div>
    </div>
)
````
* En el `<div className="col-4">` agregamos la imagen que se mostrará, le añadimos el path donde tenemos la imagen con `imagePath`.
````
<img src={ imagePath } className="card-img" alt={ superhero }/>
````
* Agregamos el ultimo div dentro de `<div className="col-8">`.
* Añadimos un `<h5>` con el nombre del superheroe, su nombre en un parrafo.
* Ponemos una condición en el caso de que el nombre `alter_ego` sea diferente a `characters`, se mostrará el parrafo con `characters`.
* Ademas agregamos su primera aparicion en un `<small>` y finalmente agregmoas el `<Link>` para usarlo a futuro.
````
<div className="card-body">
    <h5 className="card-title">{ superhero }</h5>
    <p className="card-text">{ alter_ego }</p>
    {
        ( alter_ego !== characters ) &&
            <p className="text-muted">{ characters }</p>
    }
    <p className="card-text">
        <small className="text-muted">{ first_appearance }</small>
    </p>

    <Link to={`/hero/${id}`}>
        Mas..
    </Link>

</div>
````
En `components/hero/HeroCard.js`
* Importamos el componente __HeroCard__.
````
import { HeroCard } from "./HeroCard";
````
* Agregamos el ultimo `<div>` con diferentes clases de boostrap.
* Finalmente en el interior del `.map()` se inserta el componente `<HeroCard>` enviandole toda las propiedades que necesita con el __operador spread__.  
````
<div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( hero => (
                <HeroCard 
                    key={ hero.id }
                    {...hero }
                />
            ))
        }

</div>
````
#
### 7.- Leer Argumento en el URL
Recibiremos el argumento de la URL, para proximamente mostrar información en el componente __HeroScreen__:

Pasos a Seguir
* Permitimos que en el componente __HeroScreen__ reciba ids en el URL gracias a React Router.
* Utilizamos la función `getHeroById` para buscar los heroes por id.
* Adaptamos el componente __HeroScreen__ para mostar a futuro contenido de los superheroes.

En `routes/DashboardRoutes.js`
* En el path del componente __HeroScreen__ lo adaptamos para recibir un id con `path="hero/:heroeId"`.
````
<Route path="hero/:heroeId" element={<HeroScreen />} />
````
En `selects/getHeroById.js`
* Importamos la data para buscar por id.
````
import { heroes } from "../data/heroes"
````
* Creamos la función, que recibirá por parametro el `id`.
* Retornamos en la función la busqueda con `.find()`.
````
export const getHeroById = ( id = '' ) => {

    return heroes.find( hero => hero.id === id );
}
````
En `components/hero/HeroScreen.js`
* Importamos un CustomHook llamada `useParams`, un componente que hace una redirección estos de React Router y la función recien creada `getHeroById`.
````
import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
````
* En el componente __HeroScreen__ agregamos el hook __useParams__ que permite sacar el URL, en este caso hicimos la desestructuración de `heroeId` que es la id que recibiremos por parametros del URL.
* Este resultado de la query se la pasamos a la función `getHeroById`, el cual hará la busqueda del heroe, en el caso que no lo encuentre y nos devuelva `undefined`, se hizo una validación.
* En el caso que entre en la condición retornará el componente propio de __React Router__ `Navigate`, lo que hará es una redirección.
* Finalmente mostramos en un parrafo el id con el nombre del superheroe.
````
export const HeroScreen = () => {
    const { heroeId } = useParams();
    const hero = getHeroById(heroeId);

    if (!hero){
        return <Navigate to='/' /> 
    }
    
    return (
        <div>
            <h1>Hero Screen</h1>
            <p>
                { hero.superhero }
            </p>
        </div>
    )
};
````
#
### 7,5.- Estilos de HeroScreen
Se creará el formato de como se mostraran los héroes dentro del componente __HeroScreen__:

Pasos a seguir
* Adaptar con HTML y boostrap el contenido que se mostrará en el componente __HeroScreen__.

En `components/hero/HeroScreen.js`
* Se importa el CustomHook de React Router llamado __useNavigate__.
````
import { useParams, Navigate, useNavigate } from "react-router-dom";
````
* Le asignamos una variable al __Hook__, para utilizarlo en la función que será disparada por un botón, este Hook de React Router nos ayudará a volver una página atras con `(-1)`. _(Cuando se abra la tarjeta se ira al componente __HeroScreen__, así con esta función permitirá volver)_
````
const navigate = useNavigate();

const handleReturn = () => {
        navigate( -1 ); 
    }
````
* Desestructuramos todos los elementos que se nos pase en la constante `hero`, de esa manera utilizarlos mas facil proximamente.
* Agregamos el path de las imagenes a una constante. _(aquí un ejemplo de la ayuda de la desestructuración con el `id`)_
````
const hero = getHeroById(heroeId);

const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagePath = `/assets/${id}.jpg`;
````
* La imagen `<img>` le pasamos el path de la constante q creamos, ademas de agregar algunas clases de boostrap.
* En `<h3>` se muestra el nombre del superheroe, despues una lista desordenada con algunos datos.
* Un `<h5>` con el nombre del personaje y finalmente un botón para volver _(← Back)_.
````
return (
    <div className="row mt-5">
        <div className="col-4">

            <img src={ imagePath } alt={ superhero } className="img-thumbnail"/>
        </div>
        <div className="col-8">

            <h3>{ superhero }</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
                <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
                <li className="list-group-item"><b>Fist Apparence:</b> { first_appearance }</li>
            </ul>

            <h5 className="mt-3">Characters</h5>
            <p>{ characters }</p>

            <button
                className="btn btn-outline-info"
                onClick={ handleReturn }
            >
                Volver
            </button>

        </div>
    </div>
)
````
#
### 8.- useMemo
Es necesario memorizar algunas partes de la aplicación como peticiones a APIs o bases de datos, en este caso, se utilizará en el uso de estas funciónes `getHeroById` y `getHeroesByPublisher`:

Pasos a Seguir
* Implementar useMemo en el componente __HeroList__ y __HeroScren__.

En `components/hero/HeroScreen.js`
* Importamos el hook propio de React.
````
import { useMemo } from 'react';
````
* Utilizamos el hook para memorizar una potencial función pesada, agregamos un __callback__ con `getHeroById` y en el caso que cambie la dependencia `[heroeId]` volverá a memorizar.
````
const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
````
En `components/hero/HeroList.js`
* Realizamos la importación de __useMemo__ de React.
* Al igual que en el anterior componente utilizamos el __useMemo__ para memorizar una potencial función pesada, dandole como dependencia `[publisher]`.
````
const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);
````
#
### 9.- Componente de Busqueda
Agregamos algunas animaciones en la aplicación gracias a __[Animated.css](https://animate.style)__ y se adaptará el componente __SearchScreen__ con un formulario de búsqueda, para luego reutilizar un CustomHook que se llama __[useForm](https://github.com/Paserno/react-hooks/blob/main/src/hooks/useForm.js)__ una vez implementado se utilizará:

Pasos a Seguir
* Agregar animación en el componente __HeroList__ y __HeroScreen__ pero antes importar la librería en `public/index.html`.
* Agregar `<NavLink>` en NavBar del componente __SearchScreen__.
* Implementar CustomHook de formulario __[useForm](https://github.com/Paserno/react-hooks/blob/main/src/hooks/useForm.js)__, creando 📂carpeta con su archivo en `hooks/useForm.js` para pegarlo ahí.
* Adaptar __SearchScreen__.

En `components/hero/HeroList.js`
* Se Agregan en la clase del `<div>` animaciones sutiles para mejorar la aplicación `animate__animated animate__fadeIn`.
````
<div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
````
En `components/hero/HeroScreen.js`
* En la imagen del componente __HeroScreen__ se le agregan animaciones `animate__animated animate__backInLeft`.
````
<img 
    src={ imagePath } 
    alt={ superhero } 
    className="img-thumbnail animate__animated animate__backInLeft"
/>
````
En `components/ui/NavBar.js`
* Se agrega un nuevo `<NavLink>` para el componente __SearchScreen__ que se desarrollará.
````
<NavLink
    className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active ' : '') }
    to="/search"
>
    Search
</NavLink>
````
En `components/search/SearchScreen.js`
* Importar el CustomHook.
````
import { useForm } from "../../hooks/useForm";
````
* Implementamos el __useForm__ con sus funciones y el estado lo asignamos vacío.
* Creamos la función `handleSearch`, agregamos una propiedad para no recargar la página y comprobamos con la impresión de pantalla. 
````
const [{searchText}, handleInputChange, reset] = useForm({searchText: ''})

const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    reset();
}
````
* En el return implementamos algunos `<div>` con un `<h4>`.
* Creamos un `<form>` con un input, le pasamos el `value={ searchText } ` y para agregar los datos en el formulario usamos `onChange={handleInputChange}`  con ayuda del __useForm__, finalmente tenemos el botón con el submit.
````
<div className="col-5">
    <h4>Buscar</h4>
    <hr />

    <form onSubmit={ handleSearch }>
        <input
            type="text"
            placeholder="Buscar un Héroe"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={handleInputChange}
        />

        <button 
            className="btn btn-primary mt-2"
            type="submit"
        >
            Buscar
        </button>

    </form>

</div>
````
#