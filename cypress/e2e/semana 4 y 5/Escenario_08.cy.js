import { LoginPage } from "../Page_Object/login_page";
import { PostPage } from "../Page_Object/post_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const postPage = new PostPage();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero borrar una pagina de mi lista de paginas

  it ("Escenario_08_pruebas", function (){

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();
    fAP.screenShoot('ES08/01_Escenario_08_pruebas_pantalla_inicio');
    //When --hacer login, crear post, publicar post, borrar post
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES08/02_Escenario_07_pruebas_login');
    loginPage.clickLogin();
    postPage.navigateToPosts();
    fAP.screenShoot('ES08/03_Escenario_08_pruebas_Web');
    postPage.createNewPost("ES08 Ghost Post", "contenido ES08");
    fAP.screenShoot('ES08/04_Escenario_08_pruebas_post');
    postPage.publishPost();
    fAP.screenShoot('ES08/05_Escenario_08_pruebas_publicado');
    postPage.verifyPost("ES08 Ghost Post");
    fAP.screenShoot('ES08/06_Escenario_08_pruebas_verificado');
    postPage.deletePost("ES08 Ghost Post");
    fAP.screenShoot('ES08/07_Escenario_08_pruebas_eliminado');

  //Then --confirmar en la lista de post que no existe el post “ES08 Ghost Post”
    postPage.verifyPostNotPresent("ES08 Ghost Post");
    fAP.screenShoot('ES08/08_Escenario_08_pruebas_lista');
  });
