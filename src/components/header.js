import React from "react";
import woman from "../woman.jpg"
import "../App.css"

function Header(){
    return(
        <header>
            <img src={woman} alt="cardImage"/>
        </header>
    );
}


export default Header;