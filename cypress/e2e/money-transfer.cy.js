describe('Money Transfer Test Cases', () => {
    beforeEach(() => {
        cy.visit('https://gotechschool.com/qa/2025/final-project/'); 

        cy.get('.navbar').should('be.visible');
        cy.get('#homePage').should('be.visible');
    });

    it('Check transfer form fields', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze21@gmail.com')
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

        cy.get('#loginEmail').type('sikharulidze21@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#transferLink').click()


        cy.get('#fromAccount').should('be.visible');
        cy.get('#toAccount').should('be.visible');
        cy.get('#amount').should('be.visible');
        cy.get('#purpose').should('be.visible');
        cy.contains('გადარიცხვა').click()

        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });

    it('Error message for insufficient balance', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze23@gmail.com')
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

        cy.get('#loginEmail').type('sikharulidze23@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#transferLink').click()


        cy.get('#fromAccount').select('1')
        cy.get('#toAccount').select('GE09876543210987654321')
            .should('have.value', 'GE09876543210987654321')
        cy.get('#amount').type('1000000')
        cy.get('#purpose').type('ninutsas')
        cy.get('#transferForm').within(() => {
            cy.contains('გადარიცხვა').click()
        })
        cy.contains('არასაკმარისი თანხა ანგარიშზე', {
            timeout: 4000
        }).should('be.visible')

        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });

    it('Verify transfer confirmation method', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze23@gmail.com')
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

        cy.get('#loginEmail').type('sikharulidze23@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#transferLink').click()


        cy.get('#fromAccount').select('1')
        cy.get('#toAccount').select('GE09876543210987654321')
            .should('have.value', 'GE09876543210987654321')
        cy.get('#amount').type('100')
        cy.get('#purpose').type('ninutsas')
        cy.get('#transferForm').within(() => {
            cy.contains('გადარიცხვა').click()
        })
        cy.get('#smsCode').type('123456')
        cy.contains('button.btn.btn-primary', 'დადასტურება', {
            timeout: 10000
        }).click({
            force: true
        });

        cy.contains('გადარიცხვა წარმატებით დასრულდა!', {
            timeout: 4000
        }).should('be.visible')




        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });

    it('Error message for insufficient balance', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze23@gmail.com')
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

        cy.get('#loginEmail').type('sikharulidze23@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#transferLink').click()


        cy.get('#fromAccount').select('1')
        cy.get('#toAccount').select('GE09876543210987654321')
            .should('have.value', 'GE09876543210987654321')
        cy.get('#amount').type('1000000')
        cy.get('#purpose').type('ninutsas')
        cy.get('#transferForm').within(() => {
            cy.contains('გადარიცხვა').click()
        })
        cy.contains('არასაკმარისი თანხა ანგარიშზე', {
            timeout: 4000
        }).should('be.visible')

        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });

    it('Successful Transfer – Notification and Balance Check', () => {
        cy.get('#registerLink').first().click();
        cy.get('#firstName').type('Mariami');
        cy.get('#lastName').type('Sikharulidze');
        cy.get('#personalNumber').type('01001085016');
        cy.get('#phone').type('555533559');
        cy.get('#email').click();
        cy.get('input[name="email"]:visible').type('sikharulidze23@gmail.com')
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

        cy.get('#loginEmail').type('sikharulidze23@gmail.com');
        cy.get('#loginPassword').type('Ninutsa123@');

        cy.get('#loginForm button[type="submit"]').click();

        cy.wait(1000);

        cy.get('#dashboardLink').should('be.visible');
        cy.get('#transferLink').should('be.visible');
        cy.get('#transferLink').click()


        cy.get('#fromAccount').select('1')
        cy.get('#toAccount').select('GE09876543210987654321')
            .should('have.value', 'GE09876543210987654321')

        cy.wait(3000)
        cy.get('#amount').type('100')
        cy.get('#purpose').type('ninutsas')
        cy.get('#transferForm').within(() => {
            cy.contains('გადარიცხვა').click()
        })
        cy.get('#smsCode').type('123456')
        cy.contains('button.btn.btn-primary', 'დადასტურება', {
            timeout: 10000
        }).click({
            force: true
        });

        cy.contains('გადარიცხვა წარმატებით დასრულდა!', {
            timeout: 4000
        }).should('be.visible')

        cy.get('#dashboardLink', {
            timeout: 10000
        }).should('be.visible').click();
        cy.wait(3000)
        cy.contains('GE12345678901234567890').parent().should('contain', '4900');
        cy.contains('GE09876543210987654321').parent().should('contain', '15100');




        cy.get('#loginLink').should('not.be.visible');
        cy.get('#registerLink').should('not.be.visible');
    });

})