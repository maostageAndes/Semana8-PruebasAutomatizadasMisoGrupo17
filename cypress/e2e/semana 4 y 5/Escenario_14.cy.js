import { LoginPage } from "../Page_Object/login_page";
import { AccionesTag } from "../Page_Object/tag_page";
import { ForAllPages } from "../Page_Object/forAll_pages";


const loginPage = new LoginPage();
const accTag = new AccionesTag();
const fAP = new ForAllPages();

 
//Escenario: Como usuario quiero borrar un tag “Es14 borrar” de mi lista de tags

it ("Escenario_014_pruebas", function () {

  //Given --navegar a la web admin de ghost
  loginPage.baseUrl();

  //When --hacer login, crear tag, borrar tag
  loginPage.enterUsername();
  loginPage.enterPassword();
  fAP.screenShoot('ES14/01_Escenario_14_pruebas_login');
  loginPage.clickLogin();
  accTag.crearTag("ES14 tag borrar");
  fAP.screenShoot('ES14/02_Escenario_14_pruebas_crear');
  accTag.borrarTag("ES14 tag borrar");
  fAP.screenShoot('ES14/03_Escenario_14_pruebas_borrar');

   
  //Then --confirmar que se ha eliminado el Tag llamado “Es14 borrar”
  accTag.verificarBorrarTag("ES14 tag borrar");
  fAP.screenShoot('ES14/04_Escenario_14_pruebas_lista');
  

});