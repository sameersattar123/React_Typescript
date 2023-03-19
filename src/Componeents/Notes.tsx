import React from 'react'
import {Typography , Box} from "@mui/material"
import Note from './Note'


interface ObjectNote {
    id : number,
    title : string,
    details : string,
    text: string,
    color: string,
    date : string
}

interface INotesProps {
    notes : ObjectNote[]
}

const Notes: React.FC<INotesProps> = ({notes}) => {

  return (
    <Box>
    <Typography>Notes</Typography>
    <Box>
    {
        notes.map(note => (
          <Note note={note}/>
        ))
    }
    </Box>
    </Box>
  )
}

export default Notes