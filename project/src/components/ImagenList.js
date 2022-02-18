import React from 'react';
import Images from "./Images";

const ImagenList = ({images}) =>{
    return(
        <div className="col-12 row">
            {images.map(image => (
                <Images
                    key={image.id}
                    imagen={image}
                />
            ))}
        </div>
    )
}

export default ImagenList;