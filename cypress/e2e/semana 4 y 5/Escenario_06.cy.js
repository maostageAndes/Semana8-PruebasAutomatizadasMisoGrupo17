import { LoginPage } from "../Page_Object/login_page";
import { PostPage } from "../Page_Object/post_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const postPage = new PostPage();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero crear un post con el titulo “ES01 Ghost Page” y publicarla

  it ("Escenario_06_pruebas", function () {

    //Given --navegar a la web admin de ghost
      loginPage.baseUrl();
      fAP.screenShoot('ES06/01_Escenario_06_pruebas_pantalla_inicio');

    //When --hacer login, crear post, publicar post
      loginPage.enterUsername();
      loginPage.enterPassword();
      fAP.screenShoot('ES06/02_Escenario_06_pruebas_login');
      loginPage.clickLogin();
      postPage.navigateToPosts();
      fAP.screenShoot('ES06/03_Escenario_06_pruebas_Web');
      postPage.createNewPost('ES06 Ghost page','contenido ES06');
      fAP.screenShoot('ES06/04_Escenario_06_pruebas_post');
      postPage.publishPost();
      fAP.screenShoot('ES06/05_Escenario_06_pruebas_publicar');

    //Then --confirmar que hay un post publicado con el title “ES01 Ghost post”
      postPage.verifyPost('ES06 Ghost page');
      fAP.screenShoot('ES06/06_Escenario_06_pruebas_lista_post');
  });