 # 🚀 Express + TypeScript Backend Setup Guide

## 📌 Prerequisites

Before starting, install the following:

* Node.js (Latest LTS)
* Git
* VS Code

Check installation:

```bash
node -v
npm -v
git --version
```

---

# Step 1: Create a Project

```bash
mkdir Lecture12_express
cd Lecture12_express
```

---

# Step 2: Initialize npm

```bash
npm init -y
```

This creates:

```
package.json
```

---

# Step 3: Install Dependencies

## Runtime Dependencies

```bash
npm install express dotenv
```

### Packages

* express
* dotenv

---

## Development Dependencies

```bash
npm install -D typescript tsx nodemon ts-node @types/node @types/express
```

### Packages

* typescript
* tsx
* ts-node
* nodemon
* @types/node
* @types/express

---

# Step 4: Create tsconfig.json

```bash
npx tsc --init
```

---

# Step 5: Project Structure

```
Lecture12_express
│
├── node_modules
├── src
│   ├── server.ts
│   ├── config
│   │   └── index.ts
│   ├── controllers
│   ├── routes
│   └── middlewares
│
├── .env
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

# Step 6: Configure tsconfig.json

Important settings:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    "lib": ["ESNext"],
    "types": ["node"],

    "strict": true,

    "sourceMap": true,

    "skipLibCheck": true
  },

  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

---

# Step 7: Configure package.json

```json
{
  "type": "module",

  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

---

# Step 8: Create .env

```
PORT=3000
```

---

# Step 9: Create server.ts

```ts
import express from "express";
import serverConfig from "./config/index.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on ${serverConfig.PORT}`);
});
```

---

# Step 10: Create config/index.ts

```ts
import dotenv from "dotenv";

dotenv.config();

const serverConfig = {
    PORT: Number(process.env.PORT) || 3000,
};

export default serverConfig;
```

---

# Step 11: Run Development Server

```bash
npm run dev
```

---

# Step 12: Build Project

```bash
npm run build
```

Creates:

```
dist/
```

---

# Step 13: Run Production Server

```bash
npm start
```

---

# Useful Commands

### Install all packages

```bash
npm install express dotenv
npm install -D typescript tsx nodemon ts-node @types/node @types/express
```

---

### Initialize TypeScript

```bash
npx tsc --init
```

---

### Run Development Server

```bash
npm run dev
```

---

### Build

```bash
npm run build
```

---

### Start Production

```bash
npm start
```

---

### Check Installed Packages

```bash
npm list --depth=0
```

---

### Check Versions

```bash
node -v
npm -v
tsc -v
```

---

# Technologies Used

* Node.js
* Express.js
* TypeScript
* tsx
* dotenv
* npm

---

# Learning Roadmap

✅ Node.js

✅ npm

✅ Express

✅ TypeScript

⬜ Routing

⬜ Controllers

⬜ Middleware

⬜ Error Handling

⬜ REST APIs

⬜ MongoDB

⬜ Authentication

⬜ JWT

⬜ MVC Architecture

⬜ Deployment

---

Happy Coding! 🚀
