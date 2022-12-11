import database from "../../database";
import { AppError } from "../../errors";


export const categoriesMiddlewaresVerifyID = (schema) => async (req, res, next) => {

      const testIdIsNum = await schema.validate(req.params)
      
      if(isNaN(testIdIsNum.id)){
        throw new AppError("id não é um número", 404)
      }

      req.validatedId = testIdIsNum.id

      const queryResponse = await database.query(
        `
        select * from categories
        where id = ($1)
        `,
        [req.validatedId]
      );
      const numberOflines = queryResponse.rowCount;
      if (numberOflines === 0) {
        throw new AppError("id não encontrado", 404)

      }
      next();

}

export const categoriesMiddlewaresVerifyBody = (schema) => async(req, res, next) => {

    const validatedBody = await schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })
  
    req.validatedBody = validatedBody
    
    
    if(validatedBody.name === "" || undefined){
      throw new AppError("É necessario um name no body", 404)
    }

    const {name} = validatedBody
    
    const queryResponse = await database.query(
      `
      select * from categories
      where name = ($1)
      `,
      [name]
    );
  
    const numberOflines = queryResponse.rowCount;
    if (numberOflines !== 0) {
      throw new AppError("categoria já cadastrada.", 400)
    }

    next()

}
