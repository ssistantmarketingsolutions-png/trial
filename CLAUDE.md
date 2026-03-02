# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

---

## Repository Overview

**Status:** Newly initialized repository — no source code has been added yet.

When this project is bootstrapped, update this file with:
- Project purpose and description
- Technology stack and key dependencies
- Architecture overview and module layout

---

## Development Workflow

### Branching Strategy

- All AI-assisted work is done on dedicated `claude/<task-slug>` branches
- Branch names must start with `claude/` followed by a unique task identifier
- Never push directly to `main` or `master` without explicit permission

### Git Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]
```

Common types:
- `feat` — new feature
- `fix` — bug fix
- `refactor` — code restructure with no behavior change
- `docs` — documentation only
- `test` — adding or updating tests
- `chore` — tooling, config, dependencies

Example:
```
feat(auth): add JWT token refresh logic

Implements silent refresh when access token is within 5 minutes of expiry.
```

### Push Workflow

```bash
# Always use -u to set upstream tracking
git push -u origin <branch-name>
```

If a push fails due to network errors, retry with exponential backoff:
- Wait 2s, retry
- Wait 4s, retry
- Wait 8s, retry
- Wait 16s, retry (final attempt)

---

## Code Conventions

> These sections should be filled in once the project stack is established.

### Language & Style

- [ ] Define language(s) used (TypeScript, Python, Go, etc.)
- [ ] Define formatter and linter (Prettier, ESLint, Black, golangci-lint, etc.)
- [ ] Document any auto-formatting rules (tabs vs spaces, line length, etc.)

### Naming Conventions

- [ ] File naming (kebab-case, snake_case, PascalCase)
- [ ] Function/variable naming style
- [ ] Component/class naming patterns

### Project Structure

```
(populate once the project is initialized)
```

---

## Testing

> Fill in once test infrastructure is established.

### Running Tests

```bash
# Example — update with actual commands
npm test          # unit tests
npm run test:e2e  # end-to-end tests
```

### Test Conventions

- [ ] Where tests live relative to source files (e.g., `__tests__/`, `*.test.ts` co-located)
- [ ] Test naming patterns
- [ ] Mocking and fixture conventions
- [ ] Coverage requirements

---

## Build & Run

> Fill in once build tooling is established.

```bash
# Example — update with actual commands
npm install       # install dependencies
npm run dev       # start dev server
npm run build     # production build
npm run lint      # lint check
npm run format    # auto-format
```

---

## Environment Configuration

- Never commit secrets, API keys, or credentials to the repository
- Use `.env` files locally; add `.env` to `.gitignore`
- Document all required environment variables in `.env.example`
- Use secret management (e.g., GitHub Secrets, Vault) for CI/CD

---

## AI Assistant Guidelines

### What to Do

- Read existing code before modifying it — understand context before making changes
- Keep changes minimal and focused on the task at hand
- Prefer editing existing files over creating new ones
- Write clear commit messages following the conventions above
- Run linters and tests before committing when tooling exists

### What to Avoid

- Do not over-engineer; avoid premature abstractions
- Do not add unrequested features, refactors, or cleanup
- Do not add comments or docstrings to code you didn't touch
- Do not introduce security vulnerabilities (SQL injection, XSS, secrets in code, etc.)
- Do not force-push or rebase shared branches without explicit permission
- Do not skip pre-commit hooks (`--no-verify`) unless the user explicitly requests it

### Before Pushing

1. Confirm you are on the correct `claude/` branch
2. Verify no sensitive data is staged
3. Ensure tests pass (if test infrastructure exists)
4. Review the diff to confirm changes match the task scope

---

## Repository Metadata

| Field | Value |
|---|---|
| Remote | `ssistantmarketingsolutions-png/trial` |
| Default AI branch prefix | `claude/` |
| CLAUDE.md last updated | 2026-03-02 |
