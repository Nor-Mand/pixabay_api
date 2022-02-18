import React from 'react';

const Images = ({imagen}) =>{

    const { previewURL, tags, largeImageURL } = imagen;

    return(
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-3 rounded">
            <img src={previewURL} className="card-img-top"/>
            <div className="card-body">
                <h6 className="card-title">{tags}</h6>
                <a href={largeImageURL} className="btn btn-primary">Go to view</a>
            </div>
        </div>
    )
}

export default Images;