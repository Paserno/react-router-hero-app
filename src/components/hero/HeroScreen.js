import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
    const { heroeId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);


    const handleReturn = () => {
        navigate( -1 ); // Volver a la pagina anterior
    }

    if (!hero){
        return <Navigate to='/' /> // Componente que hace una redirección
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath } 
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__backInLeft"
                    />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
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
};
