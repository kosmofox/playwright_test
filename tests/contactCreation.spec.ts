import { test, expect } from '@playwright/test';
import { SignInPage } from '../src/pages/SignInPage';
import { Dashboard } from '../src/pages/Dashboard';
import { Menu } from '../src/pages/Menu';
import { Contacts } from '../src/pages/Contacts';

test('Contact Creation - Validation', async ({ page }) => {
  const signInPage = new SignInPage(page);
  const contacts = new Contacts(page);
  const menu = new Menu(page);

  await signInPage.open();
  await signInPage.validSignin();
  await page.waitForTimeout(500);
  await menu.openContacts();
  await page.waitForTimeout(500);
  await contacts.createNewContact();
  await page.waitForTimeout(500);
  await contacts.addContact();
  await page.waitForTimeout(500);
  await contacts.errorMessage();
});

test('Contact Creation - Success', async ({ page }) => {
  const signInPage = new SignInPage(page);
  const contacts = new Contacts(page);
  const menu = new Menu(page);

  await signInPage.open();
  await signInPage.validSignin();
  await page.waitForTimeout(500);
  await menu.openContacts();
  await page.waitForTimeout(500);
  await contacts.createNewContact();
  await page.waitForTimeout(500);
  await contacts.addNewName('Test');
  await contacts.addContact();
  await page.waitForTimeout(4000);
  await contacts.successMassage();
});
