# Company Brain MVP

AI onboarding and operational memory starter app.

## What this includes

- Next.js app router project
- Onboarding dashboard
- Mock employee workflow
- AI assistant API placeholder
- Workflow-generation endpoint
- Prisma schema for the core SaaS objects

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## API routes

### `POST /api/onboarding`

Generates onboarding tasks.

```json
{
  "employeeId": "emp_123",
  "role": "Backend Engineer",
  "department": "Engineering"
}
```

### `POST /api/assistant`

Returns a mock assistant answer based on onboarding tasks.

```json
{
  "employeeId": "emp_001",
  "question": "What should Maya do first?"
}
```

## Next development steps

1. Add real authentication.
2. Connect PostgreSQL through Prisma.
3. Add organization/user CRUD.
4. Add Google Workspace OAuth.
5. Add Slack OAuth.
6. Add document ingestion and embeddings.
7. Replace mock assistant with RAG.
8. Add approval gates before sensitive actions.
