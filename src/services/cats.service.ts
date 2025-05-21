import {ICatResponse, ICatCreate, ICatSalary, EditCatData} from '@/types/cat.types'
import axiosInstance from "@/api/instance";

class CatsService {
    private BASE_URL = '/cats/'

    async getCats() {
        const {data} = await axiosInstance.get<ICatResponse[]>(this.BASE_URL)
        return data
    }

    async createCat(payload: ICatCreate) {
        const {data} = await axiosInstance.post(this.BASE_URL, payload)
        return data
    }

    async updateCatSalary(_data: EditCatData) {
        const {data} = await axiosInstance.patch(`${this.BASE_URL}${_data.id}/`, {salary: _data.salary})
        return data
    }

    async deleteCat(id: number) {
        const {data} = await axiosInstance.delete(`${this.BASE_URL}${id}/`)
        return data
    }
}

export const catsService = new CatsService()
