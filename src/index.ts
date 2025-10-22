// src/index.ts
// At the top, add:
import { testRoutes } from './routes/test';

import express from 'express';
import dotenv from 'dotenv';
import { oauthRoutes } from './routes/oauth';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// OAuth routes
app.use('/oauth', oauthRoutes);
// Below OAuth routes, add:
app.use('/test', testRoutes);

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`SGX SecureAI Auth Service running on port ${port}`);
});

export default app; // for testing
