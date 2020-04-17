import React, {useContext} from "react";
import {SmurfContext} from "../contexts/SmurfContext";

const SmurfVillage = () =>{
    const smurfs = useContext(SmurfContext);
    return (
        <div className="smurfVillage">
            {smurfs.map(item=>(
                <div key={item.id} className="smurfCard">
                <p>Name: {item.name}</p>
                <p>Age: {item.age}</p>
                <p>Height: {item.height}</p>
                </div>
            ))}
        </div>
    )
}

export default SmurfVillage;