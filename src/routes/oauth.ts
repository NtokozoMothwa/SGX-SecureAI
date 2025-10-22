// src/routes/oauth.ts
import { Router } from 'express';
import { Issuer } from 'openid-client';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
let client: any;

// Discover OIDC provider
Issuer.discover(process.env.OIDC_ISSUER)
  .then((issuer) => {
    client = new issuer.Client({
      client_id: process.env.OIDC_CLIENT_ID,
      client_secret: process.env.OIDC_CLIENT_SECRET,
      redirect_uris: [process.env.OIDC_REDIRECT_URI],
      response_types: ['code'],
    });
    console.log('OIDC client initialized');
  })
  .catch((err) => {
    console.error('OIDC discovery error:', err);
  });

// Authorization route
router.get('/authorize', (req, res) => {
  if (!client) return res.status(503).send('OIDC client not ready');
  const url = client.authorizationUrl({
    scope: 'openid profile email',
  });
  res.redirect(url);
});

// Callback route
router.get('/cb', async (req, res) => {
  if (!client) return res.status(503).send('OIDC client not ready');
  try {
    const params = client.callbackParams(req);
    const tokenSet = await client.callback(process.env.OIDC_REDIRECT_URI, params);
    res.json(tokenSet);
  } catch (err) {
    console.error('OIDC callback error:', err);
    res.status(500).send('Authentication failed');
  }
});

export { router as oauthRoutes };
