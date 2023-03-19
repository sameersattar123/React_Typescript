import React from 'react'
import {Card , CardContent , Button , styled} from "@mui/material"
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'

interface ObjectNote {
    id : number,
    title : string,
    details : string,
    text: string,
    color: string,
    date : string
}

interface iNotesProp {
    note: ObjectNote
}

const StyledCard = styled(Card)`
    width: 400px;
    margin: 20px;
`

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid #000;
        background: #fff; 
        margin-top: 5px;
    }
    `

const Note: React.FC<iNotesProp> = ({note}) => {
  return (
    <>
    <StyledCard  style={{ backgroundColor: note.color }}>
    <CardContent>
      <Wrapper>
        <Typography variant="h4" style={{color : "#ffffff"}}>{note.text}</Typography>
        <Typography variant="h6" style={{color : "#ffffff"}}>{note.title}</Typography>
        <Typography variant="h6" style={{color : "#ffffff"}}>{note.date}</Typography>
      </Wrapper>
    </CardContent>
    </StyledCard>
    </>
  )
}

export default Note