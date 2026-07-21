import pluginImages from './eleventy.config.images.js';
import pluginWebc from '@11ty/eleventy-plugin-webc';
import { EleventyRenderPlugin } from "@11ty/eleventy";

import { gameShortcode } from './src/shortcodes/game.js';
import { seasonRecord } from './src/shortcodes/season-record.js';


export default function (eleventyConfig) {
	eleventyConfig.setServerOptions({
		port: 8888,
	});

	eleventyConfig.addPassthroughCopy({
        './public/': '/',
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: '<!-- excerpt -->',
    });

    // App plugins
    eleventyConfig.addPlugin(pluginImages);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginWebc, {
        components: "./src/_components/**/*.webc",
    });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addShortcode("game", gameShortcode);
    eleventyConfig.addShortcode("seasonRecord", seasonRecord);

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid",
        ],
        dir: {
            input: 'src',
            output: '_site'
        }
    };
}
