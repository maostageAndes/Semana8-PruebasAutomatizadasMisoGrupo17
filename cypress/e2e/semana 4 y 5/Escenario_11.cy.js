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
   fAP.screenShoot('ES11/01_Escenario_11_pruebas_pantalla_inicio');

   //When --hacer login, crear post, publicar post y modificar el acceso de ese post
   loginPage.enterUsername();
   loginPage.enterPassword();
   fAP.screenShoot('ES11/02_Escenario_11_pruebas_login');
   loginPage.clickLogin();
   postPage.navigateToPosts();
   fAP.screenShoot('ES11/03_Escenario_11_pruebas_Web');
   postPage.createNewPost("ES11 Ghost Post", "contenido ES11");
   fAP.screenShoot('ES11/04_Escenario_11_pruebas_post');
   postPage.publishPost();
   fAP.screenShoot('ES11/05_Escenario_11_pruebas_publicado');
   postPage.verifyPost("ES11 Ghost Post")
   postPage.changeAccessToPost("ES11 Ghost Post", "Members only");
   fAP.screenShoot('ES11/06_Escenario_10_pruebas_cambio_acceso');

   //Then --confirmar que se ha modificado el acceso del post "ES10 Ghost Post (Copy)"
   postPage.verifyPostlist("ES11 Ghost Post")
   fAP.screenShoot('ES11/07_Escenario_10_pruebas_modifcado_acceso');
 });