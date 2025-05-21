import { useMutation, useQueryClient } from '@tanstack/react-query'

import {EditCatData, ICatSalary} from '@/types/cat.types'

import { catsService } from '@/services/cats.service'
import {useState} from "react";

export function useEditCat() {
    const queryClient = useQueryClient()
    const [editError, setEditError] = useState<string | null>(null);

    const { mutate: editCat, isPending: isPendingEdit, isSuccess: isSuccessEdit } = useMutation({
        mutationKey: ['edit cat'],
        mutationFn: (data : EditCatData) => catsService.updateCatSalary(data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['cats']
            })
        },
        onError: (error: any) => {
            if (error?.response?.data?.detail) {
                setEditError(error.response.data.detail);
            } else {
                setEditError("Unknown error.");
            }
        },
    })

    return { editCat, editError, isPendingEdit, isSuccessEdit }
}
