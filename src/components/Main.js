import React from "react";

export default function Main(props){
    console.log(props);
    return(
        <div className="card">
            <img src={require(`../images/${props.img}`)} alt="404"></img>
            <section className="card-details">
                <div className="maps">
                    <img src={require("../images/loc.png")} alt="404"></img>
                    <p>{props.place}</p>
                    <a href={props.mapURL}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
            </section>
        </div>
    )
}