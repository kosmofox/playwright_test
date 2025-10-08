import { test } from '@playwright/test';
import { SignInPage } from '../src/pages/SignInPage';
import { Menu } from '../src/components/Menu';
import { Purchase } from '../src/pages/Purchase';
import { TestCredentials } from '../test-data/credentials';
import { PurchaseTestData } from '../test-data/purchase-data';

test.describe('Purchase Invoice Management', () => {
  let signInPage: SignInPage;
  let menu: Menu;
  let purchase: Purchase;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    menu = new Menu(page);
    purchase = new Purchase(page);

    await signInPage.open();
    await signInPage.signIn(TestCredentials.valid.email, TestCredentials.valid.password);
    await menu.navigateToBookOtherFiles();
  });

  test.describe('Successful creation', () => {
    test('should create purchase with all required fields', async () => {
      const { contact, amount, invoiceDate, dueDate, account } = PurchaseTestData.validPurchase;

      await purchase.selectContact(contact);
      await purchase.fillAmount(amount);
      await purchase.fillInvoiceDate(invoiceDate);
      await purchase.fillDueDate(dueDate);
      await purchase.selectAccount(account);
      await purchase.submit();

      await purchase.expectSuccessMessage();
    });
  });

  test.describe('Validation errors', () => {
    test('should prevent duplicate invoice numbers', async () => {
      await purchase.createPurchase(PurchaseTestData.duplicateInvoice);
      await purchase.expectDuplicateInvoiceError();
    });
  });
});
