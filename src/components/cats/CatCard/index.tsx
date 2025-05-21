'use client'

import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Alert,
    Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteCat } from "@/app/hooks/useDeleteCat";
import { useEditCat } from "@/app/hooks/useEditCat";
import { EditCatData, ICatResponse } from "@/types/cat.types";

interface CatCardProps {
    cat: ICatResponse;
}

export const CatCard: React.FC<CatCardProps> = ({ cat }) => {
    const [open, setOpen] = useState(false);
    const [salary, setSalary] = useState(cat.salary);
    const { deleteCat, deleteError, isPendingDelete, isSuccessDelete } = useDeleteCat();
    const { editCat, editError, isPendingEdit, isSuccessEdit } = useEditCat();

    const handleEdit = () => {
        const payload: EditCatData = {
            id: cat.id,
            salary: salary,
        };
        editCat(payload);
        if(isSuccessEdit){
            setOpen(false);
        }
    };

    return (
        <Card sx={{ margin: 2, padding: 2 }}>
            <CardContent>
                {deleteError && (
                    <Alert severity="error" sx={{ m: 2 }}>
                        {deleteError}
                    </Alert>
                )}
                <Typography variant="h6">{cat.name}</Typography>
                <Typography>Breed: {cat.breed}</Typography>
                <Typography>Experience: {cat.experience} years</Typography>
                <Typography>Salary: {cat.salary}</Typography>
            </CardContent>
            <IconButton onClick={() => setOpen(true)}>
                <EditIcon />
            </IconButton>
            <IconButton disabled={isPendingDelete} onClick={() => deleteCat(cat.id)}>
                <DeleteIcon />
            </IconButton>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Edit Salary</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                        {editError && (
                            <Alert severity="error">
                                {editError || "Error editing cat."}
                            </Alert>
                        )}
                        <TextField
                            label="Salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            fullWidth
                            margin="dense"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)
                    }}>Cancel</Button>
                    <Button disabled={isPendingEdit} onClick={handleEdit} variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};
