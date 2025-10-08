import { expect, Locator, Page } from '@playwright/test';
import { PurchaseMessages } from '../../test-data/purchase-data';

export class Purchase {
  readonly contactSelect: Locator;
  readonly amountInput: Locator;
  readonly invoiceDateInput: Locator;
  readonly dueDateInput: Locator;
  readonly invoiceNumberInput: Locator;
  readonly accountSelect: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(public readonly page: Page) {
    this.contactSelect = page.getByRole('button', { name: 'Kontakt (valgfri ved' });
    this.amountInput = page.getByRole('textbox', { name: 'Totalt beløp inkl. mva. *' });
    this.invoiceDateInput = page.getByRole('button', { name: 'Fakturadato *' });
    this.dueDateInput = page.getByRole('button', { name: 'Forfallsdato' });
    this.invoiceNumberInput = page.getByRole('textbox', { name: 'Fakturanr.' });
    this.accountSelect = page.getByRole('button', { name: 'Konto *' });
    this.submitButton = page.getByRole('button', { name: 'Bokfør', exact: true });
    this.successMessage = page.getByText(PurchaseMessages.success.invoiceCreated);
    this.errorMessage = page.getByText(PurchaseMessages.errors.duplicateInvoiceNumber);
  }

  async selectContact(contactName: string): Promise<void> {
    await this.contactSelect.click();
    await this.page.getByRole('option', { name: contactName }).locator('div').first().click();
  }

  async fillAmount(amount: string): Promise<void> {
    await this.amountInput.fill(amount);
  }

  async fillInvoiceDate(date: string): Promise<void> {
    await this.invoiceDateInput.fill(date);
  }

  async fillDueDate(date: string): Promise<void> {
    await this.dueDateInput.fill(date);
  }

  async fillInvoiceNumber(invoiceNumber: string): Promise<void> {
    await this.invoiceNumberInput.fill(invoiceNumber);
  }

  async selectAccount(accountName: string): Promise<void> {
    await this.accountSelect.click();
    await this.page.getByRole('option', { name: accountName }).locator('div').first().click();
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async expectSuccessMessage(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
  }

  async expectDuplicateInvoiceError(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }

  async createPurchase(data: {
    contact?: string;
    amount: string;
    invoiceDate: string;
    dueDate: string;
    invoiceNumber?: string;
    account: string;
  }): Promise<void> {
    if (data.contact) {
      await this.selectContact(data.contact);
    }
    await this.fillAmount(data.amount);
    await this.fillInvoiceDate(data.invoiceDate);
    await this.fillDueDate(data.dueDate);
    if (data.invoiceNumber) {
      await this.fillInvoiceNumber(data.invoiceNumber);
    }
    await this.selectAccount(data.account);
    await this.submit();
  }
}
