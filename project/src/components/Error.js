import React from 'react';

const Error = ({message}) => {
    return(
        <div className="col-12">
            <p className="alert alert-danger ">{message}</p>
        </div>
    )
}
export default Error;