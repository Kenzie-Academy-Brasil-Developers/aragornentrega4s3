import database from "../../database";
import { AppError } from "../../errors";

export const productsMiddlewaresVerifyID =
  (schema) => async (req, res, next) => {
    const testIdIsString = await schema.validate(req.params);
     
    req.validatedId = testIdIsString.id;

    const queryResponse = await database.query(
      `
        select * from products
        where id = ($1)
        `,
      [req.params.id]
    );
    const numberOflines = queryResponse.rowCount;
    if (numberOflines === 0) {
      throw new AppError("id não encontrado", 404);
    }
    next();
  };

export const productsMiddlewaresVerifyBody =
  (schema) => async (req, res, next) => {
    const validatedBody = await schema.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });

    console.log('oi estou no mid ver body')

    req.validatedBody = validatedBody;

    // const name = validatedBody.name;

    // const queryResponseName = await database.query(
    //   `
    //     select * from products
    //     where name = ($1)
    //     `,
    //   [name]
    // );

    // const numberOflines1 = queryResponseName.rowCount;

    // if (numberOflines1 !== 0) {
    //   throw new AppError("Produto já cadastrado", 400);
    // }

    // const categoryId = validatedBody.category_id;
    // const queryResponse = await database.query(
    //   `
    //     select * from categories
    //     where id = ($1)
    //     `,
    //   [categoryId]
    // );
    // const numberOflines = queryResponse.rowCount;
    // if (numberOflines === 0) {
    //   throw new AppError("Category_id não encontrado", 400);
    // }
    next();
  };
