import LoginPage from "../support/PageObject/LoginPage.js";
describe('Authorization Test Cases', () => {
    beforeEach(() => {
        cy.visit('https://gotechschool.com/qa/2025/final-project/');
    });
    it('Registration with Valid Data', () => {
        LoginPage.clickRegisterButton()
        LoginPage.enterFirstName('Lika');
        LoginPage.enterLastName('Kldiashvili');
        LoginPage.enterPersonalNumber('01001085015');
        LoginPage.enterPhone('555533559');
        LoginPage.enterEmail('lika@gmail.com');
        LoginPage.enterPassword('Ninutsa123@');
        LoginPage.enterConfirmPassword('Ninutsa123@');
        LoginPage.submitForm();
        LoginPage.verifySuccess();
    });

    it('Registration Attempt with Incorrect Password Combination', () => {
        LoginPage.clickRegisterButton();
        LoginPage.enterFirstName('Mariami');
        LoginPage.enterLastName('Sikharulidze');
        LoginPage.enterPersonalNumber('01001085015');
        LoginPage.enterPhone('555533559');
        LoginPage.enterEmail('mariami@gmail.com');
        LoginPage.enterPassword('Ninutsa');
        LoginPage.enterConfirmPassword('Ninutsa');
        LoginPage.submitForm();
        LoginPage.verifyPasswordRequirementsError();
    });

    it('Verify Password and Confirm Password Fields Accuracy', () => {
        LoginPage.clickRegisterButton();
        LoginPage.enterFirstName('Mariami');
        LoginPage.enterLastName('Sikharulidze');
        LoginPage.enterPersonalNumber('01001085015');
        LoginPage.enterPhone('555533559');
        LoginPage.enterEmail('mariami1@gmail.com');
        LoginPage.enterPassword('Ninutsa123@');
        LoginPage.enterConfirmPassword('Ninutsa123!');
        LoginPage.submitForm();
        LoginPage.verifyPasswordsMismatchError();
    });

    it('Registration with Incorrect Email', () => {
        LoginPage.clickRegisterButton();
        LoginPage.enterFirstName('Mariami');
        LoginPage.enterLastName('Sikharulidze');
        LoginPage.enterPersonalNumber('01001085015');
        LoginPage.enterPhone('555533559');
        LoginPage.enterEmail('mariamigmail.com');
        LoginPage.enterPassword('Ninutsa123@');
        LoginPage.enterConfirmPassword('Ninutsa123@');
        LoginPage.submitForm();
        LoginPage.verifyStayOnRegistrationPage();
    });

    it('Mandatory Field Checks in Registration Form', () => {
        LoginPage.clickRegisterButton();
        LoginPage.enterFirstName('Mariami');
        LoginPage.enterLastName('Sikharulidze');
        LoginPage.enterPersonalNumber('01001085015');
        // deliberately skipping phone
        LoginPage.enterEmail('mariami@gmail.com');
        LoginPage.enterPassword('Ninutsa123@');
        LoginPage.enterConfirmPassword('Ninutsa123@');
        LoginPage.submitForm();
        LoginPage.verifyStayOnRegistrationPage();
    })


    describe('Authorization Test Cases', () => {
        beforeEach(() => {
            cy.visit('https://gotechschool.com/qa/2025/final-project/');
        });

        it('Authorization Form Fields Visibility Verification', () => {
            LoginPage.clickLoginButton()
            cy.get('input#loginEmail[name="email"][type="email"]').should('exist');
            cy.get('input#loginPassword[name="password"][type="password"]').should('exist');
        })
        it('Successful Authorization with Valid Inputs', () => {

            cy.get('#registerLink').first().click();
            cy.get('#firstName').type('Mariami');
            cy.get('#lastName').type('Sikharulidze');
            cy.get('#personalNumber').type('01001085016');
            cy.get('#phone').type('555533559');
            cy.get('#email').click();
            cy.get('input[name="email"]:visible').type('sikharulidze19@gmail.com')
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

            cy.get('#loginEmail').type('sikharulidze19@gmail.com');
            cy.get('#loginPassword').type('Ninutsa123@');

            cy.get('#loginForm button[type="submit"]').click();

            cy.wait(1000);

            cy.get('#dashboardLink').should('be.visible');
            cy.get('#transferLink').should('be.visible');
            cy.get('#logoutLink').should('be.visible');
            cy.get('#accountsGrid').should('be.visible');

            cy.get('#loginLink').should('not.be.visible');
            cy.get('#registerLink').should('not.be.visible');

        })
        it('Login Attempt with Incorrect Data', () => {
            LoginPage.clickLoginButton()
            LoginPage.enterEmail('ninutsasikharulidze@gmail.com');
            LoginPage.enterPassword('Ninutsa123');
            LoginPage.submitLogin()
            LoginPage.verifyErrorMessage('არასწორი ელფოსტა ან პაროლი');
        })
        it('Forgot Password Link Functionality Test', () => {
            LoginPage.clickLoginButton()
            LoginPage.clickForgotPassword()
            LoginPage.enterResetEmail('ninutsasikharulidze@gmail.com');
            LoginPage.submitResetPassword();
            cy.contains('პაროლის აღდგენის ბმულის გაგზავნა').click();

        })
    })
})