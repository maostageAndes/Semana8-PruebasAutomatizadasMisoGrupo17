import { LoginPage } from "../Page_Object/login_page";
import { PostPage } from "../Page_Object/post_page";
import { AccionesTag } from "../Page_Object/tag_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const postPage = new PostPage();
const accTag = new AccionesTag();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero borrar una pagina de mi lista de paginas

it ("Escenario_09_pruebas", function () {

   //Given --navegar a la web admin de ghost
   loginPage.baseUrl();
   fAP.screenShoot('ES09/01_Escenario_09_pruebas_pantalla_inicio');

   //When --hacer login, crear post, publicar post, añadir tag
   loginPage.enterUsername();
   loginPage.enterPassword();
   loginPage.clickLogin();
   fAP.screenShoot('ES09/01_Escenario_02_pruebas_login');
   postPage.navigateToPosts();
   fAP.screenShoot('ES09/03_Escenario_09_pruebas_Web');
   postPage.createNewPost("ES09 Ghost Post", "contenido ES09");
   fAP.screenShoot('ES09/04_Escenario_09_pruebas_post');
   postPage.publishPost();
   fAP.screenShoot('ES09/05_Escenario_09_pruebas_publicar');
   postPage.verifyPost('ES09 Ghost Post');
   accTag.crearTag('ES09 Tag');
   fAP.screenShoot('ES09/06_Escenario_06_pruebas_crear_tag');
   postPage.addTagToPost('ES09 Ghost Post', 'ES09 Tag');
   fAP.screenShoot('ES09/07_Escenario_06_pruebas_añadir_tag');
  

   //Then --confirmar en el post que se ha añadido el tag "ES09 Tag"
   postPage.selectPost('ES09 Ghost Post');
   postPage.verifyTagInPost('ES09 Tag');
   fAP.screenShoot('ES09/08_Escenario_06_pruebas_verificar_tag');
 });
