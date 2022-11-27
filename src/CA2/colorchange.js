import * as React from "react";
import Box from "@mui/material/Box";

export default function ColorChange(color) {
    return (
        <Box
            className="box"
            sx={{
                height: 300,
                background: color.change,
                border: 2,
                borderRadius:5,
                marginTop:15
            }}
        />
    );
}
