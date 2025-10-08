export const TestConfig = {
  baseUrl: 'https://app.staging.systima.no',
  routes: {
    login: '/login',
    dashboard: '/systimaas7/dashboard',
  },
  timeouts: {
    short: 1000,
    medium: 5000,
  },
} as const;
