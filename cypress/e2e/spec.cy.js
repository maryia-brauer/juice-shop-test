import HomePage from "./pageObjects/Home.page";
import LoginPage from "./pageObjects/Login.page";
import RegistrationPage from "./pageObjects/Registration.page";
import SearchResultsPage from "./pageObjects/SearchResults.page";

describe("Juice-Shop scenarios", () => {
  context("With no login", () => {
    beforeEach(() => {
      HomePage.visit();
      //click on dismiss button 
      HomePage.dismissButton.click();
      //click on me want it button
      HomePage.meWantItButton.click();
    });
    it("Registration", () => {
      //Click Account
      HomePage.accountButton.click();
      //Click Login
      HomePage.loginButton.click();
      //Click Not yet customer?
      LoginPage.notYetCustomerLink.click();
      //Set Email (generate random email address)
      RegistrationPage.emailField.type("test" + Math.floor(Math.random() * 100000) + "@test.com");
      //Set Password
      RegistrationPage.passwordField.type("12345678");
      //Set Repeat password
      RegistrationPage.repeatPasswordField.type("12345678");
      //Select Security - question
      //cy.get("#mat-select-2").click();
      //cy.get("#mat-option-3").click();
      RegistrationPage.securityQuestionComboBox.click();
      RegistrationPage.securityQuestionComboBoxOptions.contains(" Your favorite book?").click();
      //Set Secuity - question answer
      RegistrationPage.securityAnswerField.type("test");
      //Click Register
      RegistrationPage.registrationButton.click()
      //Validate toast message
      LoginPage.toastMessage.should(
        "have.text",
        "Registration completed successfully. You can now log in.");
    });
  });

  context("With login", () => {
    beforeEach(() => {
      LoginPage.visit();
      //click on dismiss button 
      LoginPage.dismissButton.click();
      //click on me want it button
      LoginPage.meWantItButton.click();
      LoginPage.logInto("demo", "demo");
    });
    it("Search for lemon", () => {
      //Click on the search icon
      HomePage.seacrhIcon.click();
      //Type in the value lemon +enter press
      HomePage.searchField.type("lemon {enter}");
      //open Lemon Juice item
      SearchResultsPage.product.contains("Lemon Juice").click();
      //validate that we see "Lemon Juice (500ml)"
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml)");
    });

    it("Search 500ml", () => {
      //Click on search icon
      HomePage.seacrhIcon.click();
      //Type in the value 500ml + enter key
      HomePage.searchField.type("500ml {enter}");
      //OPen Eggfruit Juice (500ml)
      SearchResultsPage.product.contains("Eggfruit Juice").click();
      //Validate title
      SearchResultsPage.header.should("have.text", "Eggfruit Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
      //Open Lemon Juice (500ml)
      SearchResultsPage.product.contains("Lemon Juice").click();
      //Validate title
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
      //OPen Strawberry Juice (500ml)
      SearchResultsPage.product.contains("Strawberry Juice").click();
      //Validate title
      SearchResultsPage.header.should("have.text", "Strawberry Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
    })

    it("Filter product amount", () => {
      //Select 12
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("12").click();
      //Validate that we see 12 items
      HomePage.product.should("have.length", "12");
      //Select 24
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("24").click();
      //Validate that we see 24 items
      HomePage.product.should("have.length", "24");
      //Select 36
      HomePage.itemsPerPageMenu.click();
      HomePage.menuOptions.contains("36").click();
      //Validate that we see 35 utems
      HomePage.product.should("have.length", "35");

    })

    it.only("Filter product amount", () => {
      //Click on seqrch icon
      HomePage.seacrhIcon.click();
      //Type in the value king + press enter
      HomePage.searchField.type("king {enter}");
      //OPen king of the hill
      SearchResultsPage.product.contains("King of the Hill").click();
      //OWASP Juice Shop "King of the Hill" Facemask
      SearchResultsPage.header.should("have.text", `OWASP Juice Shop "King of the Hill" Facemask`);
      //Click on reviews
      cy.wait(200); //beacuse cypress is so fast 
      SearchResultsPage.expandReviews.click();
      //Validate K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      SearchResultsPage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    })
  });
});