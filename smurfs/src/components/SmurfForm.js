import React, {useState, useContext} from "react";
import { FormContext } from "../contexts/FormContext";

const SmurfForm = () => {

    const addSmurf = useContext(FormContext);

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newHeight, setNewHeight] = useState("");

    const handleNameChange = e => {
        setNewName(e.target.value)
    }
    const handleAgeChange = e => {
        setNewAge(e.target.value)
    }
    const handleHeightChange = e => {
        setNewHeight(e.target.value)
    }

    const submitForm = (newName, newAge, newHeight) => {
        addSmurf(newName, newAge, newHeight);
        setNewName("")
        setNewAge("")
        setNewHeight("")

    }


    return(
        <div className="Smurf Form">
        <input 
        type="text"
        value={newName}
        placeholder="Name"
        name="newName"
        onChange={handleNameChange}/>
        <input 
        type="text"
        value={newAge}
        placeholder="Age"
        name="newAge"
        onChange={handleAgeChange}/>
        <input 
        type="text"
        value={newHeight}
        placeholder="Height"
        name="newHeight"
        onChange={handleHeightChange}/>

        <button onClick={() => submitForm(newName, newAge, newHeight)}>Add New Smurf</button>
    </div>
    )
}

export default SmurfForm;