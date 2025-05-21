export interface ICatResponse {
    id: number;
    name: string;
    experience: number;
    breed: string;
    salary: string;
}


export interface ICatCreate {
    name: string;
    experience: number;
    breed: string;
    salary: string;
}

export interface ICatSalary {
    salary: string;
}

export interface EditCatData extends ICatSalary {
    id: number;
}