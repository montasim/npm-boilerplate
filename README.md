# npm-boilerplate

<!-- repository summary badges start -->
<div>
    <img alt="NPM Version" src="https://badgen.net/npm/v/npm-boilerplate?label=version&labelColor=EB008B&color=00B8B5">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/npm-boilerplate?label=downloads&labelColor=EB008B&color=00B8B5">
    <img alt="NPM License" src="https://badgen.net/npm/license/npm-boilerplate?label=license&labelColor=EB008B&color=00B8B5">
</div>
<!-- repository summary badges end -->

A modern, production-ready npm package boilerplate following best practices for Clean Code, SOLID principles, and professional package development.

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [FAQs](#faqs)

---

## Key Features

1. **Modern TypeScript Setup** - Strict TypeScript configuration with modern ES modules support
2. **Dual Package Format** - Supports both ESM and CommonJS for maximum compatibility
3. **SOLID Architecture** - Clean, modular code structure following SOLID principles
4. **Comprehensive Testing** - Jest with 80% coverage threshold and CI/CD integration
5. **Code Quality Tools** - ESLint, Prettier, and Husky pre-commit hooks
6. **Semantic Versioning** - Automated version management with standard-version
7. **CLI Support** - Built-in CLI with configurable ASCII art output
8. **Complete Documentation** - CONTRIBUTING guide, Code of Conduct, and GitHub templates

---

## Installation

To install the package, run the following command:

```bash
npm install npm-boilerplate
```

or

```bash
yarn add npm-boilerplate
```

or

```bash
pnpm add npm-boilerplate
```

or

```bash
bun add npm-boilerplate
```

---

## Usage

### JavaScript CommonJS Example

```javascript
const welcome = require('npm-boilerplate');

welcome();
// Output: Welcome to the npm boilerplate.
```

### JavaScript ESM Example

```javascript
import welcome from 'npm-boilerplate';

welcome();
// Output: Welcome to the npm boilerplate.
```

### TypeScript ESM Example

```typescript
import welcome from 'npm-boilerplate';

welcome();
// Output: Welcome to the npm boilerplate.
```

### CLI Usage

After installing, you can run the CLI command:

```bash
npx npm-boilerplate
```

This will display an ASCII art banner with package information.

---

## License

[![by-nc-nd/4.0](https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)**.

### You are free to:

- **Share** — Copy and redistribute the material in any medium or format.

### Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.
- **NoDerivatives** — If you remix, transform, or build upon the material, you may not distribute the modified material.

For more details, please visit the [Creative Commons License Page](https://creativecommons.org/licenses/by-nc-nd/4.0/).

---

## Acknowledgments

Special thanks to the following resources:

1. **TypeScript** - For bringing strong typing to JavaScript
2. **Jest** - For the excellent testing framework
3. **ESLint & Prettier** - For code quality and formatting
4. **tsup** - For the fast TypeScript bundler
5. **standard-version** - For automated version management
6. **figlet** - For ASCII art generation
7. **chalk** - For terminal styling

---

## FAQs

### 1. **Why should I use this boilerplate?**

This boilerplate follows npm best practices, Clean Code principles, and SOLID principles. It includes comprehensive tooling for testing, linting, formatting, and CI/CD automation.

### 2. **What is the license?**

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0). See the [License](#license) section for details.

### 3. **How do I contribute?**

Please read our [Contributing Guidelines](CONTRIBUTING.md) for information on how to contribute to this project.

### 4. **How do I report a bug or request a feature?**

Please use the [GitHub Issues](https://github.com/montasim/npm-boilerplate/issues) page to report bugs or request new features.

### 5. **How do I uninstall the package?**

You can remove the package by running:

```bash
npm uninstall npm-boilerplate
```

or

```bash
yarn remove npm-boilerplate
```

or

```bash
pnpm remove npm-boilerplate
```

or

```bash
bun remove npm-boilerplate
```

---

## Author

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/95298623?v=4" width="100px" alt="Moon">
      <a href="https://github.com/montasim">
        <br>
          Ｍ♢ＮＴΛＳＩＭ
        <br>
      </a>
    </td>
  </tr>
</table>
