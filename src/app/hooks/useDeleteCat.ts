import { useMutation, useQueryClient } from '@tanstack/react-query'

import { catsService } from '@/services/cats.service'
import {useState} from "react";

export function useDeleteCat() {
    const queryClient = useQueryClient()
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const { mutate: deleteCat, isPending: isPendingDelete, isSuccess: isSuccessDelete } = useMutation({
        mutationKey: ['delete cat'],
        mutationFn: (id: number) => catsService.deleteCat(id),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['cats']
            })
        },
        onError: (error: any) => {
            if (error?.response?.data?.detail) {
                setDeleteError(error.response.data.detail);
            } else {
                setDeleteError("Unknown error.");
            }
        },
    })

    return { deleteCat, deleteError, isPendingDelete, isSuccessDelete }
}
