import { defaultConfig } from '../../src/config/cli.config';
import type { CliConfig } from '../../src/config/cli.config';

describe('CliConfig', () => {
    describe('defaultConfig', () => {
        it('should have all required properties', () => {
            expect(defaultConfig).toHaveProperty('packageName');
            expect(defaultConfig).toHaveProperty('author');
            expect(defaultConfig).toHaveProperty('githubUrl');
            expect(defaultConfig).toHaveProperty('font');
        });

        it('should have correct default values', () => {
            expect(defaultConfig.packageName).toBe('npm-boilerplate');
            expect(defaultConfig.author).toBe('Montasim');
            expect(defaultConfig.githubUrl).toBe(
                'https://github.com/montasim/npm-boilerplate'
            );
            expect(defaultConfig.font).toBe('Big');
        });

        it('should have valid URL format', () => {
            expect(defaultConfig.githubUrl).toMatch(/^https?:\/\/.+/);
        });

        it('should have non-empty string values', () => {
            expect(defaultConfig.packageName).toBeTruthy();
            expect(defaultConfig.author).toBeTruthy();
            expect(defaultConfig.githubUrl).toBeTruthy();
            expect(defaultConfig.font).toBeTruthy();
        });
    });

    describe('CliConfig interface', () => {
        it('should accept a valid configuration object', () => {
            const config: CliConfig = {
                packageName: 'test-package',
                author: 'Test Author',
                githubUrl: 'https://github.com/test/test',
                font: 'Standard',
            };

            expect(config.packageName).toBe('test-package');
            expect(config.author).toBe('Test Author');
            expect(config.githubUrl).toBe('https://github.com/test/test');
            expect(config.font).toBe('Standard');
        });
    });
});
