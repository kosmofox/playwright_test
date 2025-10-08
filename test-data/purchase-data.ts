export const PurchaseTestData = {
  validPurchase: {
    contact: 'Systima AS',
    amount: '100',
    invoiceDate: '01.01.2024',
    dueDate: '15.01.2024',
    account: '1000 Utvikling, ervervet',
  },
  duplicateInvoice: {
    contact: 'Systima AS',
    amount: '100',
    invoiceDate: '01.01.2024',
    dueDate: '15.01.2024',
    invoiceNumber: '1',
    account: '1000 Utvikling, ervervet',
  },
} as const;

export const PurchaseMessages = {
  success: {
    invoiceCreated: 'Bilag opprettet med bilagsnr. 2024-',
  },
  errors: {
    duplicateInvoiceNumber: 'Fakturanr. er allerede bokført',
  },
} as const;
