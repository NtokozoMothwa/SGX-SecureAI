# SGX SecureAI™ Authentication Service

This is the **SGX SecureAI™ Authentication Service**, implementing OAuth2.0 + OpenID Connect, JWT token issuance, and Role-Based Access Control (RBAC). Built with **Node.js + TypeScript**.

## Features

- OAuth2.0 + OpenID Connect login
- JWT token issuance and verification
- Role-Based Access Control (admin, driver, partner, user)
- Protected routes middleware
- CI/CD ready scripts for build, test, and deployment

## Project Structure

src/
index.ts # Server entry
routes/
oauth.ts # OAuth2 routes
test.ts # RBAC test routes
services/
jwtService.ts # JWT token generation and verification
middleware/
rbac.ts # Role-based access control
.env.example # Environment variables template
package.json # Node.js dependencies and scripts
README.md # Project documentation
