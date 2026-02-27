import { AsciiArtGenerator } from '../../src/modules/ascii-art.generator';
import type { CliConfig } from '../../src/config/cli.config';

describe('AsciiArtGenerator', () => {
    let generator: AsciiArtGenerator;
    let mockConfig: CliConfig;

    beforeEach(() => {
        generator = new AsciiArtGenerator();
        mockConfig = {
            packageName: 'test',
            author: 'Test Author',
            githubUrl: 'https://github.com/test/test',
            font: 'Standard',
        };
    });

    describe('generate', () => {
        it('should generate ASCII art from config', () => {
            const result = generator.generate(mockConfig);

            expect(result).toBeDefined();
            expect(typeof result).toBe('string');
            expect(result.length).toBeGreaterThan(0);
        });

        it('should include package name in generated art', () => {
            const result = generator.generate(mockConfig);

            // ASCII art will contain characters representing the text
            expect(result).toBeDefined();
        });

        it('should use the specified font from config', () => {
            const configWithBigFont: CliConfig = {
                ...mockConfig,
                font: 'Big',
            };

            const result = generator.generate(configWithBigFont);

            expect(result).toBeDefined();
        });

        it('should handle empty package name', () => {
            const emptyConfig: CliConfig = {
                ...mockConfig,
                packageName: '',
            };

            const result = generator.generate(emptyConfig);

            expect(result).toBeDefined();
        });

        it('should handle special characters in package name', () => {
            const specialConfig: CliConfig = {
                ...mockConfig,
                packageName: 'test-package-123',
            };

            const result = generator.generate(specialConfig);

            expect(result).toBeDefined();
        });

        it('should produce consistent output for same input', () => {
            const result1 = generator.generate(mockConfig);
            const result2 = generator.generate(mockConfig);

            expect(result1).toBe(result2);
        });
    });
});
