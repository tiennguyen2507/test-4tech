import { resolve } from 'path';
import { UserConfig, ConfigEnv } from 'vite';
import { createVitePlugins } from './config/vite/plugin';
import { VITE_PORT } from './config/constant';
import proxy from './config/vite/proxy';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(command, mode);
  return {
    base: '/',
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        { find: /^~/, replacement: resolve(__dirname, '') },
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },

    // plugins
    plugins: createVitePlugins(isBuild),

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/variables.scss';`,
        },
      },
    },

    // server
    server: {
      hmr: { overlay: false }, // Disable or configure HMR connections Set server.hmr.overlay to false to disable the server error masking layer
      // Service configuration
      port: VITE_PORT, // Type: number specifies the server port;
      open: false, // Type: boolean | string Automatically open the application in the browser when the server starts;
      cors: false, // Type: boolean | CorsOptions Configure CORS for the development server. Enabled by default and allows any origin
      host: '0.0.0.0', // IP configuration, support boot from IP
      proxy,
    },

    // build
    build: {
      outDir: 'dist',
      assetsDir: 'static',
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: false,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      sourcemap: true,
    },
  };
};
