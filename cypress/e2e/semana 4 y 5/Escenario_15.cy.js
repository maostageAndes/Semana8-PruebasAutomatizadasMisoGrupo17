import { LoginPage } from "../Page_Object/login_page";
import { AccionesSettings } from "../Page_Object/settings_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const cambioSetting = new AccionesSettings();
const fAP = new ForAllPages();


//Escenario: Como usuario quiero cambiar el site title por “ES15 Proyecto Miso grupo 17”

  it("Escenario_015_pruebas", function () {

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();

    //When --hacer login, 
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES15/01_Escenario_15_pruebas_login');
    loginPage.clickLogin();
    cambioSetting.cambiarNombreGhost('ES15 Proyecto Miso grupo 17');
    fAP.screenShoot('ES15/02_Escenario_15_pruebas_cambio');
    
    //Then --confirmar que hay una pagina publicada con el title “ES01 Ghost page”
    cambioSetting.verificarNombreGhost('ES15 Proyecto Miso grupo 17');
    fAP.screenShoot('ES15/03_Escenario_15_pruebas_resultado');
    
    

    
  });


  