import "dotenv/config";
import pg from "pg";

const { Client } = pg;

console.log("CONNECTION STRING", process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export default client;
