import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";

const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();


//Escenario: Como usuario quiero hacer una nueva pagina con el titulo “ES01 Ghost Page” y publicarla

  it("Escenario_01_pruebas", function () {

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();

    //When --hacer login, crear pagina, publicar pagina
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES01/01_Escenario_01_pruebas_login');
    loginPage.clickLogin();
    creaPagina.crearPagina('ES01 Ghost page','contenido ES01');
    fAP.screenShoot('ES01/02_Escenario_01_pruebas_pagina');
    creaPagina.publicarPagina();
    fAP.screenShoot('ES01/03_Escenario_01_pruebas_publicar');
    
    //Then --confirmar que hay una página publicada con el title “ES01 Ghost page”
    creaPagina.verificarPagina('ES01 Ghost page');  
    fAP.screenShoot('ES01/04_Escenario_01_pruebas_lista_paginas');
    
    
  });

  

