import BasePage from "./Base.page";
class HomePage extends BasePage {
    static get url() {
        return "/";
    }

    static get accountButton() {
        return cy.get("#navbarAccount");
    }

    static get loginButton() {
        return cy.get("#navbarLoginButton");
    }
    static get seacrhIcon() {
        return cy.get("#searchQuery");
    }

    static get searchField() {
        return cy.get("#mat-input-0");
    }
}

export default HomePage;