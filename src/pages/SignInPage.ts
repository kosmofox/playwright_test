import { expect, Locator, Page } from '@playwright/test';

interface ISignInPage {
  page: Page;
  open(): void;
  fillEmailField(email: string): void;
  fillPasswordField(password: string): void;
  clickSignInButton(): void;
  showErrorNotification(): void;
  validSignin(): void;
}

export class SignInPage implements ISignInPage {
  emailField: Locator;
  passwordField: Locator;
  signInButton: Locator;
  errorNotification: Locator;

  constructor(public page: Page) {
    this.emailField = page.getByRole('textbox', { name: 'E-post' });
    this.passwordField = page.getByRole('textbox', { name: 'Passord' });
    this.signInButton = page.getByRole('button', { name: 'Logg inn' });
  }

  async open() {
    await this.page.goto('https://app.staging.systima.no/login');
  }

  async fillEmailField(email: string) {
    await this.emailField.fill(email);
  }

  async fillPasswordField(password: string) {
    await this.passwordField.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
  async showErrorNotification() {
    await expect(this.page.getByText('Feil brukernavn / passord')).toBeVisible();
  }
  async validSignin() {
    await this.fillEmailField('joachim+453459@systima.no');
    await this.fillPasswordField('123456789');
    await this.clickSignInButton();
  }
}
