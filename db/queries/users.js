import client from "../client.js";

export async function getUsers() {
  const { rows: users } = await client.query(`SELECT * FROM users;`);
  return users;
}

export async function createUser(name, birthdate) {
  const {
    rows: [user],
  } = await client.query(
    `INSERT INTO userz (name, birthdate, favorite_number)
       VALUES ($1, $2, $3)
       RETURNING *;`,
    [name, birthdate, favorite_number]
  );
  return user;
}
