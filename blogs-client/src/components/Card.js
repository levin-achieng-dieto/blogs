import React from "react";

function Card({title, image, short_story}){
    return(
        <>
            <h1>{title}</h1>
            <img src={Image} alt=""/>
            <p>{short_story}</p>
        </>
    )
}

export default Card