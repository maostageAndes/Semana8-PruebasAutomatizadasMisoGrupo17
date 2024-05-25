import { LoginPage } from "../Page_Object/login_page";
import { PostPage } from "../Page_Object/post_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const postPage = new PostPage();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero duplicar un post

it ("Escenario_09_pruebas", function () {

   //Given --navegar a la web admin de ghost
   loginPage.baseUrl();
   fAP.screenShoot('ES10/01_Escenario_10_pruebas_pantalla_inicio');
   
   //When --hacer login, crear post, publicar post y duplicar post
   loginPage.enterUsername();
   loginPage.enterPassword();
   fAP.screenShoot('ES10/02_Escenario_10_pruebas_login');
   loginPage.clickLogin();
   postPage.navigateToPosts();
   fAP.screenShoot('ES10/03_Escenario_10_pruebas_Web');
   postPage.createNewPost("ES10 Ghost Post", "contenido ES10");
   fAP.screenShoot('ES10/04_Escenario_10_pruebas_post');
   postPage.publishPost();
   fAP.screenShoot('ES10/05_Escenario_10_pruebas_publicado');
   postPage.verifyPost('ES09 Ghost Post');
   postPage.duplicatePost("ES10 Ghost Post");
   fAP.screenShoot('ES10/06_Escenario_10_pruebas_duplicado');

   //Then --confirmar que se ha duplicado el post "ES10 Ghost Post (Copy)"
   postPage.verifyPostlist("ES10 Ghost Post")
   fAP.screenShoot('ES10/07_Escenario_10_pruebas_duplicado_lista');
 });