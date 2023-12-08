import React from "react";

function Countries (props) {
    return <div> 
     <h3>{props.data.name.common} </h3>
    {props.data.capital.map((cap) => {
        return <p>Huvudstad: {cap}</p>
    })}

    <p>Antal Invånare: {props.data.population}</p>
    </div>
}

export default Countries;