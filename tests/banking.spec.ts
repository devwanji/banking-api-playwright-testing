import { test, expect } from '@playwright/test';

test('user can log in to the banking application', async ({ page }) => {
  await page.goto('http://localhost:3000', {
    waitUntil: 'domcontentloaded',
    timeout: 120000,
  });

  await page.getByLabel(/username/i).fill(process.env.BANKING_USERNAME || '');
  await page.getByLabel(/password/i).fill(process.env.BANKING_PASSWORD || '');

  await page.getByRole('button', { name: /sign in|login/i }).click();

  await expect(
    page.getByRole('button', { name: 'Logout' })
  ).toBeVisible();

  await expect(page.getByText('Account Balance')).toBeVisible();
});