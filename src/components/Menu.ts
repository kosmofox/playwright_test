import { Locator, Page } from '@playwright/test';

export class Menu {
  readonly menuButton: Locator;
  readonly contactsLink: Locator;
  readonly bookOtherFilesLink: Locator;

  constructor(public readonly page: Page) {
    this.menuButton = page.getByRole('button', { name: 'Bokføring' });
    this.contactsLink = page.getByRole('link', { name: 'Kontakter' });
    this.bookOtherFilesLink = page.getByRole('link', { name: 'Bokfør andre filer' });
  }

  async openMenu(): Promise<void> {
    await this.menuButton.click();
  }

  async navigateToContacts(): Promise<void> {
    await this.contactsLink.click();
  }

  async navigateToBookOtherFiles(): Promise<void> {
    await this.menuButton.click();
    await this.bookOtherFilesLink.click();
  }
}
