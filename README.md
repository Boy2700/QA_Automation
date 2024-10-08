
# QA Automation Engineer Task

## Overview

This project automates the testing of a web application's login functionality using Cypress and Selenium. The tests cover various scenarios, including successful login, failed login, and error message display when login fails. The project also integrates these tests into a CI/CD pipeline using GitHub Actions to ensure automated testing on every code push.

## Web Application Under Test

- **URL:** `https://91web.github.io/Login-Page/`
- **Test Credentials:**  
  - **Email:** `boy@gmail.com`  
  - **Password:** `12345`

## Project Structure

- **`cypress/`**: Contains Cypress configuration and test files.
- **`login_test.js`**: The Selenium test script for automating the login functionality.
- **`.github/workflows/`**: GitHub Actions workflow files to automate the running of tests.

## Steps Taken

### 1. **Project Setup**

- **Node.js Installation:** Installed Node.js to manage project dependencies and execute test scripts.
- **Project Initialization:** Initialized a new Node.js project using `npm init -y`.
- **Cypress Installation:** Installed Cypress, a testing framework for end-to-end testing, using `npm install cypress --save-dev`.
- **Selenium Installation:** Installed Selenium WebDriver and ChromeDriver using `npm install selenium-webdriver chromedriver --save-dev`.

### 2. **Cypress Test Implementation**

- **Configuration:** Configured Cypress with a `cypress.json` file, setting the base URL of the web application under test.
- **Test Cases:**
  - **Successful Login:** A test case to verify that valid credentials allow the user to log in successfully.
  - **Failed Login:** A test case to verify that invalid credentials prevent login and trigger an error message.
  - **Error Message Validation:** A test case to check that the correct error message is displayed when login fails.
- **Test Execution:** Cypress tests are run locally using the command `npx cypress open` or integrated into the CI/CD pipeline for automatic execution.

### 3. **Selenium Test Implementation**

- **Test Script:** Developed a `login_test.js` script using Selenium WebDriver to automate login functionality testing.
- **Test Execution:** The script tests successful and failed login scenarios by interacting with the web page elements and verifying the outcome.

### 4. **CI/CD Integration with GitHub Actions**

- **Repository Setup:** Created a GitHub repository and pushed the project code, making it publicly accessible.
- **GitHub Actions Workflow:** 
  - Created a workflow file (`.github/workflows/cypress.yml`) to automate Cypress tests on every push to the `main` or `dev` branch.
  - The workflow installs dependencies, checks out the code, and runs Cypress tests automatically.
- **Continuous Testing:** The CI/CD pipeline ensures that tests are executed automatically with every code change, maintaining the integrity of the login functionality.

## How to Run Tests Locally

### Cypress
1. **Open Cypress:**  
   Run the command:
   ```bash
   npx cypress open
   ```
2. **Run Tests:**  
   Use the Cypress GUI to run the test cases.

### Selenium
1. **Run Selenium Test Script:**  
   Execute the command:
   ```bash
   node login_test.js
   ```

## How to Trigger CI/CD Tests

1. **Push to GitHub:**  
   Push any changes to the `main` or `dev` branch in the GitHub repository.
2. **GitHub Actions:**  
   The tests will be automatically executed via GitHub Actions. You can monitor the test results in the "Actions" tab of your repository.

## Conclusion

This project demonstrates the automation of web application testing using Cypress and Selenium, coupled with CI/CD integration using GitHub Actions. The automated tests ensure that the login functionality is robust and reliable, and the CI/CD pipeline provides continuous feedback on code quality with each update.
