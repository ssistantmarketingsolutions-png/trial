# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

---

## Repository Overview

**Status:** Pre-bootstrap — no application source code exists yet. The only file is this `CLAUDE.md`.

### Current State (as of 2026-03-02)

| Item | Detail |
|---|---|
| Files | `CLAUDE.md` only |
| Commits | 1 (`4ef111f` — initial CLAUDE.md) |
| Branches | `master` (default), `claude/claude-md-mm8u9094i27mqwjq-Cja0V` (active AI branch) |
| Remote | `ssistantmarketingsolutions-png/trial` |

### When the project is bootstrapped, update this file with:

- Project purpose and description
- Technology stack and key dependencies
- Architecture overview and directory layout
- Actual test/build/lint commands (replace placeholders below)
- Populated naming conventions and code style rules

---

## Development Workflow

### Branching Strategy

- All AI-assisted work is done on dedicated `claude/<task-slug>` branches
- Branch names must start with `claude/` followed by a unique task identifier
- Never push directly to `main` or `master` without explicit permission
- The current active AI branch is `claude/claude-md-mm8u9094i27mqwjq-Cja0V`

### Git Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]
```

Common types:

| Type | Use for |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code restructure with no behavior change |
| `docs` | Documentation only |
| `test` | Adding or updating tests |
| `chore` | Tooling, config, dependencies |

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

1. Wait 2s, retry
2. Wait 4s, retry
3. Wait 8s, retry
4. Wait 16s, retry (final attempt)

---

## Code Conventions

> Fill these in once the project stack is established.

### Language & Style

- [ ] Language(s) used (TypeScript, Python, Go, etc.)
- [ ] Formatter and linter (Prettier, ESLint, Black, golangci-lint, etc.)
- [ ] Auto-formatting rules (tabs vs spaces, line length, etc.)

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
# Example — replace with actual commands after bootstrapping
npm test          # unit tests
npm run test:e2e  # end-to-end tests
```

### Test Conventions

- [ ] Test file location (e.g., `__tests__/`, `*.test.ts` co-located with source)
- [ ] Test naming patterns
- [ ] Mocking and fixture conventions
- [ ] Coverage requirements

---

## Build & Run

> Fill in once build tooling is established.

```bash
# Example — replace with actual commands after bootstrapping
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
- Use secret management (e.g., GitHub Secrets, Vault) for CI/CD pipelines

---

## AI Assistant Guidelines

### What to Do

- Read existing code before modifying it — understand context before making changes
- Keep changes minimal and focused on the task at hand
- Prefer editing existing files over creating new ones
- Write clear commit messages following the Conventional Commits format above
- Run linters and tests before committing when tooling is available
- Confirm you are on the correct `claude/` branch before pushing

### What to Avoid

- Do not over-engineer; avoid premature abstractions
- Do not add unrequested features, refactors, or cleanup
- Do not add comments or docstrings to code you didn't touch
- Do not introduce security vulnerabilities (SQL injection, XSS, secrets in code, etc.)
- Do not force-push or rebase shared branches without explicit permission
- Do not skip pre-commit hooks (`--no-verify`) unless explicitly requested by the user

### Before Pushing

1. Confirm you are on the correct `claude/` branch (not `master` or `main`)
2. Verify no sensitive data (secrets, credentials, `.env` contents) is staged
3. Ensure tests pass — if no test infrastructure exists, note this explicitly
4. Review the diff to confirm changes match the task scope and nothing extraneous is included

---

## Repository Metadata

| Field | Value |
|---|---|
| Remote | `ssistantmarketingsolutions-png/trial` |
| Default branch | `master` |
| AI branch prefix | `claude/` |
| Initialized | 2026-03-02 |
| CLAUDE.md last updated | 2026-03-02 |
