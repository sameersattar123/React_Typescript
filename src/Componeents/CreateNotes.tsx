import React, { useState } from "react";
import { Box , InputBase ,styled , Button , Typography} from "@mui/material"
import {TEXT_LIMIT , TITLE_LIMIT} from "../Constants/Constants"

const Container = styled(Box)`
    & > * {
        margin-right: 20px !important;
        margin: 20px 0;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        opacity: 0.4;
        width: 300px;
        padding-right: 25px;
    }
    & > div > input[type="color"] {
        position: relative;
        bottom: -10px;
        width: 40px;
        height: 30px;
    }
    & > span {
        font-size: 10px;
        position: relative;
        right: 40px;
    }
`;

const Error = styled(Typography)`
    background: red;
    color: #fff;
    padding: 10px;
    width: 50%;
`

interface ObjectNote {
    id : number,
    title : string,
    details : string,
    text: string,
    color: string,
    date : string
}    
interface ICreateNoteProps {
    addNotes: (note: ObjectNote) => void
}

const CreateNotes: React.FC<ICreateNoteProps> = ({addNotes}) => {
    const defaultNotes = {
        id : 0,
        title : "",
        text: "",
        details : "",
        color: "",
        date : (new Date().toLocaleString()).toString()
    }
    const [note , setNote] = useState<ObjectNote>(defaultNotes)
    const [error , setError] = useState<string>("")
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        if(error){
            setError("")
        }
        setNote({...note , [e.target.name] : e.target.value})
    }

    const onCreateNote = () => {
        if(!note.title && !note.text){
            setError("All feilds are Mandatory")
        }
        addNotes({...note})
        setNote(defaultNotes)
    }
        return (
            <>
            <Container>
                <InputBase placeholder="Title" inputProps={{
                    maxlength : TITLE_LIMIT
                }}  onChange={(e) => onValueChange(e)} value={note.title} name = "title" />
                <Box component="span" >{note.title.length}/{TITLE_LIMIT}</Box>
                <InputBase inputProps={{
                    maxlength : TEXT_LIMIT
                }} placeholder="Details" onChange={(e) => onValueChange(e)} value={note.text} name = "text" />
                <Box component="span" >{note.text.length}/{TEXT_LIMIT}</Box>
                <InputBase type="color" defaultValue={"#F5F5F5"}  onChange={(e) => onValueChange(e)} value={note.color} name = "color"/>
                <Button variant="outlined" onClick={() => onCreateNote()} >Create</Button>
                {
                    error && <Error>{error}</Error>
                }
            </Container>
            </>
        )
}

export default CreateNotes;