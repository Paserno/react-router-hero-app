import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const {  query = '' } = queryString.parse(location.search);
  
    const [{searchText}, handleInputChange] = useForm({searchText: query});

    const heroesFilter = useMemo(() => getHeroesByName(query), [query]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?query=${ searchText }`); // Enviar un query parametro
    }

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />

            <div className="row">

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

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (query === '')
                            ? <div className="alert alert-info text-center"> Buscar un Héroe</div>
                            : ( heroesFilter.length === 0 )
                                 && <div className="alert alert-danger text-center">
                                    No hay Resultados: { query }
                                    </div>
                    }

                    {
                        heroesFilter.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>
        </>
    )
};