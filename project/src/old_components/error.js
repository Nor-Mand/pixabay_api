import React from "react";

const Error = ({message}) => {
    return(
        <p className="alert alert-dismissible alert-warning">{message}</p>
    )
}

export default Error;