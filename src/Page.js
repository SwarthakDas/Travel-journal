import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./components/Data";

export default function Page(){
    const cards=Data.map(card=>{
        return(
            <Main
                key={card.id}
                {...card}
            />
        )
    })
    return(
        <>
            <Header/>
            <div className="main">
                {cards}
            </div>
        </>
    )
}