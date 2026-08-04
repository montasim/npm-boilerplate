# npm Boilerplate

> A TypeScript package template for shipping typed ESM and CommonJS builds with tests, linting, formatting, conventional commits, and release tooling.

[![CI](https://github.com/montasim/npm-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/montasim/npm-boilerplate/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/maintainer_toolchain-Node_24-339933?logo=node.js&logoColor=white)](.nvmrc)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-blue.svg)](LICENSE)
[![Support on SupportKori](https://img.shields.io/badge/Support_on-SupportKori-00B8B5)](https://www.supportkori.com/montasim)

This repository demonstrates the structure and tooling of a small npm library; it is not a published package to install directly. Its current CC BY-NC-ND 4.0 license allows non-commercial sharing with attribution but forbids distributing adaptations, so it cannot serve as a normal reusable package template unless the maintainer grants separate permission or changes the license.

**[Evaluate the scaffold](#evaluate-the-scaffold) · [Understand the output](#package-output) · [Review current limitations](#status-and-limitations) · [Report an issue](https://github.com/montasim/npm-boilerplate/issues)**

## What the template provides

- TypeScript source compiled by tsup into ESM, CommonJS, and declaration files.
- An explicit conditional `exports` map for `import`, `require`, and types.
- Dependency-free sample string, number, and runtime type-guard utilities.
- Node's built-in test runner with coverage of the exported sample surface.
- ESLint 10, Prettier, Husky, lint-staged, Commitlint, and Commitizen.
- GitHub Actions checks and ESM/CommonJS package-export validation.
- Standard Version changelog and release commands.
- Checked-in contribution and security documents that currently require correction before they can be relied on.

## Evaluate the scaffold

### Prerequisites

- Node.js 24.12.0 for the current maintainer toolchain, matching [`.nvmrc`](.nvmrc)
- npm and Git

> [!WARNING]
> The manifest deliberately contains `<package-name>`, `<description>`, `<author-name>`, and `<username>` placeholders. The current NoDerivatives license does not permit distributing a modified version. Do not publish or redistribute a derived package without separate permission or a license change from the rights holder.

### 1. Clone for local evaluation

```bash
git clone https://github.com/montasim/npm-boilerplate.git my-package
cd my-package
nvm use
```

If you have permission to create and distribute a derivative, update at least these `package.json` fields:

- `name`, `description`, `author`, and `keywords`
- `repository.url`
- `license`, if the derivative project uses different terms

Also update the README name, import examples, badges, copyright holder, issue URLs, contribution guide, and security contact. A package name must be available and valid in the target npm registry before publishing.

### 2. Install and verify

```bash
npm install
npm run lint
npm run format
npm test
```

`npm test` first builds the package and then runs the Node test suite.

### 3. Inspect or privately replace the sample API

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

The following mechanics describe the configured tooling, not permission to publish a derivative. Obtain a compatible license or explicit authorization first.

1. Confirm you have the legal right to distribute the package and its adaptations.
2. Remove all placeholders and record the authorized license accurately.
3. Run lint, formatting, tests, and `npm pack --dry-run`.
4. Commit changes using Conventional Commit messages.
5. Run `npm run release` to update the version and `CHANGELOG.md`.
6. Review the generated commit and tag.
7. Authenticate with npm and publish only after verifying ownership, visibility, and package contents.

`prepublishOnly` rebuilds and reruns tests, but it does not replace manual review of credentials, registry destination, package name, license, or tarball contents.

## Status and limitations

- `npm-boilerplate` itself is a template and is not configured as an installable published library.
- Placeholder metadata makes the unmodified manifest invalid for a real release.
- The sample `slugify` is ASCII-oriented and is not a complete international transliteration solution.
- `randomInt` uses `Math.random()` and is not appropriate for cryptographic or security-sensitive use.
- The repository does not include browser or bundler integration tests.
- The CC BY-NC-ND license restricts commercial use and redistribution of adaptations; it is unusual for reusable software templates and must be reviewed before deriving or publishing another project.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) is copied from `http-status-lite`: it names the wrong repository, clone URL, project tree, API examples, and a fixed `23/23` test count. Do not follow it until it is rewritten for this repository.
- [`SECURITY.md`](SECURITY.md) asks reporters to email the maintainer but provides no address; the repository's enabled GitHub private vulnerability-reporting form is the usable route instead.

## Support, security, and contributing

Use [GitHub Issues](https://github.com/montasim/npm-boilerplate/issues) for reproducible, non-sensitive scaffold defects and proposals. The checked-in [contribution guide](CONTRIBUTING.md) is for another repository and must not be treated as authoritative.

The [security policy](SECURITY.md) correctly says not to disclose vulnerabilities publicly but omits the email address it tells reporters to use. Use the repository's enabled [private vulnerability-reporting form](https://github.com/montasim/npm-boilerplate/security/advisories/new) instead; do not include vulnerability details in a public issue.

Issue and pull-request templates are available in [`.github/`](.github). No code of conduct, support guide, or funding configuration is currently included.

## Funding

Optional support through [SupportKori](https://www.supportkori.com/montasim) helps maintain this template and its tooling. Reproducible reports, documentation fixes, and code contributions are equally appreciated.

## Author

Created and maintained by [Montasim](https://github.com/montasim). The license file itself still contains a `[Your Name]` copyright placeholder; confirm attribution with the maintainer before redistribution.

## License

This template is distributed under [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](LICENSE). Read the terms before copying or modifying it: the license permits non-commercial sharing with attribution but restricts distributing adaptations.
