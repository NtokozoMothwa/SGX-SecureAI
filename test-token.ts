import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "supersecret123";
const payload = {
  sub: "user123",
  role: "admin",
};

const token = jwt.sign(payload, secret, { expiresIn: "1h" });
console.log("Generated JWT:", token);
