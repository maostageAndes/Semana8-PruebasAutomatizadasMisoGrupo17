import { LoginPage } from "../Page_Object/login_page";
import { PostPage } from "../Page_Object/post_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const postPage = new PostPage();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero editar el titulo de un post que he creado con el nuevo titulo
//Escenario: subtitulo “ES07 Ghost Post Editado” y publicarlo

  it ("Escenario_07_pruebas", function (){

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();
    fAP.screenShoot('ES07/01_Escenario_07_pruebas_pantalla_inicio');

    //When --hacer login, crear post, publicar post y editar post
      loginPage.enterUsername();
      loginPage.enterPassword();
      fAP.screenShoot('ES07/02_Escenario_07_pruebas_login');
      loginPage.clickLogin();
      postPage.navigateToPosts();
      fAP.screenShoot('ES07/03_Escenario_07_pruebas_Web');
      postPage.createNewPost('ES07 Ghost Post', 'contenido ES07');
      fAP.screenShoot('ES07/04_Escenario_07_pruebas_post');
      postPage.publishPost();
      fAP.screenShoot('ES07/05_Escenario_07_pruebas_publicado');
      postPage.verifyPost('ES07 Ghost Post');
      fAP.screenShoot('ES07/06_Escenario_07_pruebas_verificado');
      postPage.selectPost('ES07 Ghost Post');
      postPage.editPost('ES07 Ghost Post Editado','contenido ES07 Editado');
      fAP.screenShoot('ES07/07_Escenario_07_pruebas_editado');
      postPage.updatePost();
      fAP.screenShoot('ES07/08_Escenario_07_pruebas_actualizado');

     //Then --confirmar que hay una pagina publicada con el title " ES07 Ghost Post Editado "
      postPage.verifyPostlist('ES07 Ghost Post Editado', 'contenido ES07 Editado');
      fAP.screenShoot('ES07/09_Escenario_07_pruebas_editada_lista');
  });
