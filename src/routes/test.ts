import { Router } from "express";
import { authorize } from "../middleware/authorize";

const router = Router();

// Only admin can access
router.get("/admin-only", authorize(["admin"]), (req, res) => {
  res.json({ message: "Admin access granted" });
});

// Public route
router.get("/public", (req, res) => {
  res.json({ message: "Public access" });
});

export default router;
