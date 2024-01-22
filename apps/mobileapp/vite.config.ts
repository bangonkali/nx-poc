/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';
import { ssr } from 'vite-plugin-ssr/plugin'

const rootDir = process.cwd(); // D:/Projects/poc2/apps/poc-electron-forge-embed

export default defineConfig({
  root: path.join(rootDir, '../poc-react-app-alpha'),
  cacheDir: path.join(
    rootDir,
    '../poc-react-app-alpha/node_modules/.vite/apps/poc-react-app-alpha'
  ),
  base: '/reactapp/',
  plugins: [
    react(),
    nxViteTsPaths(),
    ssr({
      baseAssets: 'file:///android_asset/'
    })],
  build: {
    outDir: path.join(rootDir, 'assets/reactapp'),
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
