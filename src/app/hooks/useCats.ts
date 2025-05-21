import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ICatResponse } from '@/types/cat.types'

import { catsService } from '@/services/cats.service'

export function useCats() {
    const { data, error } = useQuery({
        queryKey: ['cats'],
        queryFn: () => catsService.getCats()
    })

    const [cats, setCats] = useState<ICatResponse[] | undefined>(data)

    useEffect(() => {
        setCats(data)
    }, [data])

    return { cats, setCats, error }
}
