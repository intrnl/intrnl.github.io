import type { Plugin } from 'rollup';
import type { FilterPattern } from '@rollup/pluginutils';


interface PluginOpts {
	prefix?: string,
}

declare function plugin (opts?: PluginOpts): Plugin;

export = plugin;
