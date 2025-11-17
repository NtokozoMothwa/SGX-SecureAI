// src/index.ts
// At the top, add:
import { testRoutes } from './routes/test';

import express from "express";
import dotenv from "dotenv";
import oauthRouter from "./routes/oauth";
import usersRouter from "./routes/users";
import clientsRouter from "./routes/clients";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/oauth", oauthRouter);
app.use("/users", usersRouter);
app.use("/clients", clientsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));

export default app; // for testing

