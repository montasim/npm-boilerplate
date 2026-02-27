/**
 * Link Factory
 * Single Responsibility: Creates clickable hyperlinks for terminal output.
 * Uses ANSI escape codes to create terminal-supported hyperlinks.
 */
export class LinkFactory {
    /**
     * Creates a clickable hyperlink string using ANSI escape codes.
     *
     * Note: Clickable links may not be supported by all terminal emulators.
     *
     * @param url - The target URL for the link
     * @param text - The display text for the link
     * @returns A formatted string containing the clickable hyperlink
     */
    createClickableLink(url: string, text: string): string {
        return `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`;
    }
}
