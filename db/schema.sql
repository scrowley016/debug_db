DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY
  name TEXT NOT NULL,
  birthdate DATE NOT NULL,
  favorite_number INTEGER
);