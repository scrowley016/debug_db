# Debug the Database

Welcome to your debugging challenge! This repo contains a simple PostgreSQL app that's currently **broken in several places**. Your mission is to fix the bugs — one file at a time — by following the flow of the application from start to finish.

---

## 🛠 Setup Instructions

Before diving in, get everything installed and configured:

### 1. Install Dependencies

```bash
npm install
```

### 2. Create the Database

```bash
createdb debugdb
```

### 3. Create Your Environment File

Create a `.env` file at the root of the project. You can copy the provided example:

```bash
cp example.env .env
```

Then update `.env` with your local PostgreSQL username and password.

> Example: DATABASE_URL=postgres://your_username:your_password@localhost:5432/debugdb

---

## Debugging Flow

You will debug one file at a time by following the natural flow of the application setup.

---

#### Step 1: Apply the schema (this will break first)

```bash
npm run db:schema
```

You should hit an error about a SQL syntax issue.

- `db/schema.sql` → Look for a  syntax error in your CREATE TABLE statement.

Fix the error, then re-run the schema:

```bash
npm run db:schema
```

---

####  Step 2: Seed the database

Once your schema is working, run:

```bash
npm run db:seed
```

You will hit one or more errors here. Carefully read the error messages and investigate the cause.

Start by checking:

- `queries/users.js`
- `db/seed.js`

Fix each issue one at a time. After each fix, re-run:

```bash
npm run db:seed
```

until you see:

```bash
🌱 Database seeded.
```

---

## 🏁 You're Done When...

You can run:

```bash
npm run db:reset
```

and see output like:

```bash
🌱 Database seeded.
```

This confirms your connection, schema, and seed logic are all working correctly.

---

## 💡 Tips

- Read error messages carefully — they almost always point to the problem.  
- Tackle one file at a time. Don't try to fix everything at once.  
- Use `npm run db:reset` to test your fixes after each change.

Good luck — and happy bug hunting! 🕵️‍♀️