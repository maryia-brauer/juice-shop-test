import BasePage from "./Base.page";
class LoginPage extends BasePage {
    static get url() {
        return "#/login";
    }

    static get notYetCustomerLink() {
        return cy.get("#newCustomerLink");
    }
    static get toastMessage() {
        return cy.get(".mat-simple-snack-bar-content");
    }

    static logInto(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}

export default LoginPage;