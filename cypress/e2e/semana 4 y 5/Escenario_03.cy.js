import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero borrar una pagina de mi lista de paginas

  it("Escenario_03_pruebas", function () {

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();

    //When --hacer login, crear pagina, publicar pagina, borrar pagina
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES03/01_Escenario_03_pruebas_login');
    loginPage.clickLogin();
    creaPagina.crearPagina('ES03 Ghost page borrar','contenido inicial ES03');
    fAP.screenShoot('ES03/02_Escenario_03_pruebas_creada');
    creaPagina.publicarPagina();
    fAP.screenShoot('ES03/03_Escenario_03_pruebas_publicada');
    creaPagina.borrarPagina('ES03 Ghost page borrar')
    fAP.screenShoot('ES03/04_Escenario_03_pruebas_borrada');
            
    //Then --confirmar en la lista de páginas no existe la pagina “ES03 Ghost page borrar”
    creaPagina.verificarNoExistePagina('ES03 Ghost page borrar');  
    fAP.screenShoot('ES03/05_Escenario_03_pruebas_lista');
    
  });