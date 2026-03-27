# <package-name>

> <description>

[![npm version](https://badge.fury.io/js/<package-name>.svg)](https://www.npmjs.com/package/<package-name>)
[![License: CC-BY-NC-ND-4.0](https://img.shields.io/badge/License-CC--BY--NC--ND--4.0-blue.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Features

- 📦 **Zero dependencies**: Lightweight and fast
- 🔒 **Type-safe**: Full TypeScript support with type guards
- 🧪 **Well-tested**: Comprehensive test coverage
- 📝 **Well-documented**: Full JSDoc comments with examples
- 🌲 **Tree-shakeable**: Import only what you need
- 🔄 **Dual ESM/CJS**: Works in Node.js and modern browsers

## Installation

```bash
# npm
npm install <package-name>

# yarn
yarn add <package-name>

# pnpm
pnpm add <package-name>

# bun
bun add <package-name>
```

## Quick Start

```typescript
import { capitalize, truncate, slugify, clamp, randomInt, isArray, isObject } from '<package-name>';

// String utilities
capitalize('hello world'); // 'Hello world'
truncate('This is a very long string', 10); // 'This is a...'
slugify('Hello World!'); // 'hello-world'

// Number utilities
clamp(15, 0, 10); // 10
randomInt(1, 10); // Random integer between 1 and 10

// Type utilities
if (isArray(data)) {
    data.forEach((item) => console.log(item));
}

if (isObject(config)) {
    const key = Object.keys(config)[0];
}
```

## API Reference

### String Utilities

#### `capitalize(str)`

Capitalize the first letter of a string.

```typescript
capitalize('hello'); // 'Hello'
capitalize('HELLO'); // 'HELLO'
capitalize(''); // ''
```

**Parameters:**

- `str` (string): Input string

**Returns:** Capitalized string

#### `truncate(str, maxLength?)`

Truncate a string to a maximum length, adding ellipsis if truncated.

```typescript
truncate('Hello world', 5); // 'Hello...'
truncate('Hi', 10); // 'Hi'
truncate('Long text', 50); // 'Long text' (default maxLength: 50)
```

**Parameters:**

- `str` (string): Input string
- `maxLength` (number, optional): Maximum length (default: 50)

**Returns:** Truncated string with ellipsis if needed

#### `slugify(str)`

Convert a string to a URL-friendly slug.

```typescript
slugify('Hello World!'); // 'hello-world'
slugify('Foo & Bar'); // 'foo-bar'
slugify('  multiple   spaces  '); // 'multiple-spaces'
```

**Parameters:**

- `str` (string): Input string

**Returns:** URL-safe slug

### Number Utilities

#### `clamp(num, min, max)`

Clamp a number between min and max values.

```typescript
clamp(5, 0, 10); // 5
clamp(-5, 0, 10); // 0
clamp(15, 0, 10); // 10
```

**Parameters:**

- `num` (number): Input number
- `min` (number): Minimum value
- `max` (number): Maximum value

**Returns:** Clamped number

#### `randomInt(min, max)`

Generate a random integer between min and max (inclusive).

```typescript
const result = randomInt(1, 10); // Integer between 1 and 10
const dice = randomInt(1, 6); // Simulate dice roll
```

**Parameters:**

- `min` (number): Minimum value
- `max` (number): Maximum value

**Returns:** Random integer

### Type Utilities

#### `isArray(value)`

Type guard to check if a value is an array.

```typescript
const data: unknown = getData();

if (isArray(data)) {
    // TypeScript knows data is unknown[] here
    data.forEach((item) => console.log(item));
}
```

**Parameters:**

- `value` (unknown): Value to check

**Returns:** True if value is an array

#### `isObject(value)`

Type guard to check if a value is a plain object.

```typescript
const config: unknown = getConfig();

if (isObject(config)) {
    // TypeScript knows config is Record<string, unknown> here
    const key = Object.keys(config)[0];
}
```

**Parameters:**

- `value` (unknown): Value to check

**Returns:** True if value is a plain object (not null, not array)

## TypeScript Support

Full TypeScript support with type guards and type inference:

```typescript
import { isArray, isObject, capitalize } from '<package-name>';

function processData(data: unknown) {
    if (isArray(data)) {
        // TypeScript infers data as unknown[]
        return data.map((item) => String(item));
    }

    if (isObject(data)) {
        // TypeScript infers data as Record<string, unknown>
        return Object.keys(data);
    }

    return String(data);
}

// Type-safe string operations
const result: string = capitalize('hello');
```

### Type Guards

Type guards narrow the type of unknown values:

```typescript
function handleInput(input: unknown) {
    if (isArray(input)) {
        // input is now unknown[]
        input.forEach((item) => console.log(item));
    } else if (isObject(input)) {
        // input is now Record<string, unknown>
        console.log(Object.keys(input));
    }
}
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/<username>/<package-name>.git
cd <package-name>

# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build

# Watch mode for development
npm run dev
```

### Scripts

- `npm run build` - Build the package (ESM + CJS)
- `npm run dev` - Watch mode for development
- `npm test` - Run tests
- `npm run lint` - Check code style with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Check formatting with Prettier
- `npm run format:fix` - Fix formatting with Prettier
- `npm run commit` - Interactive commit with commitizen
- `npm run release` - Create a new release with standard-version

### Testing

The package uses Node.js built-in test runner. Tests are located in `test/` directory.

```bash
# Run all tests
npm test

# Run tests in watch mode (requires tsd or similar)
npm run test:watch
```

### Building

The package builds both ESM and CommonJS formats using tsup:

```bash
npm run build
```

Output files:

- `dist/index.js` - ESM format
- `dist/index.cjs` - CommonJS format
- `dist/index.d.ts` - TypeScript declarations

## Using This Template

This repository is set up as a template for creating TypeScript packages. Follow these steps to customize it for your own package:

### Step 1: Update package.json

Replace placeholders in `package.json`:

```json
{
    "name": "<package-name>", // Your package name
    "description": "<description>", // Your package description
    "author": "<author-name>", // Your name
    "repository": {
        "url": "https://github.com/<username>/<package-name>.git"
    }
}
```

### Step 2: Customize Source Code

Replace the utility functions in `src/index.ts` with your own implementation:

````typescript
/**
 * Your function description
 * @param param - Description
 * @returns Return value description
 * @example
 * ```typescript
 * yourFunction('example') // 'result'
 * ```
 */
export function yourFunction(param: string): string {
    // Your implementation
    return param;
}
````

### Step 3: Update Tests

Replace tests in `test/index.test.js` to test your functions:

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { yourFunction } from '<package-name>';

describe('yourFunction', () => {
    it('should do something', () => {
        assert.strictEqual(yourFunction('input'), 'expected output');
    });
});
```

### Step 4: Update README

Customize this README.md file:

1. Replace `<package-name>` with your package name
2. Replace `<description>` with your package description
3. Replace `<author-name>` with your name
4. Replace `<username>` with your GitHub username
5. Update the Features section with your package's features
6. Update the API Reference with your functions
7. Update examples to show your package usage

### Step 5: Update License

Update the license in `package.json` and `LICENSE` file:

```json
{
    "license": "MIT" // or your preferred license
}
```

### Step 6: Configure Git

```bash
# Initialize git if needed
git init

# Add remote repository
git remote add origin https://github.com/<username>/<package-name>.git

# Create initial commit
git add .
git commit -m "chore: initial commit"

# Push to GitHub
git push -u origin main
```

## Template Setup Checklist

Use this checklist to ensure you've completed all customization steps:

- [ ] Updated `package.json` placeholders (name, description, author, repository)
- [ ] Replaced utility functions in `src/index.ts` with your own
- [ ] Updated tests in `test/index.test.js`
- [ ] Customized README.md with your package information
- [ ] Updated license in `package.json` and `LICENSE` file
- [ ] Configured git remote and pushed to GitHub
- [ ] Published to npm (run `npm publish` when ready)
- [ ] Added GitHub Actions/CI (optional)
- [ ] Set up documentation website (optional)

## License

CC-BY-NC-ND-4.0 © <author-name>

See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with tests
4. Ensure tests pass (`npm test`)
5. Build the package (`npm run build`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Support

- Issues: https://github.com/<username>/<package-name>/issues
- Discussions: https://github.com/<username>/<package-name>/discussions

---

**Built with TypeScript, tested with Node.js**
