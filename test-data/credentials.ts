export const TestCredentials = {
  valid: {
    email: 'joachim+453459@systima.no',
    password: '123456789',
  },
  invalidEmail: {
    email: 'joachim+45345@systima.no',
    password: '123456789',
  },
  invalidPassword: {
    email: 'joachim+453459@systima.no',
    password: '12345678',
  },
} as const;
