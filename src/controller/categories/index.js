import { createCategorieServices, deleteCategorieServices, readCategorieServices, readIdCategorieServices, updateCategorieServices} from "../../services/categories"

export const categoriesControllers = {
    index: async(request, response) => {
        const [status, data] = await readCategorieServices()
        return response.status(status).json(data)
    },
    create: async(request, response) => {
        const [status, data] = await createCategorieServices(request.validatedBody)
        return response.status(status).json(data)
    },
    read: async(request, response) => {
        const id = request.validatedId
        const [status, data] = await readIdCategorieServices(id)
        return response.status(status).json(data)
    },
    update: async(request, response) =>{
        const [status, data] = await updateCategorieServices(request.validatedBody, request.validatedId)
        return response.status(status).json(data)
    },
    delete: async(request, response) =>{
        const id = request.validatedId
        const [status, data] = await deleteCategorieServices(id)
        return response.status(status).json(data)
    },
}