import { response } from "express"
import { createProductServices, deleteProductServices, joinProductServices, readIdProductServices, readProductsServices, updateProductServices } from "../../services/products"

export const productsControllers = {
    index: async(request, response) => {
        const [status, data] = await readProductsServices()
        return response.status(status).json(data)
    },
    create: async(request, response) => {
        const [status, data] = await createProductServices(request.validatedBody)
        return response.status(status).json(data)
    },
    read: async(request, response) => {
        const id = request.validatedId
        const [status, data] = await readIdProductServices(id)
        return response.status(status).json(data)
    },
    update: async(request, response) =>{
        const [status, data] = await updateProductServices(request.validatedBody, request.validatedId)
        return response.status(status).json(data)
    },
    delete: async(request, response) =>{
        const id = request.validatedId
        const [status, data] = await deleteProductServices(id)
        return response.status(status).json(data)
    },
    joinCategory: async(request, response) =>{
        const category_id = request.validatedId
        const [status, data] = await joinProductServices(category_id)
        return response.status(status).json(data)
    }
}