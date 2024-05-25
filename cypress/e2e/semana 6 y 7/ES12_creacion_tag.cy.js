import { LoginPage } from "../Page_Object/login_page";
import { AccionesTag } from "../Page_Object/tag_page";
import { ForAllPages } from "../Page_Object/forAll_pages";
import { faker} from "@faker-js/faker";

const loginPage = new LoginPage();
const creaTag = new AccionesTag();
const fAP = new ForAllPages();

let url_naughty_string ="";
let url_sql_code = "";
describe("Pruebas creacion de tag", function(){
    let jsonData;

    before("Cargar datos desde el archivo JSON", function() {
        /*A PRIORI*/
        //Uso de Mockaroo File
        

        /*PSEUDOALEATORIO*/
        //Uso de Mockaroo API
        // URL de la API Mockaroo
        let mockarooApiKey = '5b31f1f0';
         url_naughty_string = `https://my.api.mockaroo.com/naughty_string.json?key=${mockarooApiKey}`;
         url_sql_code = `https://my.api.mockaroo.com/sql_code.json?key=${mockarooApiKey}`;

        

        

        /*PSEUDOALEATORIO*/
        //Uso de faker

    });
    beforeEach("login",function(){
        cy.fixture('a-priori-tag.json').as('apriori');
        loginPage.baseUrl();
        loginPage.enterUsername();
        loginPage.enterPassword();
        loginPage.clickLogin();
    })

    it("59.ES12_A_PRIORI_Title_ok_y_Contenido_vacío", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        creaTag.crearTag(this.apriori[randomIndex].title,"");
        creaTag.verificarTitleTag(this.apriori[randomIndex].title);
    })
    it("60.ES12_A_PRIORI_Title_Vacio_y_Contenido_vacío", function(){
        creaTag.crearTag(this.apriori[0].title,"");
        creaTag.verificarTitleTag(this.apriori[0].title);
    })
    it("61.ES12_ALEATORIO_Title_Faker_Frontera_minimo (1 caracter)_y_Contenido_vacío", function(){
        const title = faker.string.sample(1);
        creaTag.crearTag(title,"");
        creaTag.verificarTitleTag(title);
    })
    it("62.ES12_ALEATORIO_Title_Faker_Frontera_maximo (191 caracteres)_y_Contenido_vacío", function(){
        const title = faker.string.sample(191);
        creaTag.crearTag(title,"");
        creaTag.verificarTitleTag(title);
    })
    it("63.ES12_ALEATORIO_Title_Faker_Frontera_maximo_mas_1 (192 caracteres)_y_Contenido_vacío", function(){
        const title = faker.string.sample(192);
        creaTag.crearTag(title,"");
        creaTag.verificarTitleTag(title);
    })
    it("64.ES12_ALEATORIO_Title_Faker_Datos invalidos_Emoji_y_Contenido_vacío", function(){
        const emojiString = faker.internet.emoji();

        creaTag.crearTag(emojiString,"");
        creaTag.verificarTitleTag(emojiString);
    })
    it("65.ES12_ALEATORIO_Title_Faker_Datos invalidos_URL_y_Contenido_vacío", function(){
        const title = faker.internet.url();
        creaTag.crearTag(title,"");
        creaTag.verificarTitleTag(title);
    })
    it("66.ES12_PSEUDOALEATORIO_Mockaroo_Title_Datos invalidos_codigoSQL_y_Contenido_vacío", function(){
        
        cy.request(url_sql_code).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooSqlCodeData');
        });
        cy.get('@mockarooSqlCodeData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            creaTag.crearTag(value,"");
            creaTag.verificarTitleTag(value);
        });
    })
    it("67.ES12_PSEUDOALEATORIO_Mockaroo_Title_Datos invalidos_naughty_input_y_Contenido_vacío", function(){
        // Hacer la solicitud a la API
        cy.request(url_naughty_string).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooNaugthyStringData');
        });
        
        cy.get('@mockarooNaugthyStringData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            creaTag.crearTag(value,"");
            creaTag.verificarTitleTag(value);
        });
    })
    it("68.ES12_A_PRIORI_Contenido_ok_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const randomIndex2 = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        creaTag.crearTag(this.apriori[randomIndex].title,this.apriori[randomIndex2].title);
        creaTag.verificarContentTag(this.apriori[randomIndex].title,this.apriori[randomIndex2].title);
    })
    it("69.ES12_ALEATORIO_Contenido_Faker_Frontera_minimo (1 caracter)_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const content = faker.string.sample(1);
        const title = this.apriori[randomIndex].title;
        creaTag.crearTag(title,content);
        creaTag.verificarContentTag(title,content);
    })
    it("70.ES12_ALEATORIO_Contenido_Faker_Frontera_maximo (500 caracteres)_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const content = faker.string.sample(500);
        const title = this.apriori[randomIndex].title;
        creaTag.crearTag(title,content);
        creaTag.verificarContentTag(title,content);
    })
    it("71.ES12_ALEATORIO_Contenido_Faker_Frontera_maximo_mas_1 (501 caracteres)_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const content = faker.string.sample(501);
        const title = this.apriori[randomIndex].title;
        creaTag.crearTag(title,content);
        creaTag.verificarContentTag(title,content);
    })
    it("72.ES12_ALEATORIO_Contenido_Faker_Datos invalidos_Emoji_y_Title_ok", function(){
        const emojiString = faker.internet.emoji();
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const title = this.apriori[randomIndex].title;
        creaTag.crearTag(title,emojiString);
        creaTag.verificarContentTag(title,emojiString);
    })
    it("73.ES12_ALEATORIO_Contenido_Faker_Datos invalidos_URL_y_Title_ok", function(){
        const urlString = faker.internet.url();
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const title = this.apriori[randomIndex].title;
        creaTag.crearTag(title,urlString);
        creaTag.verificarContentTag(title,urlString);
    })
    it("74.ES12_PSEUDOALEATORIO_Mockaroo_Contenido_Datos invalidos_codigoSQL_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const title = this.apriori[randomIndex].title;
        cy.request(url_sql_code).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooSqlCodeData');
        });
        
        cy.get('@mockarooSqlCodeData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            creaTag.crearTag(title,value);
            creaTag.verificarContentTag(title,value);
        });
    })
    it("75.ES12_PSEUDOALEATORIO_Mockaroo_Contenido_Datos invalidos_naughty_input_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const title = this.apriori[randomIndex].title;
        // Hacer la solicitud a la API
        cy.request(url_naughty_string).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooNaugthyStringData');
        });
        
        cy.get('@mockarooNaugthyStringData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            creaTag.crearTag(title,value);
            creaTag.verificarContentTag(title,value);
        });
    })

})