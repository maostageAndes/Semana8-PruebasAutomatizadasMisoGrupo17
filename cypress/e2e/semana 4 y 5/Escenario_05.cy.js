import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero duplicar a una pagina que acabo de crear

  it("Escenario_05_pruebas", function () {

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();

    //When --hacer login, crear pagina, duplicar pagina
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES05/01_Escenario_05_pruebas_login');
    loginPage.clickLogin();
    creaPagina.crearPagina('ES05 Ghost page duplicate','contenido inicial ES05');
    fAP.screenShoot('ES05/02_Escenario_05_pruebas_creada');
    creaPagina.publicarPagina();
    fAP.screenShoot('ES05/03_Escenario_05_pruebas_publicada');
    creaPagina.duplicarPagina('ES05 Ghost page duplicate');
    fAP.screenShoot('ES05/04_Escenario_05_pruebas_duplicada');
                
    //Then --confirmar que la página “ES05 Ghost page add Feature” tiene la característica de feature activada
    creaPagina.verificarPagina('ES05 Ghost page duplicate (Copy)');  
    fAP.screenShoot('ES05/05_Escenario_05_pruebas_duplicada_lista');
    
  });