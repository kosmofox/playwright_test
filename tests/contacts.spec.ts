import { test } from '@playwright/test';
import { SignInPage } from '../src/pages/SignInPage';
import { Menu } from '../src/components/Menu';
import { Contacts } from '../src/pages/Contacts';
import { TestCredentials } from '../test-data/credentials';
import { ContactTestData } from '../test-data/contact-data';

test.describe('Contact Creation Flow', () => {
  let signInPage: SignInPage;
  let menu: Menu;
  let contacts: Contacts;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    menu = new Menu(page);
    contacts = new Contacts(page);

    await signInPage.open();
    await signInPage.signIn(TestCredentials.valid.email, TestCredentials.valid.password);
    await menu.navigateToContacts();
  });

  test.describe('Validation', () => {
    test('should require name field', async () => {
      await contacts.clickNewContact();
      await contacts.clickCreateContact();
      await contacts.expectErrorMessage();
    });
  });

  test.describe('Success scenarios', () => {
    test('should create contact with name only', async () => {
      await contacts.clickNewContact();
      await contacts.fillName(ContactTestData.validContact.name);
      await contacts.clickCreateContact();
      await contacts.expectSuccessFormClear();
    });
  });
});
