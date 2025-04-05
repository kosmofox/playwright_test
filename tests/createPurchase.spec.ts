import { test, expect } from '@playwright/test';
import { SignInPage } from '../src/pages/SignInPage';
import { Dashboard } from '../src/pages/Dashboard';
import { Menu } from '../src/pages/Menu';
import { Purchase } from '../src/pages/Purchase';

test('Create Purchase Success', async ({ page }) => {
  const signInPage = new SignInPage(page);
  const menu = new Menu(page);
  const purchase = new Purchase(page);

  await signInPage.open();
  await signInPage.validSignin();
  await page.waitForTimeout(500);
  await menu.openMenu();
  await page.waitForTimeout(500);
  await menu.openDropdownLink();
  await page.waitForTimeout(500);
  await purchase.clickContactsSelect();
  await page.waitForTimeout(500);
  await purchase.clickContactsOption();
  await purchase.fillAmount('100');
  await purchase.fillInvoiceDate();
  await purchase.fillInvoiceDueDate();
  await purchase.accountSelect('1000 Utvikling, ervervet');
  await purchase.submitForm();
  await page.waitForTimeout(3000);
  await purchase.successMessage();
});

test('Duplicate Invoice Number Handling', async ({ page }) => {
  const signInPage = new SignInPage(page);
  const menu = new Menu(page);
  const purchase = new Purchase(page);

  await signInPage.open();
  await signInPage.validSignin();
  await page.waitForTimeout(500);
  await menu.openMenu();
  await page.waitForTimeout(500);
  await menu.openDropdownLink();
  await page.waitForTimeout(500);
  await purchase.clickContactsSelect();
  await page.waitForTimeout(500);
  await purchase.clickContactsOption();
  await purchase.fillAmount('100');
  await purchase.fillInvoiceDate();
  await purchase.fillInvoiceDueDate();
  await purchase.fillInvoiceNumber('1');
  await purchase.accountSelect('1000 Utvikling, ervervet');
  await purchase.submitForm();
  await page.waitForTimeout(3000);
  await purchase.errorMessage();
});
