import type { Plugin } from 'rollup';
import type { FilterPattern } from '@rollup/pluginutils';


interface PluginOpts {
	include?: FilterPattern,
	exclude?: FilterPattern,
	extensions?: string[],
}

declare function plugin (opts?: PluginOpts): Plugin;

export = plugin;
