import  client  from "./client.js";
import { createUser } from "./queries/users.js";

async function seedDB() {
  await client.connect();

  await createUser({ name: "Tony Stark", birthdate: "1970-05-29", favorite_number: 3000 });
  await createUser("Steve Rogers",  "1918-07-04", "76");
  await createUser("Natasha Romanoff", "1984-11",  13);
  await createUser("Peter Parker", "2001-08-10");

  console.log("🌱 Database seeded.");
  await client.end();
}

seedDB();