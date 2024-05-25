import { LoginPage } from "../Page_Object/login_page";
import { AccionesPagina } from "../Page_Object/pages_page";
import { ForAllPages } from "../Page_Object/forAll_pages";


const loginPage = new LoginPage();
const creaPagina = new AccionesPagina();
const fAP = new ForAllPages();

//Escenario: Como usuario quiero editar el titulo de una página que he creado con el nuevo titulo “ES02 Ghost Page edit” y publicarla

  it("Escenario_02_pruebas", function () {

    //Given --navegar a la web admin de ghost
    loginPage.baseUrl();

    //When --hace login, crear pagina, publicar pagina, editar pagina
    loginPage.enterUsername();
    loginPage.enterPassword();
    fAP.screenShoot('ES02/01_Escenario_02_pruebas_login');
    loginPage.clickLogin();
    creaPagina.crearPagina('ES02 Ghost inicial','contenido inicial ES02');
    fAP.screenShoot('ES02/02_Escenario_02_pruebas_pagina');
    creaPagina.publicarPagina();
    creaPagina.editarPagina('ES02 Ghost inicial','ES02 Ghost Page edit Nuevo');
    fAP.screenShoot('ES02/03_Escenario_02_pruebas_editada');
        
    //Then --confirmar que hay una pagina publicada con el title " ES02 Ghost Page edit new "
    creaPagina.verificarPagina('ES02 Ghost Page edit Nuevo');  
    fAP.screenShoot('ES02/04_Escenario_02_pruebas_editada_lista');
    
  });