import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {  query = '' } = queryString.parse(location.search);
  
    const [{searchText}, handleInputChange] = useForm({searchText: query});

    
    const heroesFilter = getHeroesByName(query);

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