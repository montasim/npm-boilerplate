#!/usr/bin/env node

/**
 * CLI Entry Point for npm-boilerplate
 *
 * This script demonstrates SOLID principles with a modular architecture:
 * - Single Responsibility: Each module has one purpose
 * - Open/Closed: Extensible through configuration
 * - Dependency Inversion: Uses injected dependencies
 */

import { defaultConfig } from '../dist/config/cli.config.js';
import { AsciiArtGenerator } from '../dist/modules/ascii-art.generator.js';
import { LinkFactory } from '../dist/modules/link.factory.js';
import { ConsoleRenderer } from '../dist/modules/console.renderer.js';

// Create dependencies following Dependency Injection pattern
const artGenerator = new AsciiArtGenerator();
const linkFactory = new LinkFactory();

// Create renderer with injected dependencies
const renderer = new ConsoleRenderer(artGenerator, linkFactory);

// Render the welcome message
renderer.render(defaultConfig);
