import  client  from "./client.js";
import { createUser } from "./queries/users.js";

async function seedDB() {
  await client.connect();

  await createUser("Tony Stark", "1970-05-29", 3000);
  await createUser("Steve Rogers", "1918-07-04", 76);
  await createUser("Natasha Romanoff", "1984-11-22", 13);
  await createUser("Peter Parker", "2001-08-10", 42);

  console.log("🌱 Database seeded.");
  await client.end();
}

seedDB();
