import { defineConfig } from '@playwright/test';
import { withPostman } from 'postman-playwright';

export default withPostman(defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on',
    headless: true,
  },
}));