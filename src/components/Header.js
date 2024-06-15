import React from "react";

export default function Header(){
    return(
        <nav className="header">
            <img src={require("../images/globe.png")} alt="404"></img>
            <div>My Travel Journal</div>
        </nav>
    )
}