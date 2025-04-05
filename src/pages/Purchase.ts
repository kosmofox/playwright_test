import { expect } from '@playwright/test';
import { Locator, Page } from '@playwright/test';

interface IPurchase {
  page: Page;
  clickContactsSelect(): void;
  clickContactsOption(): void;
  fillAmount(amount: string): void;
  fillInvoiceDate(): void;
  fillInvoiceDueDate(): void;
  accountSelect(account: string): void;
  submitForm(): void;
  successMessage(): void;
  fillInvoiceNumber(order: string): void;
  errorMessage(): void;
}

export class Purchase implements IPurchase {
  contactsSelect: Locator;
  contactsOption: Locator;
  amountInput: Locator;
  dateFrom: Locator;
  dateTo: Locator;
  account: Locator;
  submitButton: Locator;
  invoiceNumber: Locator;

  constructor(public page: Page) {
    this.contactsSelect = this.page.getByRole('button', { name: 'Kontakt (valgfri ved' });
    this.contactsOption = this.page.getByRole('option', { name: 'Systima AS' }).locator('div').first();
    this.amountInput = this.page.getByRole('textbox', { name: 'Totalt beløp inkl. mva. *' });
    this.dateFrom = this.page.getByRole('button', { name: 'Fakturadato *' });
    this.dateTo = this.page.getByRole('button', { name: 'Forfallsdato' });
    this.invoiceNumber = this.page.getByRole('textbox', { name: 'Fakturanr.' });
    this.account = this.page.getByRole('button', { name: 'Konto *' });
    this.submitButton = this.page.getByRole('button', { name: 'Bokfør', exact: true });
  }

  async clickContactsSelect() {
    await this.contactsSelect.click();
  }

  async clickContactsOption() {
    await this.contactsOption.click();
  }

  async fillAmount(amount: string) {
    await this.amountInput.fill(amount);
  }

  async fillInvoiceDate() {
    await this.dateFrom.fill('01.01.2024');
  }

  async fillInvoiceDueDate() {
    await this.dateTo.fill('15.01.2024');
  }

  async fillInvoiceNumber(order: string) {
    await this.invoiceNumber.fill(order);
  }

  async accountSelect(account: string) {
    this.account.click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('option', { name: account }).locator('div').first().click();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async successMessage() {
    await expect(this.page.getByText('Bilag opprettet med bilagsnr. 2024-')).toBeVisible();
  }

  async errorMessage() {
    await expect(this.page.getByText('Fakturanr. er allerede bokført')).toBeVisible();
  }
}
