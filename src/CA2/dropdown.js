import {useState}  from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import ColorChange from "./colorchange";

export default function Dropdown() {
    const [Colour, setColour] = useState("");

    const handleChange = (e) => {
        setColour(e.target.value);
    };
    return (
        <>
            <Container maxWidth="sm" className="container">
                <Box sx={{ minWidth: 120,background:Colour,marginTop:3}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Colour}
                            label="Click For DropDown List"
                            onChange={handleChange}
                        >
                            <MenuItem value={"lavender"}>Lavender</MenuItem>
                            <MenuItem value={"lime"}>Lime</MenuItem>
                            <MenuItem value={"darkblue"}>Darkblue</MenuItem>
                            <MenuItem value={"crimson"}>Crimson</MenuItem>
                            <MenuItem value={"Teal"}>Teal Green</MenuItem>
                            <MenuItem value={"ghostwhite"}>Ghost White</MenuItem>
                            <MenuItem value={"purple"}>Purple</MenuItem>
                            <MenuItem value={"aliceblue"}>Alice Blue</MenuItem>
                            <MenuItem value={"aquamarine"}>Aqua Marine</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <ColorChange change={Colour} />
            </Container>
        </>
    );
}