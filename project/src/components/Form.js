import React, { useState } from 'react';
import Error from "./Error";

const Form = ({setSearch}) => {

    const [ words, setWords ] = useState('');
    const [ error, setError ] = useState(false);

    const searchImage = e => {
        e.preventDefault();

        if(words.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        setSearch(words);
    }


    return(
        <form onSubmit={searchImage}>
            <div className="row p-5">
                <div className="form-group col-12 col-sm-12 col-md-9 col-lg-10">
                    <input type="text"
                           className="form-control"
                           placeholder="Enter your word..."
                           onChange={event => setWords(event.target.value)}
                    />
                </div>
                <div className="form-group col-12 col-sm-12 col-md-3 col-lg-2">
                    <input type="submit"
                           className="form-control btn-primary"
                           value="Buscar"
                    />
                </div>
                { error ? <Error message="Please you must a write at least one word!"/> : null}
            </div>
        </form>
    )
}

export default Form;