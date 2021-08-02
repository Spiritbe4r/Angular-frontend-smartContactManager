import { Contact } from "src/services/contact";

export interface Respuesta {
    data: Contact[],
    totalPages: number,
    currentPage:number,
    totalElements:number,
    size:number

    
}

