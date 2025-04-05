import { test, expect } from '@playwright/test';
import { SignInPage } from '../src/pages/SignInPage';
import { Dashboard } from '../src/pages/Dashboard';

test('positive login/password test', async ({ page }) => {
  const signInPage = new SignInPage(page);
  const dashboard = new Dashboard(page);

  await signInPage.open();
  await signInPage.fillEmailField('joachim+453459@systima.no');
  await signInPage.fillPasswordField('123456789');
  await signInPage.clickSignInButton();
  await dashboard.load();
});

test('incorrect sign in login test', async ({ page }) => {
  const signInPage = new SignInPage(page);

  await signInPage.open();
  await signInPage.fillEmailField('joachim+45345@systima.no');
  await signInPage.fillPasswordField('123456789');
  await signInPage.clickSignInButton();
  await page.waitForTimeout(1000);
  await signInPage.showErrorNotification();
});

test('incorrect sign in password test', async ({ page }) => {
  const signInPage = new SignInPage(page);

  await signInPage.open();
  await signInPage.fillEmailField('joachim+453459@systima.no');
  await signInPage.fillPasswordField('12345678');
  await signInPage.clickSignInButton();
  await page.waitForTimeout(1000);
  await signInPage.showErrorNotification();
});
