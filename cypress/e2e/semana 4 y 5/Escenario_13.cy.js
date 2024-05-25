import { LoginPage } from "../Page_Object/login_page";
import { AccionesTag } from "../Page_Object/tag_page";
import { ForAllPages } from "../Page_Object/forAll_pages";


const loginPage = new LoginPage();
const accTag = new AccionesTag();
const fAP = new ForAllPages();
 
//Escenario: Como usuario quiero editar el name de un tag que he creado con el nuevo name “ES13 tag Editado” y publicarla

it ("Escenario_013_pruebas", function () {

  //Given --navegar a la web admin de ghost
  loginPage.baseUrl();

  //When --hacer login, crear tag, editar tag
  loginPage.enterUsername();
  loginPage.enterPassword();
  fAP.screenShoot('ES13/01_Escenario_13_pruebas_login');
  loginPage.clickLogin();
  accTag.crearTag("ES13 tag");
  fAP.screenShoot('ES13/02_Escenario_13_pruebas_crear');
  accTag.editarTitleTag("ES13 tag","ES13 tag Editado");
  fAP.screenShoot('ES13/03_Escenario_13_pruebas_editado');

  //Then --confirmar que se ha editado el Tag llamado “ES13 tag Editado”
  accTag.verificarTitleTag("ES13 tag Editado");
  fAP.screenShoot('ES13/04_Escenario_13_pruebas_listado');
  
});
