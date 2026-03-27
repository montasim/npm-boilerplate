import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
    capitalize,
    truncate,
    slugify,
    clamp,
    randomInt,
    isArray,
    isObject,
    utils,
} from '../dist/index.js';

describe('String Utilities', () => {
    describe('capitalize', () => {
        it('should capitalize first letter', () => {
            assert.strictEqual(capitalize('hello'), 'Hello');
            assert.strictEqual(capitalize('world'), 'World');
        });

        it('should handle empty string', () => {
            assert.strictEqual(capitalize(''), '');
        });

        it('should handle single character', () => {
            assert.strictEqual(capitalize('a'), 'A');
        });

        it('should not capitalize already uppercase strings', () => {
            assert.strictEqual(capitalize('HELLO'), 'HELLO');
        });
    });

    describe('truncate', () => {
        it('should truncate strings exceeding max length', () => {
            assert.strictEqual(truncate('Hello world', 5), 'Hello...');
        });

        it('should not truncate strings within max length', () => {
            assert.strictEqual(truncate('Hi', 10), 'Hi');
        });

        it('should handle empty string', () => {
            assert.strictEqual(truncate('', 10), '');
        });

        it('should use default max length of 50', () => {
            const longStr = 'a'.repeat(100);
            const result = truncate(longStr);
            assert.strictEqual(result.length, 53); // 50 + '...'
        });
    });

    describe('slugify', () => {
        it('should convert to lowercase and replace spaces', () => {
            assert.strictEqual(slugify('Hello World'), 'hello-world');
        });

        it('should remove special characters', () => {
            assert.strictEqual(slugify('Foo & Bar!'), 'foo-bar');
        });

        it('should handle multiple spaces', () => {
            assert.strictEqual(slugify('foo   bar'), 'foo-bar');
        });

        it('should handle empty string', () => {
            assert.strictEqual(slugify(''), '');
        });
    });
});

describe('Number Utilities', () => {
    describe('clamp', () => {
        it('should return number within range', () => {
            assert.strictEqual(clamp(5, 0, 10), 5);
        });

        it('should clamp below minimum', () => {
            assert.strictEqual(clamp(-5, 0, 10), 0);
        });

        it('should clamp above maximum', () => {
            assert.strictEqual(clamp(15, 0, 10), 10);
        });

        it('should handle boundary values', () => {
            assert.strictEqual(clamp(0, 0, 10), 0);
            assert.strictEqual(clamp(10, 0, 10), 10);
        });
    });

    describe('randomInt', () => {
        it('should generate integer within range', () => {
            const result = randomInt(1, 10);
            assert.strictEqual(result >= 1 && result <= 10, true);
        });

        it('should handle same min and max', () => {
            assert.strictEqual(randomInt(5, 5), 5);
        });

        it('should return integer', () => {
            const result = randomInt(1, 100);
            assert.strictEqual(Number.isInteger(result), true);
        });
    });
});

describe('Type Utilities', () => {
    describe('isArray', () => {
        it('should return true for arrays', () => {
            assert.strictEqual(isArray([1, 2, 3]), true);
            assert.strictEqual(isArray([]), true);
        });

        it('should return false for non-arrays', () => {
            assert.strictEqual(isArray({}), false);
            assert.strictEqual(isArray('string'), false);
            assert.strictEqual(isArray(123), false);
            assert.strictEqual(isArray(null), false);
        });
    });

    describe('isObject', () => {
        it('should return true for plain objects', () => {
            assert.strictEqual(isObject({}), true);
            assert.strictEqual(isObject({ foo: 'bar' }), true);
        });

        it('should return false for arrays', () => {
            assert.strictEqual(isObject([1, 2, 3]), false);
        });

        it('should return false for primitives', () => {
            assert.strictEqual(isObject('string'), false);
            assert.strictEqual(isObject(123), false);
            assert.strictEqual(isObject(null), false);
        });
    });
});

describe('Utils Export Object', () => {
    it('should export all utility functions', () => {
        assert.strictEqual(typeof utils.capitalize, 'function');
        assert.strictEqual(typeof utils.truncate, 'function');
        assert.strictEqual(typeof utils.slugify, 'function');
        assert.strictEqual(typeof utils.clamp, 'function');
        assert.strictEqual(typeof utils.randomInt, 'function');
        assert.strictEqual(typeof utils.isArray, 'function');
        assert.strictEqual(typeof utils.isObject, 'function');
    });

    it('should be frozen (immutable)', () => {
        assert.strictEqual(Object.isFrozen(utils), true);
    });
});
