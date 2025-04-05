import { expect } from '@playwright/test';
import { Locator, Page } from '@playwright/test';

interface IContacts {
  page: Page;
  createNewContact(): void;
  addContact(): void;
  errorMessage(): void;
  addNewName(name: string): void;
  successMassage(): void;
}

export class Contacts implements IContacts {
  newContactButton: Locator;

  constructor(public page: Page) {
    this.newContactButton = this.page.getByRole('button', { name: 'Ny kontakt' });
  }

  async createNewContact() {
    await this.newContactButton.click();
  }
  async addContact() {
    await this.page.getByRole('button', { name: 'Opprett kontakt' }).click();
  }
  async errorMessage() {
    await expect(this.page.getByText('Vennligst skriv inn navn')).toBeVisible();
  }
  async addNewName(name: string) {
    await this.page.getByRole('textbox', { name: 'Navn *' }).fill(name);
  }
  async successMassage() {
    await expect(this.page.getByText('Ny kontakt lagret.')).toBeVisible();
  }
}
