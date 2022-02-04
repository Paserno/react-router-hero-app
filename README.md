> __Elemento Anterior 👀:__ __[Hook App 🎣](https://github.com/Paserno/react-hooks)__
# HeroesApp - React
Se hará un Aplicación utilizando __React Router__, para lograr hacer una __SPA__ _(Single Page Aplication)_ relacionada a Héroes. Se utilizo el siguiente elemento.

* __[React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)__
* __[Animate.css](https://animate.style)__
* __[Query String](https://www.npmjs.com/package/query-string)__


Contenido Adicional 
* __[Protección de Rutas](https://github.com/Paserno/react-router-hero-app#protección-de-rutas)__
* __[Imágenes en SRC](https://github.com/Paserno/react-router-hero-app#imágenes-en-src)__
----

Recordar que si se desea ejecutar esta aplicación, deben de reconstruir los módulos de node así:
````
npm install
````
Y luego para hacerla correr.
````
npm start
````
<br>

----
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

----
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
----
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
----
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
----
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

----
### 5.- Lista de Heroes
Mostramos una lista en cada componente, de marvel y DC comic:

Pasos a Seguir
* Agregar __[Data](https://github.com/Paserno/react-router-hero-app/blob/main/src/data/heroes.js)__ en `data/heroes.js`.
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
----
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
----
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
----
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
----
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
----
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
----
### 10.- Aplicar Filtros de Héroes
Lo que se hará es mostrar en el componente __SearchScreen__ un listado de los héroes, para cuando se búsquen, ademas de aplicar el filtro necesario para la búsqueda y con ayuda de __QueryString__:

Pasos a Seguir
* Crear archivo `getHeroesByName` con su función en `selectors/getHeroesByName.js` implementar filtro.
* Implementar componente __HeroCard__ en __SearchScreen__ para mostrar los Héroes y adaptar para el componente a las necesidades.

En `selectors/getHeroesByName.js`
* Importamos la data para el filtro.
````
import { heroes } from "../data/heroes";
````
* Crear función que reciba la propiedad `name` para la búsqueda.
* Creamos validación en el caso que se envíe ningun caracter.
* Recibir el `name` y comparar con los heroes en la data con el `includes()`.
````
export const getHeroesByName = (name = '') => {
    if( name.length === 0 ){
        return []
    }

    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}
````
En `components/search/SearchScreen.js`
* Instalar __QueryString__ que nos ayudará a transformar una query en string. 
* Importamos adiconalmente 2 CustomHooks de React Router, importar __QueryString__, la función recien creada `getHeroesByName` y el componente __HeroCard__
````
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
````
* Dentro del componente utilizamos los dos CustomHook de __React Router__.
    * __useNavigate__ nos ayudará a mandar una query al URL.
    * __useLocation__ nos aportará en mostrarnos el path y el query params.
* Con la liberia de queryString, nos permite tomar el contenido del __useLocation__ y transformarlo en un string, para esto le mandamos `location.search` y desestructuramos lo que venga en `query`.
* Lo que venga en `query` se lo pasamos como valor inicial al CustomHook __useForm__, para que conserve en el input el valor de la query.
* Ademas el contenido de la `query` se lo entregamos en la función `getHeroesByName` para poder realizar la búsqueda del superheroe.
* Como habiamos mencionado el Hook __useNavigate__, nos ayudará enviar una query, para así poder manejar la búsqueda y que el input conserve el valor.
````
const navigate = useNavigate();
const location = useLocation();

const { query = '' } = queryString.parse(location.search);

const [{searchText}, handleInputChange] = useForm({searchText: query});


const heroesFilter = getHeroesByName(query);

const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?query=${ searchText }`);
}
````
* En el return del componente, agregamos un `.map()` y le agregamos el componente __HeroCard__ pasandole todo los parametros necesario con el __operador spread__.
````
<div className="col-7">
    <h4>Resultados</h4>
    <hr/>

    {
        heroesFilter.map(hero => (
            <HeroCard 
                key={hero.id}
                {...hero}
            />
        ))
    }

</div>
````
----
### 11.- useMemo y Mensajes de Alerta
En este punto se usará el useMemo en el uso de la función `getHeroesByName` y ademas alertas condicionales para cuando no se ha buscando algun heroe o si no se ha encontrado uno:

Pasos a Seguir
* Implementar __useMemo__ en el componente __SearchScreen__, ademas de generar alertas.

En `components/search/SearchScreen.js`
* Importación adicional de __useMeno__.
````
...
import { useMemo } from "react";
````
* En la función `getHeroesByName` se le agrego el Hook __useMemo__, con la dependencia de `[query]`.
````
const heroesFilter = useMemo(() => getHeroesByName(query), [query]);
````
* Hacemos una condicion ternaria de la `query`, en el caso que no se mande nada, se mostrará una alerta de `Buscar un Héroe`, en el caso que exista algo en `query`, pero no venga nada en `heroesFilter` se mostrará otra alerta con su mensaje de `No hay Resultados:`, de esta manera dar una retroalimentación al usuario.
````
{
    (query === '')
        ? <div className="alert alert-info text-center"> Buscar un Héroe</div>
        : ( heroesFilter.length === 0 )
            && <div className="alert alert-danger text-center">
                No hay Resultados: { query }
                </div>
}
````
#
# Protección de Rutas
Una vez avanzado a este punto la aplicacón funcióna bien, pero ahora se implementará el manejo de rutas, tanto privadas como publicas. 

----
### 1.- Context y Reducer
Se crearán archivos para el manejo de la autentificación de la aplicación:

Pasos a Seguir
* Crear 📂carpeta `auth/`.
    * Crear archivo __authContext__ en `auth/authContext.js`.
    * Crear archivo __authReducer__ en `auth/authReducer.js`.
* Crear archivo en `types/types.js` para centralizar opciones del Reducer.
* Agregar Context y Reducer en componente padre llamado `HeroesApp.js`.
* Agregar Context en el componente __NavBar__.

En `auth/authContext.js`
* Importamos el metodo `createContext`, y le asignamos el nuevo contexto a componente `AuthContext`.
````
import { createContext } from 'react';

export const AuthContext = createContext();
````
En `types/types.js`
* En este punto se hará la centralización de todas las opciones del Reducer, se tendrá este objeto literarió, en el caso que se quiera agregar una acción mas al reducer, se agregará aquí la opción nueva.
````
export const types = {
    login: '[auth] Login',
    logout: '[auth] Logout'
}
````
En `auth/authReducer.js`
* Importamos el objeto literario con las diferentes opciones.
````
import { types } from '../types/types';
````
* Se crea el Reducer que recibirá como parametro un estado vacío, y la acción.
* Se crea el switch que manejará las acciones.
    * La primera opcion seria de iniciar sesión, y se cambiará el estado del `logged` a true.
    * La segunda opcion será el cerrar sesión, y se cambiará el estado en false.
    * Y finalmente el estado por defecto, devolverá el estado sin cambios.
````
export const authReducer = (state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
            
        case types.logout:
            return{
                logged:false
            }
    
        default:
            return state;
    }
}
````
En `HeroesApp.js`
* Se agrega 3 nuevas importaciónes __useReducer__, el componente que maneja el context __authContext__ y el Reducer __authReducer__. 
````
import { useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
````
* Se crea la función `init()` que se le pasará al reducer.
    * Esta función lo que hará es obtener los datos del `localStorage`, en el caso que no haya datos, se enviará el estado `logged` en false.
````
const init = () =>{
    return JSON.parse( localStorage.getItem('user') ) || { logged:false }
}
````
* Se añade el __useReducer__, le pasamos el Reducer con las opciones, el valor inicial con un objeto vacío y le mandamos un tercer argumento con la función recien mencionada `init`.
````
export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init );
    ...
}
````
* En el return encerramos el componente __AppRouter__ en el nuevo Context, y le pasamos `user` que correspnonde al estado del Reducer y `dispatch` el disparador de la acción.
````
return (
        <AuthContext.Provider value={{
            user,
            dispatch 
        }}>
        <AppRouter />
        </AuthContext.Provider>
    )
````
En `components/ui/NavBar.js`
* Se agregan 2 importaciones nuevas, __useContext__ y AuthContext donde esta el context.
````
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
````
* Utilizamos el __useContext__ recibiendo el estado del Reducer `user` que se mando en el componente __HeroesApp__, y  dando referencia donde esta el componente del Contexto __AuthContext__.
````
const { user } = useContext(AuthContext);
````
* En el `<span>` del return del componente __NabBar__ se agregará el nombre del usuario.
````
<span className='nav-item nav-link text-info'>
                        { user.name }
</span>
````
----
### 2.- Context de Login y Logout
Ahora enviaremos a traves del Context los nuevos estados hacia el Reducer:

Pasos a Seguir
* Implementar Context y disparo de acción en el componente __LoginScreen__.
    * Ademas de implementar un pequeño input.
* Implementar Context en el componente __NavBar__ con su acción para el Reducer.
* Almacenar estados en el __localStorage__ en el componente __HeroesApp__.

En `components/login/LoginScreen.js`
* Se importan 5 nuevos elementos useContext, useRef, useForm, AuthContext y types.
````
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
````
* Le agregamos un __useForm__ para el manejo de formulario.
* Usamos el __useContext__ asignando el Context creado y utilizando el `dispatch`.
* Implementamos el __useRef__, para tener referencia al componente input.
````
export const LoginScreen = () => {

    const [valueInput, handleInputChange] = useForm({name: 'Diego'});
    const { name } = valueInput;

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    ...
}
````
* Guardamos el valor del `inputRef` en una constante para luego usarlo.
* Realizamos una validación del input, que no sea menor a 3 caracteres.
* Creamos la acción, enviando en el `payload` el valor guardado en la constante del input y se lo mandamos al `dispatch`.
````
    const handleLogin = (e) => {
        e.preventDefault()
        const userName = inputRef.current.value
        if (userName.length <= 2) {
            return;
        }

        const action = {
            type: types.login,
            payload: { name: userName }
        }

        dispatch(action);

        navigate('/marvel', {
            replace: true
        });
    }
````
* Cremos un `<form>` y un input, para asignarle el nombre del usuario.
````
<form>
    <input
        ref={inputRef}
        type="text"
        name="name"
        className="form-control"
        placeholder="Tu Nombre"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
    />

    <button
        className="btn btn-primary"
        onClick={handleLogin}
    >
        Login
    </button>
</form>
````
En `components/ui/NavBar.js`
* Agregamos el `type` para usar el `dispatch` del Reducer.
````
import { types } from '../../types/types';
````
* Utilizamos ahora el `dispatch` en el useContext.
````
const { user, dispatch } = useContext(AuthContext);
````
* Agregamos el `dispatch` con su acción en la función `handleLogout`.
````
const handleLogout = () => {
        dispatch({
            type: types.logout
        });

        navigate('/login', {
            replace: true
        });
    }
````
En `HeroesApp.js`
* Agregamos la importacion de __useEffect__.
````
import { useEffect, useReducer } from 'react';
````
* Agregamos un __useEffect__, con una validación en el caso que no venga `user`, se retornará.
    * En el caso que si venga `user` se guardará en el __localStorage__.
    * El Effect solo se renderizará cuando `user` cambie.
````
useEffect(() => {
      if( !user ) return;

      localStorage.setItem('user', JSON.stringify(user));
      
    }, [user]);
````
----
### 3.- Ruta Pública - Ruta Privada
Se crearán nuevas rutas para mayor protección de la aplicación de esta manera los usuarios que no se encuentran autenticados no podran acceder al contenido de la aplicación y los que estan autenticados no podran acceder al login:

Pasos a Seguir
* Se creará 2 nuevas componentes para la protección de rutas llamadas __PrivateRote__ y __PublicRoute__. 
* Crear un nuevo __localStorage__ para recordar la ruta en que este el usuario, para el caso que cuando cierre sesión y vuelva a iniciarla se mantenga en memoria en que punto de la aplicación quedo.

En `routers/PrivateRoute.js`
* Realizamos las importaciones de los siguientes elementos
    * __useContext__ para saber en que estado esta el `logged` para saber si esta logiado o no el usuario.
    * El __Navigate__ para la redirección.
    * __useLocation__ que nos permitirá sacar el path y la query de la URL.
    * Finalmente __AuthContext__ que nos dará el contecto al Hook de React. 
````
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
````
* Creamos el componente __PrivateRoute__ que recibira en las propiedades `{ children }` que vendrían a ser todos los componentes hijos.
* Utilizamos el __useContext__ y establecemos el Context de __AuthContext__, para luego desestrucutrar el estado del Reducer llamado `user`.
* Usamos el CustomHook de React Router llamado __useLocation__ que nos permitirá traer el contenido de la URL, en este caso desestrucutramos `pathname` y `search` que seria la query.
* Hacemos uso del __localStorage__ para almacenar el ultimo path que estuvo el usuario en la aplicación, para esto usamos el `pathname` y le concatenamos `search`.
````
export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const {pathname, search} = useLocation();    

    localStorage.setItem('lastPath', pathname + search);
    ...
}
````
* Finalmente hacemos una condición, en el caso que `use.logged` este en __true__, y quiera ir al login no lo permitirá este componente porque lo redireccionará al componente hijo, y en el caso que este en __false__, se saldrá al login y no se podra acceder al contenido de la página.
````
 return user.logged 
        ? children
        : <Navigate to="/login" />
````
En `routers/PublicRoute.js`
* Realizamos las importaciones de los siguientes elementos
    * __useContext__ para saber en que estado esta el `logged` para saber si esta logiado o no el usuario.
    * El __Navigate__ para la redirección.
    * Finalmente __AuthContext__ que nos dará el contecto al Hook de React. 
````
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
````
* Creamos el componente __PublicRoute__ que recibira en las propiedades `{ children }` que vendrían a ser todos los componentes hijos.
* Utilizamos el __useContext__ y establecemos el Context de __AuthContext__, para luego desestrucutrar el estado del Reducer llamado `user`.
````
export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    ...
}
````
* Finalmente hacemos la condición de `user.logged` en el caso que sea __true__ se redireccionará a la aplicación, en el caso que no se redireccionará al login.
````
 return user.logged
            ? <Navigate to="/marvel" />
            : children
````
En `routers/AppRouter.js`
* Se agregan 2 nuevas importaciones al componente, __PrivateRoute__ y __PublicRoute__
````
import { PrivateRoute } from "./PrivateRoute";

import { PublicRoute } from "./PublicRoute";
````
* Entre el `<Routes>` se agregarán las 2 nuevas rutas __PublicRoute__ y __PrivateRoute__.
    * Encerramos el componente __LoginScreen__ entre el componente __PublicRoute__.
    * Encerramos el componente __DashboardRoutes__ que contiene todo el contenido de la aplicación entre el componente de la ruta privada __PrivateRoute__. 
````
<Routes>        
        <Route path="/login" element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>  
          } 
        />

        <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
````
En `components/login/LoginScreen`
* Dentro de la función `handleLogin` del componente __LoginScreen__ se agregará esta actualización.
    * Almacenamos en una constante llamada `lastPath` el contenido que obtengamos del localStorage, en el caso de no tener nada, se enviará la ruta `/marvel`.
    * Actualizando la constante del CustomHook __useNavigate__, le agregaremos entre sus parametros el contenido que recibamos de la constante del __localStorage__.
````
const lastPath = localStorage.getItem('lastPath') || '/marvel';

navigate( lastPath, {
    replace: true
});
````
De esa manera se redirecionará a la ultima ruta que estuvo el usuario.

----
#
# Imágenes en SRC
Presentamos algunos problemas al desplegar la aplicación en Github Pages, por esto se modificará la posicion que esta la 📂carpeta `assets/` el cual contiene las imágenes de los superheroes.

----
### 1.- Cambiar Posición de Assets
Tomaremos la 📂carpeta `assets/` que se encuentra en `public/assets/` y la dejaremos en `src/`, de esta manera manejaremos mejor las imagenes en la aplicación:

Pasos a Seguir
* Mover carpeta `assets/` de `public/` a `scr/`.
* Crear un Helper donde centralizaremos el path de las imágenes, de esta forma toda la aplicación podra acceder a ella.
* Modificar el componente __HeroCard__ y __HeroScreen__.

En `helpers/heroImages.js`
* Aqui centralizaremos el path de la imágen, esto lo logramos gracias a Webpack con `require.context()`.
````
export const heroeImage = require.context('../assets', true); 
````
En `components/hero/HeroCard.js`
* Importamos la función que tiene el path de las imágenes.
````
import { heroeImage } from '../../helpers/heroImages';
````
* Agregamos la función `heroImage()` y le pasamos el path de la imágen con su id, de esta manera teniendo un path dinamico.
````
<img src={ heroeImage(`./${id}.jpg`) } className="card-img" alt={ superhero }/>
````
En `components/hero/HeroScreen.js`
* Importamos la función que tiene el path de las imágenes.
````
import { heroeImage } from '../../helpers/heroImages';
````    
* En la imagen, especificamente en el `src` le pasamos la función del path y le pasamos la id, para tener un path dinamico de imágenes.
````
<img 
    src={ heroeImage(`./${id}.jpg`) } 
    alt={ superhero } 
    className="img-thumbnail animate__animated animate__backInLeft"
/>
````
----