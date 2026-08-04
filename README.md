# npm Boilerplate

> A TypeScript package template for shipping typed ESM and CommonJS builds with tests, linting, formatting, conventional commits, and release tooling.

[![CI](https://github.com/montasim/npm-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/montasim/npm-boilerplate/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/maintainer_toolchain-Node_24-339933?logo=node.js&logoColor=white)](.nvmrc)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-blue.svg)](LICENSE)

This repository is a baseline for authoring a small npm library, not a published package to install directly. Clone it, replace the explicit package placeholders, adapt the sample utility API, and retain the build and quality workflow that fits your project.

**[Create a package](#use-this-template) · [Understand the output](#package-output) · [Read the contribution guide](CONTRIBUTING.md) · [Report an issue](https://github.com/montasim/npm-boilerplate/issues)**

## What the template provides

- TypeScript source compiled by tsup into ESM, CommonJS, and declaration files.
- An explicit conditional `exports` map for `import`, `require`, and types.
- Dependency-free sample string, number, and runtime type-guard utilities.
- Node's built-in test runner with coverage of the exported sample surface.
- ESLint 10, Prettier, Husky, lint-staged, Commitlint, and Commitizen.
- GitHub Actions checks and ESM/CommonJS package-export validation.
- Standard Version changelog and release commands.
- Contribution and private vulnerability-reporting guidance.

## Use this template

### Prerequisites

- Node.js 24.12.0 for the current maintainer toolchain, matching [`.nvmrc`](.nvmrc)
- npm and Git

> [!WARNING]
> The manifest deliberately contains `<package-name>`, `<description>`, `<author-name>`, and `<username>` placeholders. Replace every placeholder before installing, publishing, or presenting a derived package.

### 1. Clone and rename

```bash
git clone https://github.com/montasim/npm-boilerplate.git my-package
cd my-package
nvm use
```

Update at least these `package.json` fields:

- `name`, `description`, `author`, and `keywords`
- `repository.url`
- `license`, if the derivative project uses different terms

Also update the README name, import examples, badges, copyright holder, issue URLs, and security contact. A package name must be available and valid in the target npm registry before publishing.

### 2. Install and verify

```bash
npm install
npm run lint
npm run format
npm test
```

`npm test` first builds the package and then runs the Node test suite.

### 3. Replace the sample API

Edit `src/index.ts`, update `test/index.test.js`, and revise the public documentation. The sample exports are:

| Export | Behavior |
| --- | --- |
| `capitalize` | Uppercase the first character |
| `truncate` | Limit a string and append `...` |
| `slugify` | Produce a lowercase ASCII-oriented slug |
| `clamp` | Constrain a number between two boundaries |
| `randomInt` | Return an inclusive pseudo-random integer |
| `isArray` | Narrow an unknown value to `unknown[]` |
| `isObject` | Narrow an unknown value to a non-null, non-array object |
| `utils` | Frozen object containing all sample functions |

Example after choosing the package name:

```typescript
import { capitalize, clamp, isObject } from 'my-package';

capitalize('hello'); // 'Hello'
clamp(12, 0, 10); // 10

const input: unknown = { enabled: true };
if (isObject(input)) {
  console.log(input.enabled);
}
```

## Package output

`npm run build` writes:

```text
dist/
├── index.js     # ESM entry
├── index.cjs    # CommonJS entry
├── index.d.ts   # ESM declarations
└── index.d.cts  # CommonJS declarations
```

Only `dist/`, `README.md`, and `LICENSE` are included in the package tarball. Inspect the actual artifact before release:

```bash
npm pack --dry-run
```

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run build` | Build ESM, CommonJS, and declarations with tsup |
| `npm run dev` | Rebuild in watch mode |
| `npm test` | Build and run Node tests |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Apply ESLint fixes |
| `npm run format` | Check Prettier formatting |
| `npm run format:fix` | Apply Prettier formatting |
| `npm run commit` | Create a Conventional Commit interactively |
| `npm run release` | Update versions and changelog with Standard Version |

The current CI matrix declares Node 18, 20, and 22, while the checked-in ESLint 10 toolchain requires newer Node releases than some of those jobs provide. Treat Node 24.12.0 as the verified maintainer prerequisite until the CI matrix and dependency compatibility are aligned.

## Release workflow

1. Remove all placeholders and choose the package's license intentionally.
2. Run lint, formatting, tests, and `npm pack --dry-run`.
3. Commit changes using Conventional Commit messages.
4. Run `npm run release` to update the version and `CHANGELOG.md`.
5. Review the generated commit and tag.
6. Authenticate with npm and publish only after verifying ownership, visibility, and package contents.

`prepublishOnly` rebuilds and reruns tests, but it does not replace manual review of credentials, registry destination, package name, license, or tarball contents.

## Status and limitations

- `npm-boilerplate` itself is a template and is not configured as an installable published library.
- Placeholder metadata makes the unmodified manifest invalid for a real release.
- The sample `slugify` is ASCII-oriented and is not a complete international transliteration solution.
- `randomInt` uses `Math.random()` and is not appropriate for cryptographic or security-sensitive use.
- The repository does not include browser or bundler integration tests.
- The CC BY-NC-ND license restricts commercial use and redistribution of adaptations; it is unusual for reusable software templates and must be reviewed before deriving or publishing another project.

## Support, security, and contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request. Use [GitHub Issues](https://github.com/montasim/npm-boilerplate/issues) for reproducible template defects and feature proposals. Report vulnerabilities privately according to [SECURITY.md](SECURITY.md), never in a public issue.

Issue and pull-request templates are available in [`.github/`](.github). No code of conduct, support guide, or funding configuration is currently included.

## Author

Created and maintained by [Montasim](https://github.com/montasim). Derived packages must replace the manifest and license placeholders with their actual attribution.

## License

This template is distributed under [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](LICENSE). Read the terms before copying or modifying it: the license permits non-commercial sharing with attribution but restricts distributing adaptations.
