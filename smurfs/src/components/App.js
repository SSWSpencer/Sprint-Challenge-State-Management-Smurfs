import React, { useState, useEffect } from "react";
import "./App.css";
import {SmurfContext} from "../contexts/SmurfContext";
import {FormContext} from "../contexts/FormContext";
import axios from "axios";

import SmurfVillage from "./SmurfVillage";
import SmurfForm from "./SmurfForm"

function App()  {
  const [smurfs, setSmurfs] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
    .then(res =>{
      setSmurfs(res.data)
      console.log(res.data)
    })
  }, [] )

  const addSmurf = (newName, newAge, newHeight) => {
    setSmurfs([...smurfs, {name: newName, age: newAge, height: newHeight}])
    console.log(smurfs)
    axios.post("http://localhost:3333/smurfs", {
      name: newName,
      age: newAge,
      height: newHeight,
      id: smurfs.length
    })
  }


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <FormContext.Provider value={addSmurf} >
          <SmurfForm />
        </FormContext.Provider>

        <SmurfContext.Provider value={smurfs}>
        <SmurfVillage />
        </SmurfContext.Provider>
        
      </div>
    );
  }

export default App;
