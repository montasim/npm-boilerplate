import figlet from 'figlet';
import type { CliConfig } from '../config/cli.config';

/**
 * ASCII Art Generator
 * Single Responsibility: Generates ASCII art from text using figlet.
 */
export class AsciiArtGenerator {
    /**
     * Generates ASCII art for the given configuration.
     *
     * @param config - The CLI configuration containing text and font settings
     * @returns The generated ASCII art string
     */
    generate(config: CliConfig): string {
        return figlet.textSync(config.packageName, {
            font: config.font,
            horizontalLayout: 'full',
            verticalLayout: 'full',
        });
    }
}
