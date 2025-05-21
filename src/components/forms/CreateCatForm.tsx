'use client'

import { Formik, Form } from "formik";
import { object, string, number } from 'yup';
import { useCreateCat } from "@/app/hooks/useCreateCat";
import { Button, Alert, Box } from "@mui/material";
import CustomInput from "@/components/ui/CustomInput";
import { ICatCreate } from "@/types/cat.types";


interface CreateCatFormProps {
    setIsOpen: (value: boolean) => void;
}

function CreateCatForm({ setIsOpen }: CreateCatFormProps) {

    const { createCat, createError } = useCreateCat();

    const initialValues: ICatCreate = {
        name: '',
        experience: 0,
        breed: '',
        salary: '',
    };

    const onSubmit = (values: ICatCreate) => {
        createCat(values)
        setIsOpen(false);
    }

    let validationSchema = object({
        name: string().required("Name is required"),
        experience: number()
            .required("Experience is required")
            .max(120, "Experience should be less than 120")
            .min(0, "Experience should be greater than 0"),
        breed: string().required("Breed is required"),
        salary: string()
            .required("Salary is required")
            .matches(/^\d+(\.\d{1,2})?$/, "Salary must be a decimal with up to 2 digits after the dot")
            .test("greater-than-zero", "Salary must be greater than 0", (value) => {
                if (!value) return false;
                return parseFloat(value) > 0;
            }),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <Box display="flex" flexDirection="column" gap={2}>
                    {createError && (
                        <Alert severity="error">
                            {createError || "An error occurred while creating the cat.."}
                        </Alert>
                    )}

                    <CustomInput type="text" name="name" placeholder="Enter your Name" label="Name" />
                    <CustomInput type="text" name="experience" placeholder="Enter your Age" label="experience" />
                    <CustomInput type="text" name="breed" placeholder="Enter your breed" label="breed" />
                    <CustomInput type="text" name="salary" placeholder="Enter your salary" label="salary" />

                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </Form>
        </Formik>
    );
}

export default CreateCatForm;
