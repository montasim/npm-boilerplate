const mockChalk = {
    red: jest.fn((x: unknown) => x),
    yellow: {
        bold: jest.fn((x: unknown) => x),
    } as { bold: jest.Mock },
    bold: jest.fn((x: unknown) => x),
};

jest.mock('chalk', () => ({
    __esModule: true,
    default: mockChalk,
}));

import { ConsoleRenderer } from '../../src/modules/console.renderer';
import { AsciiArtGenerator } from '../../src/modules/ascii-art.generator';
import { LinkFactory } from '../../src/modules/link.factory';
import { defaultConfig } from '../../src/config/cli.config';

describe('ConsoleRenderer', () => {
    let renderer: ConsoleRenderer;
    let artGenerator: AsciiArtGenerator;
    let linkFactory: LinkFactory;
    let consoleInfoSpy: jest.SpyInstance;

    beforeEach(() => {
        artGenerator = new AsciiArtGenerator();
        linkFactory = new LinkFactory();
        renderer = new ConsoleRenderer(artGenerator, linkFactory);
        consoleInfoSpy = jest
            .spyOn(console, 'info')
            .mockImplementation(() => {});
    });

    afterEach(() => {
        consoleInfoSpy.mockRestore();
    });

    describe('constructor', () => {
        it('should create instance with injected dependencies', () => {
            expect(renderer).toBeInstanceOf(ConsoleRenderer);
        });

        it('should store injected dependencies', () => {
            const testRenderer = new ConsoleRenderer(artGenerator, linkFactory);
            expect(testRenderer).toBeInstanceOf(ConsoleRenderer);
        });
    });

    describe('render', () => {
        it('should call console.info when rendering', () => {
            renderer.render(defaultConfig);
            expect(consoleInfoSpy).toHaveBeenCalled();
        });

        it('should use art generator to create ASCII art', () => {
            const artSpy = jest.spyOn(artGenerator, 'generate');
            renderer.render(defaultConfig);

            expect(artSpy).toHaveBeenCalledWith(defaultConfig);
        });

        it('should use link factory to create clickable link', () => {
            const linkSpy = jest.spyOn(linkFactory, 'createClickableLink');
            renderer.render(defaultConfig);

            expect(linkSpy).toHaveBeenCalledWith(
                defaultConfig.githubUrl,
                defaultConfig.author
            );
        });

        it('should render without errors for valid config', () => {
            expect(() => renderer.render(defaultConfig)).not.toThrow();
        });

        it('should handle custom config', () => {
            const customConfig = {
                packageName: 'custom-package',
                author: 'Custom Author',
                githubUrl: 'https://github.com/custom/custom',
                font: 'Standard',
            };

            expect(() => renderer.render(customConfig)).not.toThrow();
            expect(consoleInfoSpy).toHaveBeenCalled();
        });

        it('should handle empty strings in config gracefully', () => {
            const emptyConfig = {
                packageName: '',
                author: '',
                githubUrl: '',
                font: '',
            };

            expect(() => renderer.render(emptyConfig)).not.toThrow();
        });

        it('should call console.info exactly once per render', () => {
            renderer.render(defaultConfig);
            expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
        });

        it('should handle multiple renders independently', () => {
            renderer.render(defaultConfig);
            renderer.render(defaultConfig);

            expect(consoleInfoSpy).toHaveBeenCalledTimes(2);
        });
    });

    describe('integration', () => {
        it('should integrate with ascii art generator and link factory', () => {
            const mockArtGenerator = {
                generate: jest.fn().mockReturnValue('TEST ART'),
            } as unknown as AsciiArtGenerator;

            const mockLinkFactory = {
                createClickableLink: jest.fn().mockReturnValue('TEST LINK'),
            } as unknown as LinkFactory;

            const testRenderer = new ConsoleRenderer(
                mockArtGenerator,
                mockLinkFactory
            );
            testRenderer.render(defaultConfig);

            expect(mockArtGenerator.generate).toHaveBeenCalled();
            expect(mockLinkFactory.createClickableLink).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalled();
        });
    });
});
