import React from "react";
import "./Card.css"

export const Card = (props)=>{
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.id}?set=set2&size=180x180`} alt="Images"/>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    )
}