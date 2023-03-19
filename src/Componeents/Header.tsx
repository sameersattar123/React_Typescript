import {} from "@mui/material"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { logo } from "../Constants/Constants";

 const Header: React.FC = () => {


    return(
        <>
            <AppBar   color="transparent" position='static'>
           <Toolbar>
            <img src={logo} alt=""  style={{ width: 30, marginRight: 10 }} />
            <Typography variant="h6">EverNotes</Typography>
           </Toolbar>
            </AppBar>
    </>
        ) 
}

export default Header;