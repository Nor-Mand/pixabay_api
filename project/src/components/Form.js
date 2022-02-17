import React, { useState } from  'react';

const Form = () =>{
    const [find, setFind] = useState('');
    const searchImage = event =>{

    }

    return(
        <form>
            onSubmit = {searchImage}
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
        </form>
    )
}

export default Form;