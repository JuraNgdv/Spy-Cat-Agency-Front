'use client'
import React, {useState} from "react";
import {Box, Button, Dialog} from "@mui/material";
import CreateCatForm from "@/components/forms/CreateCatForm";



export const FormContainer = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => setOpen(true)}>Add New Cat</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box display="flex" justifyContent="center" padding="30px">
                    <CreateCatForm setIsOpen={setOpen}/>
                </Box>
            </Dialog>
        </Box>
    );
};
