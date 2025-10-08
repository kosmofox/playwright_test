export const ContactTestData = {
  validContact: {
    name: 'TestContact',
  },
  emptyContact: {
    name: '',
  },
} as const;

export const Messages = {
  errors: {
    nameRequired: 'Vennligst skriv inn navn',
  },
  success: {
    contactCreated: 'Ny kontakt lagret.',
  },
} as const;
