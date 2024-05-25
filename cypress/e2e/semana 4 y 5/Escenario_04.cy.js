import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero agregar el estado de “Feature” a una pagina que acabo de crear

  it("Escenario_04_pruebas", function () {

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();

    //When --hacer login, crear pagina, poner feature en una pagina
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES04/01_Escenario_04_pruebas_login');
    loginPage.clickLogin();
    creaPagina.crearPagina('ES04 Ghost page add Feature','contenido ES04');
    fAP.screenShoot('ES04/02_Escenario_04_pruebas_creada');
    creaPagina.publicarPagina();
    fAP.screenShoot('ES04/03_Escenario_04_pruebas_publicada');
    creaPagina.featurePagina('ES04 Ghost page add Feature'); 
    fAP.screenShoot('ES04/04_Escenario_04_pruebas_feature');     

    //Then --confirmar que la pagina “ES04 Ghost page add Feature” tiene la característica de feature activada
    creaPagina.confirmarFeaturePagina('ES04 Ghost page add Feature');
    fAP.screenShoot('ES04/05_Escenario_04_pruebas_feature_lista'); 
     
    
  });