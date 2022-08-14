import React, { useState } from 'react';
//import axios from 'axios';

function GalleryItem ({ galleryItem, likeImage}) {

    const [hiddenDescription, setHiddenDescription] = useState();
    const handleImageDescription = () => {
        if (hiddenDescription) {
        setHiddenDescription(false);
    } else {
        setHiddenDescription(true);
    }
    };

    return (
        <div>
        {hiddenDescription ? (
        <button className = 'desc_button' onClick={handleImageDescription}>{galleryItem.description}</button>
        ) : (
        <img onClick={handleImageDescription} src={galleryItem.path}/>
    )}
    <br></br>
    <button className = "like button" onClick={() => likeImage(galleryItem)}>I LOVE this pet!!!</button> 
    <p>{galleryItem.likes} Loves</p>



        </div>
    )
}


export default GalleryItem