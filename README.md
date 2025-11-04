# ✅ Todo App — Cypress E2E Automation Project

![Cypress](https://img.shields.io/badge/Cypress-15.5.0-brightgreen)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Workflow-blue)
![Node.js](https://img.shields.io/badge/Node-20.5.1-blue)


This project is a complete **End-to-End (E2E) Automation Testing** framework for a Todo web application using **Cypress**.  
The UI is not developed by me, but **all automation scripts are written by me**.

---

## 🎯 Project Objectives
- Test CRUD operations for Todo tasks (UI + API)
- Implement **Page Object Model (POM)** for maintainable code
- Reusable Cypress commands for login, add/delete task
- Cover both positive and negative scenarios
- Generate automated reports (Mochawesome)

---

## 🧰 Tech Stack
| Tool | Purpose |
|------|---------|
| Cypress | UI + API Testing |
| JavaScript | Test scripting |
| Page Object Model (POM) | Code organization |
| Custom Cypress Commands | Reusable functions |
| Faker.js | Randomized test data |
| GitHub Actions | CI integration |
| Mochawesome | Test reports |

---

## 📂 Project Structure

* **`cypress/`**
  * `e2e/`
      *`01-Tests/`
          *`01-Signup/`
            `Register.cy.js
        *`02-Login/`
            Login.cy.js
        *`03/CrudTasks/`
            API_CRUD.cy.js
            UI_CRUD.cy.js

    *`02-Pages/`
      *`01-SignupPage.js`
      *`02-LoginPage.js`
      *`03-AddTasksPage.js`
  
    *`03-testData/`
      *`01-SignupData.js`
      *`02-LoginData.js`
      *`03-AddTasksData.js`
      
  fixtures/
  screenshots/
  support/
    commands.js
    e2e.js

docs/
  TestPlan.pdf
  TestCases.xlsx
  BugReport.pdf
  ExecutionReport.pdf

- **pages/** — Page Object Model  
- **commands.js** — reusable commands like `login`, `createTask`, `deleteTask`

---

## 🔧 Running the Project

### Install Dependencies
```bash
npm install
