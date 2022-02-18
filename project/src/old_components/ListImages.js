import React from "react";
import Images from "./Images";

const ListImages = ({images}) => {
    return(
        <div className="col-12 row">
            {images.map(img => (
                <Images
                    key={img.id}
                    imagen={img}
                />
            ))}
        </div>
    )
}

export  default ListImages;