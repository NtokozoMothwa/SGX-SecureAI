// src/routes/test.ts
import { Router } from 'express';
import { authorize } from '../middleware/rbac';

const router = Router();

// Only admins can access this route
router.get('/admin-only', authorize(['admin']), (req, res) => {
  const user = (req as any).user;
  res.json({ message: `Hello Admin ${user.sub}`, user });
});

// Drivers and partners can access this
router.get('/driver-partner', authorize(['driver', 'partner']), (req, res) => {
  const user = (req as any).user;
  res.json({ message: `Hello ${user.role} ${user.sub}`, user });
});

export { router as testRoutes };
