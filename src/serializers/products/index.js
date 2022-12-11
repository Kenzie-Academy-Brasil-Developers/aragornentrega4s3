import * as yup from "yup";

export const serializerProduct = {
    create: yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required(),
        category_id: yup.number().required()
    }),
    readId: yup.object().shape({
        id: yup.string().required()
    }),
    update : yup.object().shape({
        name: yup.string(),
        price: yup.number()
    }) 
}

