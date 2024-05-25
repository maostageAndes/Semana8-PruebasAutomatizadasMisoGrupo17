import { LoginPage } from "../Page_Object/login_page";
import { PostPage } from "../Page_Object/post_page";
import { ForAllPages } from "../Page_Object/forAll_pages";
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage();
const postPage = new PostPage();
const fAP = new ForAllPages();
let url_naughty_string = "";
let url_sql_code = "";

let jsonData;

before("Cargar datos desde el archivo JSON", function() {
  /*A PRIORI*/
  //Uso de Mockaroo File
  cy.fixture('a-priori-post-title.json').as('apriori');
  cy.fixture('a-priori-post-content.json').as('aprioriContent');
  cy.fixture('a-priori-post-title-vacio.json').as('aprioriTitleVacio');
  cy.fixture('a-priori-post-content-vacio.json').as('aprioriContentVacio');

  /*PSEUDOALEATORIO*/
  //Uso de Mockaroo API
  // URL de la API Mockaroo
  let mockarooApiKey = '34229b30';
  url_naughty_string = `https://my.api.mockaroo.com/naughty_string_schema.json?key=${mockarooApiKey}`;
  url_sql_code = `https://my.api.mockaroo.com/Sql_Code_schema.json?key=${mockarooApiKey}`;


 /*PSEUDOALEATORIO*/
   //Uso de faker

 });
describe("Preubas creción de Post", function (){
     });
    
    beforeEach("login y creación de post", function () {
      loginPage.baseUrl();
      loginPage.enterUsername();
      loginPage.enterPassword();
      loginPage.clickLogin();
      postPage.navigateToPosts();
      postPage.createNewPost('ES07 Ghost Post', 'contenido ES07');
      postPage.publishPost();
      cy.contains('Back to dashboard').click();
      cy.contains('Post').click();

    });

    // Al editar un post añadiendo al campo Titulo el texto correcto.

  it ("43.ES07_A_PRIORI_Todo_ok", function(){
    postPage.selectPost('ES07 Ghost Post');
    postPage.editPost(this.apriori[0].Title, faker.lorem.sentence(10));
    postPage.updatePost();
    cy.contains('Post').click();
   });
 
 // Al editar un post añadiendo al campo Titulo el valor vacio o nada.
 
   it ("44.ES07_A_PRIORI_Vacio", function(){
    postPage.selectPost('ES07 Ghost Post');
    postPage.editPost(this.aprioriTitleVacio[0].Title, faker.lorem.sentence(5));
    postPage.updatePost();
    cy.contains('Post').click();
    
 });

 // Al editar un post añadiendo al campo Titulo con 1 caractere aleatorio

  it ("45.ES07_aleatoria_faker", function () {
   
      postPage.selectPost('ES07 Ghost Post');
      postPage.editPost(faker.string.alpha(1), faker.lorem.sentence(10));
      postPage.updatePost();
      cy.contains('Post').click();
    });

 //Al editar un post añadiendo al campo Titulo con 255 caracteres aleatorios

  it ("46.ES07_aleatoria_faker", function () {
   
      postPage.selectPost('ES07 Ghost Post');
      postPage.editPost(faker.string.alpha(255), faker.lorem.sentence(10));
      postPage.updatePost();
      cy.contains('Post').click();
    });

 //Al editar un post añadiendo al campo Titulo con 256 caracteres aleatorios genera error.

  it.only ("47.ES07_aleatoria_faker", function () {
   
    postPage.selectPost('ES07 Ghost Post');
    postPage.editPost(faker.string.alpha(256), faker.lorem.sentence(10));
    postPage.updatePost();
    cy.contains('Post').click();
  });

 //Al editar un post añadiendo al campo Titulo un emoji Si genera error

  it ("48.ES07_aleatoria_faker", function () {
   
    postPage.selectPost('ES07 Ghost Post');
    postPage.editPost(faker.internet.emoji(), faker.lorem.sentence(5));
    postPage.updatePost();
    cy.contains('Post').click();
  });

//Al editar un post añadiendo al campo Titulo una url no genera error

  it ("49.ES07_aleatoria_faker", function () {
  
  postPage.createNewPost(faker.image.animals(), faker.lorem.sentence(5));
  postPage.publishPost();
  cy.contains('Back to dashboard').click();
  cy.contains('Post').click();

});
// Al crear un post añadiendo al campo Contenido el texto correcto.

it  ("50.ES07_A_PRIORI_Todo_ok", function(){
  postPage.selectPost('ES07 Ghost Post');
  postPage.editPost(faker.lorem.sentence(5), this.aprioriContent[0].Content);
  postPage.updatePost();
  cy.contains('Post').click();
});

 // Al editar un post añadiendo al campo Contenido el valor vacio o nada.

  it ("51.ES07_A_PRIORI_Vacio", function(){
    postPage.selectPost('ES07 Ghost Post');
    postPage.editPost(faker.lorem.sentence(5), this.aprioriContentVacio[0].Content);
    postPage.updatePost();
    cy.contains('Post').click();
  
});

// Al editar un post añadiendo al campo Contenido con 1 caractere aleatorio

  it ("52.ES07_aleatoria_faker", function () {
   
  postPage.selectPost('ES07 Ghost Post');
  postPage.editPost(faker.lorem.sentence(10), faker.string.alpha(1));
  postPage.updatePost();
  cy.contains('Post').click();
});

//Al editar un post añadiendo al campo Contenido con 255 caracteres aleatorios

   it ("53.ES06_aleatoria_faker", function () {
   
    postPage.selectPost('ES07 Ghost Post');
    postPage.editPost(faker.lorem.sentence(10), faker.string.alpha(255));
    postPage.updatePost();
    cy.contains('Post').click();
  });


// Al editar un post añadiendo al campo Contenido con 256 caracteres aleatorios genera error.

it ("54.ES07_aleatoria_faker", function () {
   
  postPage.selectPost('ES07 Ghost Post');
  postPage.editPost(faker.lorem.sentence(10), faker.string.alpha(256));
  postPage.updatePost();
  cy.contains('Post').click();
});

//Al editar un post añadiendo al campo Contenido un emoji no genera error

it ("55.ES07_aleatoria_faker", function () {
   
  postPage.selectPost('ES07 Ghost Post');
  postPage.editPost(faker.lorem.sentence(5), faker.internet.emoji(20));
  postPage.updatePost();
  cy.contains('Post').click();
});

//Al editar un post añadiendo al campo Contenido una url no genera error

it ("56.ES07_aleatoria_faker", function () {
  
  postPage.selectPost('ES07 Ghost Post');
  postPage.editPost(faker.lorem.sentence(5), faker.image.animals(20));
  postPage.updatePost();
  cy.contains('Back to dashboard').click();
  cy.contains('Post').click();

});


it ("57.ES06_PSEUDOALEATORIO_Mockaroo_Datos invalidos_codigoSQL", function(){
   // Hacer la solicitud a la API
   cy.request(url_sql_code).then((response) => {
       
      // Guardar los datos en un alias
   cy.wrap(response.body).as('mockarooSqlCodeData');
    });

   cy.get('@mockarooSqlCodeData').then((data) => {
       data = [data]
       console.log("data=",data);
       const value = Object.values(data[0])[0]; // Segundo valor del objeto
       console.log("value=", value.title);
       postPage.selectPost('ES07 Ghost Post');
       postPage.editPost("e"+value.title, faker.lorem.sentence(5));
       postPage.updatePost();
       cy.contains('Back to dashboard').click();
       cy.wait(200);
       cy.contains('Post').click();
   });
})

it ("58.ES06_PSEUDOALEATORIO_Mockaroo_Datos invalidos_naughty_input", function(){
       // Hacer la solicitud a la API
       cy.request(url_naughty_string).then((response) => {
        
         // Guardar los datos en un alias
       cy.wrap(response.body).as('mockarooNaugthyStringData');
       });

   cy.get('@mockarooNaugthyStringData').then((data) => {
       data = [data]
       console.log("data=", data)
       const value = Object.values(data[0])[0]; // Segundo valor del objeto
       console.log("value=", value.title);
       postPage.selectPost('ES07 Ghost Post');
       postPage.editPost("e"+value.title, faker.lorem.sentence(5));
       postPage.updatePost();
       cy.contains('Back to dashboard').click();
       cy.contains('Post').click();
   });

});

