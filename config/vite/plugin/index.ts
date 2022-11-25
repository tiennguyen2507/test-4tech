import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { resolve } from 'path';
import { autoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { configMockPlugin } from './mock';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue
    vue(),
    vueI18n({ include: resolve(__dirname, './src/i18n/**'), runtimeOnly: false }),
    // Automatically import components on demand
    autoRegistryComponents(),
    // Automatically import dependencies as needed
    AutoImportDeps(),
  ];

  // rollup-plugin-gzip
  isBuild && vitePlugins.push(configCompressPlugin());

  // vite-plugin-mock
  // #SETUP_MOCK: configMockPlugin(isBuild)
  vitePlugins.push(configMockPlugin(true));

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig());

  return vitePlugins;
}
