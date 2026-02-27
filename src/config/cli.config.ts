/**
 * Configuration interface for CLI display options.
 * Follows Open/Closed Principle - extensible through configuration.
 */
export interface CliConfig {
    /** The package name to display in ASCII art */
    packageName: string;
    /** The author name to display with the link */
    author: string;
    /** The GitHub repository URL */
    githubUrl: string;
    /** The figlet font to use for ASCII art generation */
    font: string;
}

/**
 * Default CLI configuration for the npm-boilerplate package.
 * This can be extended or overridden for different use cases.
 */
export const defaultConfig: CliConfig = {
    packageName: 'npm-boilerplate',
    author: 'Montasim',
    githubUrl: 'https://github.com/montasim/npm-boilerplate',
    font: 'Big',
};
