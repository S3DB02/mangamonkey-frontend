# MangaMonkey User Frontend App
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Auth0](https://img.shields.io/badge/Auth0-%23004FD7.svg?style=for-the-badge&logo=auth0&logoColor=white)![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

You can set up this app by following these steps:

## 1. Prerequisites

- Ensure that you have followed all instructions provided [here](https://github.com/S3DB02/MangaMonkey)
- If you're running the microservices individually, you need to run the [Manga API](https://github.com/S3DB02/mangamonkey-manga-api) and [Users API](https://github.com/S3DB02/mangamonkey-users-api) first. Make sure they're running before proceeding.

### Auth0 app setup

The authentication provider for this app is Auth0, so you need to set up an Auth0 application first.
You also need to create a test account in order to enable frontend auth testing.

- Navigate to [Auth0 Dashboard](https://manage.auth0.com/) and click 'Create Application'
- Follow the setup instructions
- After the setup, choose the 'Single Page Web Applications' option
- Register the app and continue to the settings
- Enable the necessary connection methods
- In the settings, add `http://localhost:3000` to the "Allowed Callback URLs", "Allowed Logout URLs", and "Allowed Web Origins" fields
- Go to the 'Users' tab and add a new user with email `test@mangamonkey.com` and password `mmtest`

### Create .env file for Cypress

This project uses a .env file which needs to be created manually to store environment variables for Cypress.

- In the root directory, create a new file named `cypress.env.json`
- Add the necessary environment variables for your tests in this file

## 2. Set Up Dependencies

- Open your terminal.
- Navigate to your project directory using the `cd` command.
- Install the project's dependencies by running:
    ```
    npm install
    ```
- You can add any additional dependencies you might want to use with `npm install <dependency>`.

## 3. Run Your Project

- Start the project by running
    ```
    npm start
    ```
    
## Testing

This project comes with end-to-end tests ran by Cypress.
These tests are located in `/mangamonkey/cypress/e2e`. You can write more tests or edit the current ones there.

### Automatic testing

- To run tests automatically, run `npm test`. This initializes all tests from the `e2e` folder and saves the recording of the test to `/frontend/cypress/videos`.

This is an example of a test video:

![](https://raw.githubusercontent.com/S3DB02/documentation/main/docs/images/cypress.gif)

### Manual tests

- If you want to run tests manually, you can use `npx cypress open`. This will open a window with all your tests, and you can choose which ones to run.