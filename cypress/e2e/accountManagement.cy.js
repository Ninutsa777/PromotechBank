describe('Acount Management Test Cases', () => {
    beforeEach(() => {
        cy.visit('https://gotechschool.com/qa/2025/final-project/'); // Adjust the URL to your local server

        cy.get('.navbar').should('be.visible');
        cy.get('#homePage').should('be.visible');
    });
    it('My Accounts Block Verification', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze14@gmail.com')
        cy.get('#password').click();
        cy.get('input[name="password"]:visible').type('Ninutsa123@');
        cy.get('input[name="confirmPassword"]').type('Ninutsa123@');
        cy.get('#registerForm').within(() => {
            cy.contains('რეგისტრაცია').click()
        })
        cy.contains('რეგისტრაცია წარმატებით დასრულდა!', {
            timeout: 4000
        }).should('be.visible')
        cy.contains('სისტემაში შესვლა', {
            timeout: 4000
        }).should('be.visible')

        cy.get('.nav-link[data-page="login"]').click();

        cy.get('#loginPage').should('be.visible');
        cy.contains('სისტემაში შესვლა').should('be.visible');

        cy.get('#loginEmail').type('sikharulidze14@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#logoutLink').should('be.visible');
        cy.get('#accountsGrid').should('be.visible');

        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });

    it('Display All Accounts in "My Accounts" Block', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze15@gmail.com')
        cy.get('#password').click();
        cy.get('input[name="password"]:visible').type('Ninutsa123@');
        cy.get('input[name="confirmPassword"]').type('Ninutsa123@');
        cy.get('#registerForm').within(() => {
            cy.contains('რეგისტრაცია').click()
        })
        cy.contains('რეგისტრაცია წარმატებით დასრულდა!', {
            timeout: 4000
        }).should('be.visible')
        cy.contains('სისტემაში შესვლა', {
            timeout: 4000
        }).should('be.visible')

        cy.get('.nav-link[data-page="login"]').click();

        cy.get('#loginPage').should('be.visible');
        cy.contains('სისტემაში შესვლა').should('be.visible');

        cy.get('#loginEmail').type('sikharulidze15@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#logoutLink').should('be.visible');
        cy.get('#accountsGrid').should('be.visible');
        cy.contains('მიმდინარე', ).should('be.visible');
        cy.contains('შემნახველი', ).should('be.visible');



        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });
    it('Verify Account Details', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze16@gmail.com')
        cy.get('#password').click();
        cy.get('input[name="password"]:visible').type('Ninutsa123@');
        cy.get('input[name="confirmPassword"]').type('Ninutsa123@');
        cy.get('#registerForm').within(() => {
            cy.contains('რეგისტრაცია').click()
        })
        cy.contains('რეგისტრაცია წარმატებით დასრულდა!', {
            timeout: 4000
        }).should('be.visible')
        cy.contains('სისტემაში შესვლა', {
            timeout: 4000
        }).should('be.visible')

        cy.get('.nav-link[data-page="login"]').click();

        cy.get('#loginPage').should('be.visible');
        cy.contains('სისტემაში შესვლა').should('be.visible');

        cy.get('#loginEmail').type('sikharulidze16@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#logoutLink').should('be.visible');
        cy.get('#accountsGrid').should('be.visible');
        cy.get('.account-number').should('be.visible');
        cy.get('.account-balance').should('be.visible');


        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');


    })

})
