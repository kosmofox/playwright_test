import { expect } from '@playwright/test';
import { Locator, Page } from '@playwright/test';

interface IDashboard {
  page: Page;
  load(): void;
}

export class Dashboard implements IDashboard {
  constructor(public page: Page) {}

  async load() {
    await this.page.waitForURL('https://app.staging.systima.no/systimaas7/dashboard');
  }
}
