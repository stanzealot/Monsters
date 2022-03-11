import React from "react";
import "./Card-list.css";
import {Card} from "../card/Card.js";

export const CardList = ({monster})=>{
    return <div className="Card-list">
             {monster.map(monster =>(
                    <Card key={monster.id} {...monster} />
                ))}
            </div>
}