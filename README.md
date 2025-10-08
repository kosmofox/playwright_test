# Playwright Test Automation

Playwright Test Automation built with Playwright and TypeScript, implementing the Page Object Model design pattern for maintainable and scalable end-to-end testing.

## 📋 Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Code Quality](#code-quality)
- [Test Coverage](#test-coverage)

## ✨ Features

- **Page Object Model (POM)** - Organized, maintainable test structure
- **TypeScript** - Type-safe test code with better IDE support
- **Code Quality Tools** - ESLint, Prettier for consistent code style
- **Multiple Test Scenarios** - Authentication, CRUD operations, form validation
- **Comprehensive Assertions** - Success and error message validation
- **Reusable Components** - Centralized test data and page objects
- **CI/CD Ready** - GitHub Actions integration

## 🛠️ Technologies

- **Playwright** v1.48.0 - End-to-end testing framework
- **TypeScript** v5.5.0 - Programming language
- **Node.js** - Runtime environment
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

To check if you have them installed:
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
git --version   # Should show 2.x.x or higher
```

## 🚀 Installation

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/playwright_test.git

# Navigate to project directory
cd playwright_test
```

### Step 2: Install Dependencies

```bash
# Install all npm packages
npm install
```

This will install:
- Playwright test runner
- TypeScript compiler
- ESLint and Prettier
- All required dependencies

### Step 3: Install Playwright Browsers

```bash
# Install Chromium, Firefox, and WebKit browsers
npx playwright install

# Or install only Chromium (faster)
npx playwright install chromium

# If you encounter system dependency issues (Linux/CI):
npx playwright install --with-deps
```

## 📁 Project Structure

```
playwright_test/
│
├── src/
│   └── pages/              # Page Object Models
│       ├── SignInPage.ts   # Sign-in page actions
│       ├── Dashboard.ts    # Dashboard page
│       ├── Menu.ts         # Navigation menu
│       ├── Contacts.ts     # Contacts management
│       └── Purchase.ts     # Purchase invoice page
│
├── tests/                  # Test specifications
│   ├── sign-in.spec.ts     # Authentication tests
│   ├── contacts.spec.ts    # Contact creation tests
│   └── purchase.spec.ts    # Purchase invoice tests
│
├── test-data/              # Test data & constants
│   ├── credentials.ts      # User credentials
│   ├── contact-data.ts     # Contact test data
│   └── purchase-data.ts    # Purchase test data
│
├── config/                 # Configuration files
│   └── test-config.ts      # Test configuration
│
├── test-results/           # Test execution results (auto-generated)
├── playwright-report/      # HTML test reports (auto-generated)
├── tests-out/              # Compiled TypeScript output
│
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
└── package.json           # Project dependencies
```

## 🧪 Running Tests

### Run All Tests

```bash
# Run all tests in headless mode
npm test

# Or
npx playwright test
```

### Run Tests with UI

```bash
# Open Playwright UI mode (recommended for development)
npm run test:ui
```

### Run Tests in Headed Mode

```bash
# See the browser while tests run
npm run test:headed

# Or
npx playwright test --headed
```

### Run Specific Test File

```bash
# Run only sign-in tests
npx playwright test tests/sign-in.spec.ts

# Run only contact tests
npx playwright test tests/contacts.spec.ts
```

### Run Tests by Name

```bash
# Run tests matching a pattern
npx playwright test -g "should successfully sign in"
```

### Debug Tests

```bash
# Run in debug mode with Playwright Inspector
npm run test:debug

# Or debug specific test
npx playwright test tests/sign-in.spec.ts --debug
```

### Run Tests in Specific Browser

```bash
# Run in Chromium only
npx playwright test --project=chromium

# Run in Firefox
npx playwright test --project=firefox

# Run in WebKit (Safari)
npx playwright test --project=webkit
```

### View Test Report

```bash
# Generate and open HTML report
npx playwright show-report
```

## 🎨 Code Quality

### Run Code Quality Checks

```bash
# Run all quality checks (linting, formatting, type-checking)
npm run quality
```

### Individual Quality Commands

```bash
# Run ESLint
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Check code formatting
npm run format:check

# Auto-format code
npm run format

# Run TypeScript type checking
npm run type-check
```

### Auto-fix All Issues

```bash
# Fix linting and formatting issues automatically
npm run quality:fix
```

## 📊 Test Coverage

### Current Test Scenarios

**Authentication Tests** (`tests/sign-in.spec.ts`)
- ✅ Successful login with valid credentials
- ✅ Error message for incorrect email
- ✅ Error message for incorrect password

**Contact Management Tests** (`tests/contacts.spec.ts`)
- ✅ Validation error when creating contact without name
- ✅ Successfully create contact with valid name

**Purchase Invoice Tests** (`tests/purchase.spec.ts`)
- ✅ Successfully create purchase invoice
- ✅ Error handling for duplicate invoice numbers
- ✅ Create purchase without contact

**Built using Playwright and TypeScript**
