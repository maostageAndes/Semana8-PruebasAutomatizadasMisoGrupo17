import { LoginPage } from "../Page_Object/login_page";
import { ForAllPages } from "../Page_Object/forAll_pages";
import { faker } from "@faker-js/faker";

const loginPage = new LoginPage();

before(function () {
  cy.fixture("a-priori-login.json").as("apriori");
});

describe("Pruebas login", function () {
  it("93.ES16 login con clave incorrecta", function () {
    loginPage.baseUrl();
    loginPage.enterUsername();
    cy.get("#password").type(faker.string.alpha(6));
    loginPage.clickLogin();
    cy.get(".main-error").should("contain", "Your password is incorrect");
  });

  it("94.ES16 login con email incorrecto", function () {
    loginPage.baseUrl();
    cy.get("#identification").type(faker.internet.email());
    loginPage.enterPassword();
    loginPage.clickLogin();
    cy.get(".main-error").should(
      "contain",
      "There is no user with that email address."
    );
  });

  it("95.ES16 login todos los campos vacios", function () {
    loginPage.baseUrl();
    loginPage.clickLogin();
    cy.get(".main-error").should(
      "contain",
      "Please fill out the form to sign in"
    );
  });

  it("96.ES16 login email vacio", function () {
    loginPage.baseUrl();
    loginPage.enterPassword();
    loginPage.clickLogin();
    cy.get(".main-error").should(
      "contain",
      "Please fill out the form to sign in"
    );
  });
});
