import { expect } from '@playwright/test';
import { Locator, Page } from '@playwright/test';

interface IMenu {
  page: Page;
  openMenu(): void;
  openDropdownLink(): void;
  openContacts(): void;
}

export class Menu implements IMenu {
  menu: Locator;
  dropdownLink: Locator;
  contactsLink: Locator;

  constructor(public page: Page) {
    this.menu = this.page.getByRole('button', { name: 'Bokføring' });
    this.contactsLink = this.page.getByRole('link', { name: 'Kontakter' });
  }

  async openMenu() {
    await this.menu.click();
  }
  async openDropdownLink() {
    await this.page.getByRole('link', { name: 'Bokfør andre filer' }).click();
  }
  async openContacts() {
    await this.contactsLink.click();
  }
}
