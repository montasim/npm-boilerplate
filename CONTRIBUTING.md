# Contributing to npm-boilerplate

First off, thank you for considering contributing to npm-boilerplate! It's people like you that make npm-boilerplate such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Conventions](#commit-message-conventions)
- [Submitting a Pull Request](#submitting-a-pull-request)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find that the problem has already been reported. When creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps** to reproduce the problem.
- **Provide specific examples** to demonstrate the steps.
- **Describe the behavior** you observed and what you expected.
- **Include environment details** like OS, Node.js version, etc.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title** for the issue.
- **Provide a detailed description** of the suggested enhancement.
- **Explain why this enhancement** would be useful to most users.
- **List some examples** of how this feature would be used.

## Development Setup

### Prerequisites

- **Node.js**: >= 20.x
- **pnpm**: >= 10.x (or npm/yarn)

### Installation

1. Fork the repository and clone your fork:

    ```bash
    git clone https://github.com/YOUR_USERNAME/npm-boilerplate.git
    cd npm-boilerplate
    ```

2. Install dependencies:
    ```bash
    pnpm install
    # or
    npm install
    ```

### Development Workflow

1. **Create a new branch** for your feature or bugfix:

    ```bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b fix/your-bugfix-name
    ```

2. **Make your changes** following the coding standards below.

3. **Run linting and formatting**:

    ```bash
    npm run lint:fix
    ```

4. **Run tests**:

    ```bash
    npm test
    npm run test:coverage
    ```

5. **Build the project**:

    ```bash
    npm run build
    ```

6. **Commit your changes** using conventional commit messages (see below).

7. **Push to your fork** and create a pull request.

## Coding Standards

### TypeScript

- Use **TypeScript** for all source files
- Enable **strict mode** (already configured in `tsconfig.json`)
- Prefer **const** over **let** when possible
- Use **arrow functions** for callbacks and short functions
- Follow **SOLID principles**:
    - Single Responsibility Principle
    - Open/Closed Principle
    - Liskov Substitution Principle
    - Interface Segregation Principle
    - Dependency Inversion Principle

### Code Style

This project uses **ESLint** and **Prettier** for code quality and formatting. Pre-commit hooks will automatically check your code before allowing commits.

```bash
# Check linting
npm run eslint:check

# Fix linting issues
npm run eslint:fix

# Check formatting
npm run prettier:check

# Fix formatting issues
npm run prettier:fix
```

### File Naming

- Use **kebab-case** for file names: `my-module.ts`
- Use **PascalCase** for class names: `MyClass`
- Use **camelCase** for function and variable names: `myFunction`
- Use **UPPER_CASE** for constants: `MY_CONSTANT`

### Documentation

- Add **JSDoc comments** to all exported functions and classes
- Include **@example** blocks for complex functions
- Document **parameters** with @param tags
- Document **return types** with @return tags

## Commit Message Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. The pre-commit hook will validate your commit messages.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **build**: Changes to build system or dependencies
- **ci**: CI/CD changes
- **chore**: Other changes that don't modify src or test files

### Examples

```bash
feat(cli): add support for custom colors

fix: correct package export paths

docs: update installation instructions

test: add unit tests for ascii-art-generator

refactor(modules): extract link factory for reusability
```

## Submitting a Pull Request

### Before Submitting

1. **Ensure your code passes all tests**:

    ```bash
    npm test
    npm run lint:check
    npm run build
    ```

2. **Update documentation** if you've changed functionality:
    - Update README.md
    - Add/update JSDoc comments
    - Update CHANGELOG.md if needed

3. **Squash your commits** into a single logical commit (if needed).

4. **Write a clear PR title** following the commit message convention.

### PR Description Template

When submitting a PR, please include:

- **Description**: What does this PR do?
- **Type**: What type of change is it? (feat, fix, docs, refactor, etc.)
- **Breaking Changes**: Are there any breaking changes?
- **Testing**: How did you test your changes?
- **Screenshots**: Add screenshots if your changes affect UI/CLI output

### Review Process

1. Automated checks will run on your PR (linting, tests, build).
2. Maintainers will review your code and provide feedback.
3. Address any review comments.
4. Once approved, your PR will be merged.

### Getting Help

If you need help with your contribution:

- Ask a question in an issue
- Start a discussion
- Reach out to maintainers

## Recognition

Contributors who significantly improve the project will be recognized in the README.md file.

---

Thank you for contributing to npm-boilerplate! 🎉
