import { test } from '@playwright/test';
import { SignInPage } from '../src/pages/SignInPage';
import { Dashboard } from '../src/pages/Dashboard';
import { TestCredentials } from '../test-data/credentials';

test.describe('Sign In', () => {
  let signInPage: SignInPage;
  let dashboard: Dashboard;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    dashboard = new Dashboard(page);
    await signInPage.open();
  });

  test('should successfully sign in with valid credentials', async () => {
    await signInPage.signIn(TestCredentials.valid.email, TestCredentials.valid.password);
    await dashboard.waitForLoad();
  });

  test('should show error with incorrect email', async ({ page }) => {
    await signInPage.signIn(
      TestCredentials.invalidEmail.email,
      TestCredentials.invalidEmail.password
    );
    await page.waitForTimeout(1000);
    await signInPage.expectErrorNotification();
  });

  test('should show error with incorrect password', async () => {
    await signInPage.signIn(
      TestCredentials.invalidPassword.email,
      TestCredentials.invalidPassword.password
    );
    await signInPage.expectErrorNotification();
  });
});
