import { LoginPage } from "../Page_Object/login_page";
import { AccionesTag } from "../Page_Object/tag_page";
import { ForAllPages } from "../Page_Object/forAll_pages";


const loginPage = new LoginPage();
const accTag = new AccionesTag();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero crear un nuevo Tag con el name "ES12 tag" y publicarla
 

it ("Login", function (){
  //Given --navegar a la web admin de ghost
  loginPage.baseUrl();

  //When --hacer login, crear tag
  loginPage.enterUsername();
  loginPage.enterPassword();
  fAP.screenShoot('ES12/01_Escenario_12_pruebas_login');
  loginPage.clickLogin();
  accTag.crearTag("ES12 tag");
  fAP.screenShoot('ES12/02_Escenario_12_pruebas_crear');

  //Then --confirmar que se ha creado un nuevo Tag llamado “ES 12 tag”
  accTag.verificarTitleTag("ES12 tag");
  fAP.screenShoot('ES12/03_Escenario_12_pruebas_listado');
  
});
