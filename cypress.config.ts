import { defineConfig } from 'cypress';
const { GenerateCtrfReport } = require('cypress-ctrf-json-report')
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, _config) {
      // implement node event listeners here
      GenerateCtrfReport({
        on,
      })
    },
  },
});
