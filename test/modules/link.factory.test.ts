import { LinkFactory } from '../../src/modules/link.factory';

describe('LinkFactory', () => {
    let factory: LinkFactory;

    beforeEach(() => {
        factory = new LinkFactory();
    });

    describe('createClickableLink', () => {
        it('should create a clickable link with valid URL and text', () => {
            const url = 'https://github.com/test/test';
            const text = 'Test Link';
            const result = factory.createClickableLink(url, text);

            expect(result).toBeDefined();
            expect(typeof result).toBe('string');
            expect(result).toContain(url);
            expect(result).toContain(text);
        });

        it('should include ANSI escape codes for hyperlink', () => {
            const url = 'https://github.com/test/test';
            const text = 'Test Link';
            const result = factory.createClickableLink(url, text);

            // ANSI escape sequence for hyperlinks: \x1b]8;;url\x07text\x1b]8;;\x07
            expect(result).toContain('\x1b]8;;');
            expect(result).toContain('\x07');
        });

        it('should handle empty URL', () => {
            const url = '';
            const text = 'Test Link';
            const result = factory.createClickableLink(url, text);

            expect(result).toBeDefined();
        });

        it('should handle empty text', () => {
            const url = 'https://github.com/test/test';
            const text = '';
            const result = factory.createClickableLink(url, text);

            expect(result).toBeDefined();
        });

        it('should handle special characters in URL', () => {
            const url = 'https://github.com/test/test?query=value&foo=bar';
            const text = 'Test Link';
            const result = factory.createClickableLink(url, text);

            expect(result).toBeDefined();
            expect(result).toContain(url);
        });

        it('should handle special characters in text', () => {
            const url = 'https://github.com/test/test';
            const text = 'Test Link with spaces & special chars!';
            const result = factory.createClickableLink(url, text);

            expect(result).toBeDefined();
            expect(result).toContain(text);
        });

        it('should produce consistent output for same input', () => {
            const url = 'https://github.com/test/test';
            const text = 'Test Link';
            const result1 = factory.createClickableLink(url, text);
            const result2 = factory.createClickableLink(url, text);

            expect(result1).toBe(result2);
        });
    });
});
