import React from "react";

const Imagenes = ({imagen}) => {

    const { previewURL, downloads, largeImageURL } = imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center ">
                <img src={previewURL} className="car-img-top" style={{width: 250}}/>
                <div className="card-body">
                    <h5 className="card-title">Descargas: {downloads}</h5>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL}
                       className="btn btn-success btn-block"
                        target="_blank"
                    >Ver Foto</a>
                </div>
            </div>
        </div>
    )
}

export default Imagenes;