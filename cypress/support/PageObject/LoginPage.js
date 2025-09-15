class LoginPage {
    loginButton = '.btn.btn-secondary';
    emailInput = 'input[name="email"]';
    passwordInput = 'input[name="password"]';
    submitButton = '.btn.btn-primary';
    errorMessage = 'div.notification.error';
    forgotPasswordLink = 'პაროლის აღდგენა';
    resetEmailInput = '#resetEmail';
    resetSubmitButton = '#forgotPasswordForm button';
    registerButton = '.btn.btn-primary';
    firstNameInput = 'input[name="firstName"]';
    lastNameInput = 'input[name="lastName"]';
    personalNumberInput = 'input[name="personalNumber"]';
    phoneInput = 'input[name="phone"]';
    emailInput = 'input[name="email"]:visible';
    passwordInput = 'input[name="password"]:visible';
    confirmPasswordInput = 'input[name="confirmPassword"]';
    registerForm = '#registerForm';


    clickLoginButton() {
        cy.get(this.loginButton).first().click();
    }
    enterEmail(email) {
        cy.get(this.emailInput).first().type(email);
    }
    enterPassword(password) {
        cy.get(this.passwordInput).first().type(password)
    }
    submitLogin() {
        cy.get(this.submitButton).eq(1).click({
            force: true
        })
    }
    verifyErrorMessage(text) {
        cy.get(this.errorMessage, {
                timeout: 15000
            })
            .should('be.visible')
            .and('contain.text', text);
    }
    clickForgotPassword() {
        cy.contains(this.forgotPasswordLink).click();
    }
    enterResetEmail(email) {
        cy.get(this.resetEmailInput).type(email);
    }
    submitResetPassword() {
        cy.contains('პაროლის აღდგენის ბმულის გაგზავნა').click();

    }
    clickRegisterButton() {
        cy.get(this.registerButton).first().click();
    }

    enterFirstName(name) {
        cy.get(this.firstNameInput).type(name);
    }
    enterLastName(lastname) {
        cy.get(this.lastNameInput).type(lastname);
    }

    enterPersonalNumber(number) {
        cy.get(this.personalNumberInput).type(number);
    }

    enterPhone(phone) {
        cy.get(this.phoneInput).type(phone);
    }

    enterEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    enterConfirmPassword(password) {
        cy.get(this.confirmPasswordInput).type(password);
    }

    submitForm() {
        cy.get(this.registerForm).within(() => {
            cy.contains('რეგისტრაცია').click();
        });
    }
    verifySuccess() {
        cy.contains('რეგისტრაცია წარმატებით დასრულდა!', {
            timeout: 4000
        }).should('be.visible');
        cy.contains('სისტემაში შესვლა', {
            timeout: 4000
        }).should('be.visible');
    }
    verifyPasswordRequirementsError() {
        cy.contains('პაროლი არ შეესაბამება მოთხოვნებს', {
            timeout: 4000
        }).should('be.visible');
    }

    verifyPasswordsMismatchError() {
        cy.contains('პაროლები არ ემთხვევა', {
            timeout: 4000
        }).should('be.visible');
    }

    verifyStayOnRegistrationPage() {
        cy.contains('ახალი ანგარიშის შექმნა', {
            timeout: 4000
        }).should('be.visible');
    }


}

export default new LoginPage();