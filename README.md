# 🐞 Debug the Database

Welcome to your debugging challenge! This repo contains a simple PostgreSQL app that's currently **broken in 5 places**. Your mission is to fix the bugs — one file at a time — by following the flow of the application from start to finish.

---

## 🛠 Setup Instructions

Before diving in, get everything installed and configured:

### 1. 📦 Install Dependencies

```bash
npm install
```

### 2. ⚙️ Create Your Environment File

Create a `.env` file at the root of the project. You can copy the provided example:

```bash
cp .env.example .env
```

Then update `.env` with your local PostgreSQL username and password.

> ⚠️ **Make sure your `.env` is never committed to GitHub!**

---

## 🧪 Initialize the Database

Follow these steps to get your database ready:

### 1. Create the database

```bash
createdb debugdb
```

### 2. Apply the schema

```bash
npm run db:schema
```

### 3. Seed the database

```bash
npm run db:seed
```

---

## 🐛 Debug Instructions

This app has **one error in each of the following files**:

- `db/client.js`
- `db/schema.sql`
- `db/seed.js`
- `queries/users.js`

You’ll **follow the application flow**, fixing each step before moving to the next.

---

### 🪜 Step-by-Step Debugging Flow

#### 🔹 Step 1: Connect to the database and create schema

```bash
createdb debugdb
npm run db:schema
```

This will connect to the database and attempt to apply the schema. You may encounter an error in:

- `db/client.js` → Check `.env` and `dotenv` usage  
- `db/schema.sql` → Look closely at the commas and table structure

---

#### 🔹 Step 2: Seed the database

Once the schema is working, run:

```bash
npm run db:seed
```

You may hit a bug here. Fix:

- `db/seed.js` → Check how the function is being called  
- `queries/users.js` → Confirm the table and insert syntax are correct

Re-run `npm run db:seed` after each fix until you see:

```bash
🌱 Database seeded.
```

---

## 🏁 You're Done When...

✅ You can run:

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