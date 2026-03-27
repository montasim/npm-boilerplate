/**
 * Capitalize the first letter of a string
 * @param str - Input string
 * @returns Capitalized string
 * @example
 * ```typescript
 * capitalize('hello') // 'Hello'
 * capitalize('HELLO') // 'HELLO'
 * ```
 */
export function capitalize(str: string): string {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncate a string to a maximum length
 * @param str - Input string
 * @param maxLength - Maximum length (default: 50)
 * @returns Truncated string with ellipsis if needed
 * @example
 * ```typescript
 * truncate('Hello world', 5) // 'Hello...'
 * truncate('Hi', 10) // 'Hi'
 * ```
 */
export function truncate(str: string, maxLength: number = 50): string {
    if (!str || typeof str !== 'string') return '';
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

/**
 * Convert a string to a URL-friendly slug
 * @param str - Input string
 * @returns URL-safe slug
 * @example
 * ```typescript
 * slugify('Hello World!') // 'hello-world'
 * slugify('Foo & Bar') // 'foo-bar'
 * ```
 */
export function slugify(str: string): string {
    if (!str || typeof str !== 'string') return '';
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Clamp a number between min and max values
 * @param num - Input number
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped number
 * @example
 * ```typescript
 * clamp(5, 0, 10) // 5
 * clamp(-5, 0, 10) // 0
 * clamp(15, 0, 10) // 10
 * ```
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * Generate a random integer between min and max (inclusive)
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random integer
 * @example
 * ```typescript
 * const result = randomInt(1, 10); // Integer between 1 and 10
 * ```
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Type guard to check if a value is an array
 * @param value - Value to check
 * @returns True if value is an array
 * @example
 * ```typescript
 * if (isArray(data)) {
 *   data.forEach(item => console.log(item));
 * }
 * ```
 */
export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}

/**
 * Type guard to check if a value is a plain object
 * @param value - Value to check
 * @returns True if value is a plain object
 * @example
 * ```typescript
 * if (isObject(config)) {
 *   const key = Object.keys(config)[0];
 * }
 * ```
 */
export function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Utility functions collection
 * @description Provides common utility functions for string manipulation, number operations, and type checking
 */
export const utils = Object.freeze({
    capitalize,
    truncate,
    slugify,
    clamp,
    randomInt,
    isArray,
    isObject,
});
