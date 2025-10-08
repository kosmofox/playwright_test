import { expect, Locator, Page } from '@playwright/test';
import { Messages } from '../../test-data/contact-data';

export class Contacts {
  readonly newContactButton: Locator;
  readonly createContactButton: Locator;
  readonly nameField: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(public readonly page: Page) {
    this.newContactButton = page.getByRole('button', { name: 'Ny kontakt' });
    this.createContactButton = page.getByRole('button', { name: 'Opprett kontakt' });
    this.nameField = page.getByRole('textbox', { name: 'Navn *' });
    this.errorMessage = page.getByText(Messages.errors.nameRequired);
    this.successMessage = page.getByText(Messages.success.contactCreated);
  }

  async clickNewContact(): Promise<void> {
    await this.newContactButton.click();
  }

  async fillName(name: string): Promise<void> {
    await this.nameField.fill(name);
  }

  async clickCreateContact(): Promise<void> {
    await this.createContactButton.click();
  }

  async expectErrorMessage(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }

  async expectSuccessFormClear(): Promise<void> {
    await expect(this.nameField).toBeEmpty();
  }

  async createContact(name: string): Promise<void> {
    await this.clickNewContact();
    if (name) {
      await this.fillName(name);
    }
    await this.clickCreateContact();
  }
}
