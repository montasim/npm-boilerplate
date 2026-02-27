import chalk from 'chalk';
import type { CliConfig } from '../config/cli.config';
import { AsciiArtGenerator } from './ascii-art.generator';
import { LinkFactory } from './link.factory';

/**
 * Console Renderer
 * Single Responsibility: Renders formatted output to the console.
 * Dependency Inversion: Depends on abstractions (generators, factories) not concretions.
 */
export class ConsoleRenderer {
    /**
     * Creates a new ConsoleRenderer instance.
     *
     * @param artGenerator - The ASCII art generator to use for creating text art
     * @param linkFactory - The link factory to use for creating clickable links
     */
    constructor(
        private readonly artGenerator: AsciiArtGenerator,
        private readonly linkFactory: LinkFactory
    ) {}

    /**
     * Renders the welcome message with ASCII art and clickable link.
     *
     * @param config - The CLI configuration containing display settings
     * @returns {void}
     */
    render(config: CliConfig): void {
        const art = this.artGenerator.generate(config);
        const link = this.linkFactory.createClickableLink(
            config.githubUrl,
            config.author
        );
        const signature = chalk.yellow.bold(' by - ') + chalk.bold(link);

        console.info(chalk.red(art + signature));
    }
}
