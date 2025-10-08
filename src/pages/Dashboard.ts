import { Page } from '@playwright/test';
import { TestConfig } from '../../config/test-config';

export class Dashboard {
  constructor(public readonly page: Page) {}

  async waitForLoad(): Promise<void> {
    await this.page.waitForURL(`${TestConfig.baseUrl}${TestConfig.routes.dashboard}`);
  }
}
