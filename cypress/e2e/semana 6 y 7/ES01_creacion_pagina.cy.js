import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";
import { faker } from "@faker-js/faker";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();
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

describe("Pruebas creacion de pagina", function () {
  function posRam() {
    let ps = Math.floor(Math.random() * 100) + 1;
    return ps;
  }

  beforeEach("login", function () {
    loginPage.baseUrl();
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
  });

  

  //todo ok
  it("1.ES01 a-priori title validos y contenido validos", function () {
    creaPagina.crearPagina(
      this.apriori[posRam()].title,
      this.apriori[posRam()].contend
    );
    creaPagina.publicarPagina();
  });

  //todo ok
  it("2.ES01 a-priori title vacio y contenido validos", function () {
    creaPagina.crearPaginaTituloVacio(this.apriori[posRam()].contend);
    creaPagina.publicarPagina();
  });

  //todo ok
  it("3.ES01 faker title frontera inferior y contenido validos", function () {
    creaPagina.crearPagina(faker.string.alpha(1), faker.lorem.sentence(5));
    creaPagina.publicarPagina();
  });

  //todo ok
  it("4.ES01 faker title frontera superior y contenido validos", function () {
    let pag =faker.string.alpha(255);
    creaPagina.crearPagina(pag, faker.lorem.sentence(5));
    creaPagina.publicarPagina();
    
  });

  //Falla cuando al crear una pagina se ponen mas de 255 caracteres en el title no aparece el boton publicar pero no retroalimenta el usuario con ninguna info
  it("5.ES01 faker title frontera superior +1 y contenido validos", function () {
    creaPagina.crearPagina(faker.string.alpha(256), faker.lorem.sentence(5));
    creaPagina.publicarPagina();
  });

  //Falla cuando al crear una pagina se ponen un emoji en el title no aparece el boton publicar pero no retroalimenta el usuario con ninguna info
  it("6.ES01 faker title emoji y contenido validos", function () {
    creaPagina.crearPagina(faker.internet.emoji(), faker.lorem.sentence(5));
    creaPagina.publicarPagina();
  });

  //todo ok
  it("7.ES01 faker title url y contenido validos", function () {
    creaPagina.crearPagina(faker.image.animals(), faker.lorem.sentence(5));
    creaPagina.publicarPagina();
  });

  //todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
  it("8.ES01 PSEUDOALEATORIO Mockaroo title codigoSQL y contenido validos", function () {
    cy.request(url_sql_code).then((response) => {
      cy.wrap(response.body).as("mockarooSqlDataPage");
    });

    cy.get("@mockarooSqlDataPage").then((data) => {
      data = [data];
      console.log("data=", data);
      const value = Object.values(data[0])[0]; 
      creaPagina.crearPagina("e"+ value.title, "e"+ value.contend);
      creaPagina.publicarPagina();
    });
  });


//todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
it("9.ES01 PSEUDOALEATORIO Mockaroo title naugthy y contenido validos", function () {
  cy.request(url_naughty_string).then((response) => {
    cy.wrap(response.body).as("mockarooNaughtyDataPage");
  });

  cy.get("@mockarooNaughtyDataPage").then((data) => {
    data = [data];
    console.log("data=", data);
    const value = Object.values(data[0])[0]; 
    creaPagina.crearPagina("e"+value.title, "e"+value.contend);
    creaPagina.publicarPagina();
  });
});

  

  //falla con caracteres vacios error de cypress no de la pagina
  it("10.ES01 a-priori  contenido vacio y title validos", function () {
    creaPagina.crearPaginaContenidoVacio(this.apriori[posRam()].title);
    creaPagina.publicarPagina();
  });

  //todo ok
  it("11.ES01 faker contenido  frontera inferior y  title validos", function () {
    creaPagina.crearPagina(faker.lorem.sentence(3), faker.string.alpha(1));
    creaPagina.publicarPagina();
  });

  //todo ok
  it("12.ES01 faker contenido superior a 2000 caracteres y title validos", function () {
    creaPagina.crearPagina(faker.lorem.sentence(3), faker.string.alpha(2001));
    creaPagina.publicarPagina();
  });

  //todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
  it("13.ES01 faker contenido caracteres aleatorios y title validos", function () {
    creaPagina.crearPagina(faker.lorem.sentence(3),"e"+faker.string.sample(255));
    creaPagina.publicarPagina();
  });

  //todo ok
  it("14.ES01 faker contenido emoji y title validos", function () {
    creaPagina.crearPagina(faker.lorem.sentence(3), faker.internet.emoji());
    creaPagina.publicarPagina();
  });

  //todo ok
  it("15.ES01 faker contenido url y title validos", function () {
    creaPagina.crearPagina(faker.lorem.sentence(3), faker.image.animals());
    creaPagina.publicarPagina();
  });

//todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
it("16.ES01 PSEUDOALEATORIO Mockaroo contenido codigoSQL y title validos", function () {
  cy.request(url_sql_code).then((response) => {
    cy.wrap(response.body).as("mockarooSqlDataPage");
  });

  cy.get("@mockarooSqlDataPage").then((data) => {
    data = [data];
    console.log("data=", data);
    const value = Object.values(data[0])[0]; 
    creaPagina.crearPagina(faker.lorem.sentence(5),"e"+value.contend);
    creaPagina.publicarPagina();
  });
});

//todo ok pero se le tiene que agregar un caracter alpha antes de los caracteres para que cypress no arroje error
it("17.ES01 PSEUDOALEATORIO Mockaroo contenido naugthy y title validos", function () {
  cy.request(url_naughty_string).then((response) => {
    cy.wrap(response.body).as("mockarooNaughtyDataPage");
  });

  cy.get("@mockarooNaughtyDataPage").then((data) => {
    data = [data];
    console.log("data=", data);
    const value = Object.values(data[0])[0]; 
    creaPagina.crearPagina(faker.lorem.sentence(3),"e"+ value.contend);
    creaPagina.publicarPagina();
  });
});


});
