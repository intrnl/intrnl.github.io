import path from 'path';
import { builtinModules } from 'module';

import pkg from './package.json';

import sapper from 'sapper/config/rollup';
import { markup as preprocessMarkup } from '@minna-ui/preprocess';

import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import esbuild from 'rollup-plugin-esbuild';
import { terser } from 'rollup-plugin-terser';
import markdown from 'rollup-plugin-markdown';
import globbed from 'rollup-plugin-glob-imports';


let mode = process.env.NODE_ENV;
let dev = mode === 'development';

/** @type {Record<string, import('rollup').RollupOptions>} */
let config = {
	client: {
		input: sapper.client.input(),
		output: sapper.client.output(),
		preserveEntrySignatures: false,
		manualChunks: {
			'npm.svelte': ['svelte/internal', 'svelte/store'],
    },
		plugins: [
			alias({
				entries: {
					'@': path.join(__dirname, './src/'),
				},
			}),
			resolve({
				browser: true,
				dedupe: ['svelte'],
				extensions: ['.svelte', '.mjs', '.js'],
			}),
			commonjs({
				include: ['node_modules/**'],
			}),
			svelte({
				dev,
				generate: 'dom',
				hydratable: true,
				emitCss: true,
				preprocess: {
					markup: preprocessMarkup(),
				},
			}),
			esbuild({
				watch: dev,
				target: 'es2018',
				include: ['*.svelte', '*.mjs', '*.js'],
				exclude: [],
				define: {
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode),
				},
			}),
			markdown(),
			globbed(),
			!dev && terser(),
		],
	},
	server: {
		input: sapper.server.input(),
		output: {
			...sapper.server.output(),
			exports: 'auto',
		},
		preserveEntrySignatures: 'strict',
		external: [
			...Object.keys(pkg.dependencies || {}),
			...builtinModules,
		],
		plugins: [
			alias({
				entries: {
					'@': path.join(__dirname, './src/'),
				},
			}),
			resolve({
				browser: false,
				dedupe: ['svelte'],
				extensions: ['.svelte', '.mjs', '.js'],
			}),
			commonjs({
				include: ['node_modules/**']
			}),
			svelte({
				dev,
				generate: 'ssr',
				hydratable: true,
				css: false,
				preprocess: {
					markup: preprocessMarkup(),
				},
			}),
			esbuild({
				watch: dev,
				target: 'es2018',
				include: ['*.svelte', '*.mjs', '*.js'],
				exclude: [],
				define: {
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode),
				},
			}),
			markdown(),
			globbed(),
			!dev && terser(),
		],
	},
	serviceworker: {
		input: sapper.serviceworker.input(),
		output: sapper.serviceworker.output(),
		plugins: [
			alias({
				entries: {
					'@': path.join(__dirname, './src/'),
				},
			}),
			resolve({
				browser: true,
			}),
			commonjs({
				include: ['node_modules/**'],
			}),
			esbuild({
				watch: dev,
				target: 'es2018',
				include: ['*.mjs', '*.js'],
				exclude: [],
				define: {
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode),
				},
			}),
			!dev && terser(),
		],
	},
};

export default config;
