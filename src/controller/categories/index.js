import { categoriesServices } from "../../services/categories";

export const categoriesControllers = {
  index: async (request, response) => {
    const [status, data] = await categoriesServices.index();
    return response.status(status).json(data);
  },
  create: async (request, response) => {
    const [status, data] = await categoriesServices.create(
      request.validatedBody
    );
    return response.status(status).json(data);
  },
  read: async (request, response) => {
    const id = request.validatedId;
    const [status, data] = await categoriesServices.read(id);
    return response.status(status).json(data);
  },
  update: async (request, response) => {
    const [status, data] = await categoriesServices.update(
      request.validatedBody,
      request.validatedId
    );
    return response.status(status).json(data);
  },
  delete: async (request, response) => {
    const id = request.validatedId;
    const [status, data] = await categoriesServices.delete(id);
    return response.status(status).json(data);
  },
};
