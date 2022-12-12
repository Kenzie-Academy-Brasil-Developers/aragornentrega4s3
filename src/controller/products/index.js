import { response } from "express"
import { productsServices } from "../../services/products"

export const productsControllers = {
    index: async(request, response) => {
        const [status, data] = await productsServices.index()
        return response.status(status).json(data)
    },
    create: async(request, response) => {
        const [status, data] = await productsServices.create(request.validatedBody)
        return response.status(status).json(data)
    },
    read: async(request, response) => {
        const id = request.validatedId
        const [status, data] = await productsServices.read(id)
        return response.status(status).json(data)
    },
    update: async(request, response) =>{
        const [status, data] = await productsServices.update(request.validatedBody, request.validatedId)
        return response.status(status).json(data)
    },
    delete: async(request, response) =>{
        const id = request.validatedId
        const [status, data] = await productsServices.delete(id)
        return response.status(status).json(data)
    },
    joinCategory: async(request, response) =>{
        const category_id = request.validatedId
        const [status, data] = await productsServices.joinCategory(category_id)
        return response.status(status).json(data)
    }
}