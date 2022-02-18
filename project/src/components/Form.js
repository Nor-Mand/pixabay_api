import React, { useState } from 'react';
import Error from "./Error";

const Form = ({setBuscar}) => {

    const [ tema, setTema ] = useState('');
    const [ error, setError ] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();

        if(tema.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        setBuscar(tema);
    }

    return(
        <form onSubmit={buscarImagen}>
            <div className="container">
                <div className="jumbotron">
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Enter your Search..."
                               onChange={event => setTema(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Buscar"
                        />
                    </div>
                    { error ? <Error mensaje="Debe ingresar un palabra para la busqueda"/> : null}
                </div>
            </div>
        </form>
    )
}

export default Form;