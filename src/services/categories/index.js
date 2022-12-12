import "dotenv/config";
import database from "../../database";

export const categoriesServices = {
  index: async () => {
    const { rows } = await database.query("select * from Categories;");
    return [200, rows];
  },
  create: async (body) => {
    const { name } = body;
    const { rows } = await database.query(
      `
        insert into categories(name)
        values 
        ($1)
        returning *;
        `,
      [name]
    );
    return [201, rows[0]];
  },
  read: async (id) => {
    const { rows } = await database.query(
      `
          select * from categories
          where id = ($1)
          `,
      [id]
    );
    return [200, rows[0]];
  },
  update: async (body, id) => {
    const { name } = body;
    const { rows } = await database.query(
      `
      update categories 
      set name = ($1)
      where id = ($2)
      returning *;
      `,
      [name, id]
    );
    return [200, rows[0]];
  },
  delete: async (id) => {
    const { rows } = await database.query(
      `
      delete from categories 
      where id = ($1);
      `,
      [id]
    );
    return [204, {}];
  },
};
