import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ICatCreate } from '@/types/cat.types'

import { catsService } from '@/services/cats.service'
import {useState} from "react";

export function useCreateCat() {
    const queryClient = useQueryClient()
    const [createError, setCreateError] = useState<string | null>(null);

    const { mutate: createCat} = useMutation({
        mutationKey: ['create cat'],
        mutationFn: (data: ICatCreate) => catsService.createCat(data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['cats']
            })
        },
        onError: (error: any) => {
            if (error?.response?.data?.detail) {
                setCreateError(error.response.data.detail);
            } else {
                setCreateError("Unknown error.");
            }
        },
    })

    return { createCat, createError }
}
