describe('Login Tests', () => {
    it('Successful login with valid credentials', () => {
        cy.visit('/');
        cy.get('#username').type('boy@gmail.com');
        cy.get('#password').type('12345');
        cy.get('#loginButton').click();
        cy.url().should('include', '/dashboard'); // Adjust this according to where a successful login redirects
    });

    it('Failed login with invalid credentials', () => {
        cy.visit('/');
        cy.get('#username').type('invalid@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('#loginButton').click();
        cy.get('#errorMessage').should('be.visible');
    });

    it('Error message display when login fails', () => {
        cy.visit('/');
        cy.get('#username').type('invalid@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('#loginButton').click();
        cy.get('#errorMessage').should('contain', 'Invalid credentials');
    });
});