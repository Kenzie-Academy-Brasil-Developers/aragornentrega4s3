import "dotenv/config";
import database from "../../database";
import { serializerProduct } from "../../serializers/products";

export const readProductsServices = async () => {
  const { rows } = await database.query("select * from Products;");
  return [200, rows];
};

export const createProductServices = async (body) => {
  const { name, price, category_id } = body;

  const { rows } = await database.query(
    `
        insert into products(name, price, category_id)
        values
       ($1, $2, $3)
        returning *;
        `,
    [name, price, category_id]
  );
  return [201, rows[0]];
};

export const readIdProductServices = async (id) => {
  const { rows } = await database.query(
    `
        select * from products
        where id = ($1)
        `,
    [id]
  );
  return [200, rows[0]];
};

export const updateProductServices = async (body, id) => {
  let query = "UPDATE products SET ";
  const keys = Object.keys(body);
  const values = Object.values(body);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);
  
  query += ` WHERE id = \$${(keys.length +=1)} returning*`;
  
  console.log(query)
  const { rows } = await database.query(query, [...values, id]);

  return [200, rows[0]];
};

export const deleteProductServices = async (id) => {
  const { rows } = await database.query(
    `
    delete from products
    where id = ($1);
    `,
    [id]
  );
  return [204, {}];
};

export const joinProductServices = async (category_id) => {
  const { rows } = await database.query(
    `
    select p.name, p.price, c."name" as category from products p 
    join categories c on 
    ($1) = c.id
    `,
    [category_id]
  );

  return [200, rows];
};
