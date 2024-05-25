import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";
import { faker } from "@faker-js/faker";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();
// const ramdomTitle = faker.string.sample();
// const ramdomContent = faker.lorem.sentence(100);
let url_naughty_string = "";
let url_sql_code = "";

before(function () {
  cy.fixture("a-priori-page.json").as("apriori");

  /*PSEUDOALEATORIO*/
  //Uso de Mockaroo API
  // URL de la API Mockaroo
  let mockarooApiKey = "49f09f80";
  url_naughty_string = `https://my.api.mockaroo.com/naughty-data-page.json?key=${mockarooApiKey}`;
  url_sql_code = `https://my.api.mockaroo.com/sql-data-page.json?key=${mockarooApiKey}`;

  
});

describe("Pruebas edicion pagina", function () {
  function posRam() {
    let ps = Math.floor(Math.random() * 100) + 1;
    return ps;
  }

  beforeEach("login", function () {
    loginPage.baseUrl();
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
    creaPagina.crearPagina(this.apriori[1].title, this.apriori[1].contend);
    creaPagina.publicarPagina();
  });

  //todo ok
  it("18.ES02 a-priori Editar página title validos", function () {
    creaPagina.editarPagina(
      this.apriori[1].title,
      this.apriori[posRam()].title
    );
  });

  //todo ok
  it("19.ES02 a-priori Editar página title vacio", function () {
    creaPagina.editarPaginaTitleVacio(this.apriori[1].title);
  });

  //todo ok
  it("20.ES02 faker Editar página title frontera inferior", function () {
    creaPagina.editarPagina(this.apriori[1].title, faker.string.alpha(1));
  });

  //todo ok
  it("21.ES02 faker Editar página title frontera superior", function () {
    creaPagina.editarPagina(this.apriori[1].title, faker.string.alpha(255));
    cy.wait(2000);
    cy.get("[id^=ember]").find("textarea").clear();
    cy.contains("Update").click();
  });

  //Falla cuando al editar una pagina se ponen mas de 255 caracteres al intentear publicarla sale una alerta indicando el limite
  it("22.ES02 faker Editar página title frontera superior +1", function () {
    creaPagina.editarPagina(this.apriori[1].title, faker.string.alpha(256));
    cy.wait(2000);
    cy.get("[id^=ember]").find("textarea").clear();
    cy.contains("Update").click();
  });

  //todo ok, al editar el title a la pagina la deja update porque usa la url que tenia al crear la pagina
  it("23.ES02 faker Editar página title emoji", function () {
    creaPagina.editarPagina(this.apriori[1].title, faker.internet.emoji());
  });

  //todo ok
  it("24.ES02 faker Editar página title url", function () {
    creaPagina.editarPagina(this.apriori[1].title, faker.image.animals());
  });

  //todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
  it("25.ES02 PSEUDOALEATORIO Mockaroo Editar página title codigoSQL ", function () {
    cy.request(url_sql_code).then((response) => {
      cy.wrap(response.body).as("mockarooSqlDataPage");
    });

    cy.get("@mockarooSqlDataPage").then((data) => {
      data = [data];
      console.log("data=", data);
      const value = Object.values(data[0])[0];
      creaPagina.editarPagina(this.apriori[1].title, "e" + value.title);
    });
  });

  //todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
  it("26.ES02 PSEUDOALEATORIO Mockaroo Editar página title naugthy ", function () {
    cy.request(url_naughty_string).then((response) => {
      cy.wrap(response.body).as("mockarooNaughtyDataPage");
    });

    cy.get("@mockarooNaughtyDataPage").then((data) => {
      data = [data];
      console.log("data=", data);
      const value = Object.values(data[0])[0]; 
      creaPagina.editarPagina(this.apriori[1].title, "e"+ value.title);
    });
  });

});
