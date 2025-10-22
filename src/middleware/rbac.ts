// src/middleware/rbac.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/jwtService';

// Allowed roles type
type Role = 'admin' | 'driver' | 'partner' | 'user';

// Middleware to enforce roles
export function authorize(allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Missing Authorization header' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Missing token' });

    const { valid, decoded, error } = verifyToken(token);
    if (!valid) return res.status(401).json({ error: 'Invalid token', details: error });

    const userRole = (decoded as any).role;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'Forbidden: insufficient role' });
    }

    // Attach user info to request
    (req as any).user = decoded;
    next();
  };
}
