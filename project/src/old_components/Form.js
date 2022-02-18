import React, { useState } from  'react';
import Error from "./error";

const Form = ({setSearch}) =>{
    const [ find, setFind ] = useState('');
    const [ error, setError ] = useState(false);

    const searchImage = event => {
        event.preventDefault();

        if(find.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        setSearch(find);
    }

    return(
        <form onSubmit = {searchImage}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Find an image, for example art..."
                        onChange={event => setFind(event.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error message="Please you can add a word for search" /> : null }
        </form>
    )
}

export default Form;