import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage matches baseline', async ({ page }) => {
    await page.goto('/');
    
    // Give time for any fonts or initial animations to settle
    await page.waitForTimeout(500); 

    // Take full page screenshot and compare
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
  });

  // We can add more tests here for other pages, e.g., tags, specific long-form articles
  test('tags page matches baseline', async ({ page }) => {
    // If a tags page exists:
    // await page.goto('/tags');
    // await page.waitForTimeout(500);
    // await expect(page).toHaveScreenshot('tags.png', { fullPage: true });
  });
});
