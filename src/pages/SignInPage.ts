import { expect, Locator, Page } from '@playwright/test';
import { TestConfig } from '../../config/test-config';

export class SignInPage {
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly errorNotification: Locator;

  constructor(public readonly page: Page) {
    this.emailField = page.getByRole('textbox', { name: 'E-post' });
    this.passwordField = page.getByRole('textbox', { name: 'Passord' });
    this.signInButton = page.getByRole('button', { name: 'Logg inn' });
    this.errorNotification = page.getByText('Feil brukernavn / passord');
  }

  async open(): Promise<void> {
    await this.page.goto(`${TestConfig.baseUrl}${TestConfig.routes.login}`);
  }

  async fillEmailField(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  async fillPasswordField(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }

  async clickSignInButton(): Promise<void> {
    await this.signInButton.click();
  }

  async expectErrorNotification(): Promise<void> {
    await expect(this.errorNotification).toBeVisible();
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.fillEmailField(email);
    await this.fillPasswordField(password);
    await this.clickSignInButton();
  }
}
