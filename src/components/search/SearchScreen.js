import { useForm } from "../../hooks/useForm";


export const SearchScreen = () => {

    const [{searchText}, handleInputChange, reset] = useForm({searchText: ''})

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
        reset();
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

            </div>
        </>
    )
};