'use client'
import React from "react";
import { CatCard } from "@/components/cats/CatCard";
import { Box, Alert } from "@mui/material";
import { useCats } from "@/app/hooks/useCats";

export const CatsContainer = () => {
    const { cats, error } = useCats();

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            {error && (
                <Alert severity="error">
                    {error.message || "An error occurred while loading cats.."}
                </Alert>
            )}
            <Box display="flex" flexWrap="wrap" gap={2}>
                {cats && cats.map((cat) => (
                    <CatCard key={cat.id} cat={cat} />
                ))}
            </Box>
        </Box>
    );
};
