describe('Logged in tests', () => {
    it('logs the user in and adds a manga to their list', () => {
        cy.visit('http://localhost:3000/login');

        cy.get('#loginButton')
            .click();

        cy.origin(`https://${Cypress.env('auth_audience')}`, () => {

            cy.get('#username').should('be.visible').type(Cypress.env('auth_username'));

            cy.get('#password').should('be.visible').type(Cypress.env('auth_password')).type('{enter}');
        });

        cy.get('#mangaLink').should('be.visible').click();

        cy.wait(2000);

        cy.get('button').should('be.visible').click();

        cy.wait(4000);
    });
});

describe('Logged out tests', () => {
    it('tries to add a manga to their list', () => {
        cy.visit('http://localhost:3000/manga/cfc3d743-bd89-48e2-991f-63e680cc4edf');

        cy.window().then((win) => {
            cy.stub(win.console, 'error').as('consoleError');
        });

        cy.get('button').should('be.visible').click();

        cy.get('@consoleError').should('be.calledWith', 'User is not authenticated');

        cy.wait(4000);
    });
});
