import React from "react";
import Images from "./Images";

const ListImages = ({images}) => {
    return(
        <div className="col">
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