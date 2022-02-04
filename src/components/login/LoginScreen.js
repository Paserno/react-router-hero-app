import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';


export const LoginScreen = () => {

    const [valueInput, handleInputChange] = useForm({name: 'Diego'});
    const { name } = valueInput;

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const inputRef = useRef(null);

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


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
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
        </div>
    )
};
