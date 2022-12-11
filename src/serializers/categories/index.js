import * as yup from 'yup'

export const serializerCategory = {
    create: yup.object().shape({
        name: yup.string().required()
    }),
    readId: yup.object().shape({
        id: yup.number().positive().required().typeError('id must be a number')
    })
}

