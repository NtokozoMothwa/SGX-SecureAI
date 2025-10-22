// src/services/jwtService.ts
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '3600'; // seconds

// Payload type
interface JwtPayload {
  sub: string; // user ID
  role: string; // role: admin, driver, partner
  [key: string]: any; // additional claims
}

// Generate JWT token
export function generateToken(payload: JwtPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: Number(JWT_EXPIRATION) });
}

// Verify JWT token
export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, error: err };
  }
}
