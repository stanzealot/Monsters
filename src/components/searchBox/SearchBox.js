import React from "react";
import "./SearchBox.css"
export const SearchBox = ({placeholder,handleChange}) =>{
    return(
        <input className="Search" type="search" placeholder={placeholder} onChange={handleChange}/>
    )
}