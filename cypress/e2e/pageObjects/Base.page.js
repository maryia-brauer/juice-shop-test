class BasePage {
    static get url() {
        return "/#/login";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get dismissButton() {
        return cy.get(".close-dialog");
    }

    static get meWantItButton() {
        return cy.get(".cc-dismiss");
    }

    static get emailField() {
        return cy.get("#email");
    }

    static get passwordField() {
        return cy.get("#password");
    }
    static get loginButton() {
        return cy.get("#loginButton");
    }

    static get itemsPerPageMenu() {
        return cy.get("mat-select[aria-label='Items per page:']");
    }

    static get menuOptions() {
        return cy.get(".mat-option-text");
    }
    static get product() {
        return cy.get(".product");
    }

}

export default BasePage;