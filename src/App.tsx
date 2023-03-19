import React from 'react';
import './App.css';
import CreateNotes from './Componeents/CreateNotes';
import {Box} from "@mui/material"
import Header from './Componeents/Header';
import Notes from './Componeents/Notes';
import { useState } from "react"

function App() {

interface ObjectNote {
    id : number,
    title : string,
    details : string,
    text: string,
    color: string,
    date : string
  }
  
  
  const [notes , setNotes] = useState<ObjectNote[]>([])

  const addNotes = (note : ObjectNote) => {
    setNotes([note , ...notes])
  } 
  return (
    <>
    <Header/>
<Box style={{ padding : "20px" }}>
    <CreateNotes addNotes={addNotes} />
    <Notes notes ={notes}/>
</Box>
    </>
  );
}

export default App;
