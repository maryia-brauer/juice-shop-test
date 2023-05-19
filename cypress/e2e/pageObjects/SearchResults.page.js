import BasePage from "./Base.page";
class SearchResultsPage extends BasePage {
    static get url() {
        return "#/search";
    }

    static get header() {
        return cy.get("h1");
    }

    static get closeProductButton() {
        return cy.get(".close-dialog");
    }

    static get expandReviews() {
        return cy.get(".mat-expansion-indicator");
    }

    static get reviewText() {
        return cy.get(".review-text");
    }
}

export default SearchResultsPage;