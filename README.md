# SGX-SecureAI
The core creation of taxismart 
##

SGX-SecureAI/
│
├── services/
│   ├── auth-service/       # Node.js / TypeScript
│   ├── kms-service/        # Python / FastAPI
│   └── policy-engine/      # Optional OPA / ABAC
│
├── sdk/
│   ├── nodejs-sdk/
│   └── python-sdk/
│
├── infra/
│   ├── terraform/          # KMS, Vault, Kubernetes
│   └── helm-charts/        # For deployment
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── security/
│
├── docs/
│   ├── architecture/
│   ├── compliance/
│   └── runbooks/
│
└── README.md
