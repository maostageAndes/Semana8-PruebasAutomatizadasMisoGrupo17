import { LoginPage } from "../Page_Object/login_page";
import { AccionesTag } from "../Page_Object/tag_page";
import { ForAllPages } from "../Page_Object/forAll_pages";
import { faker} from "@faker-js/faker";

const loginPage = new LoginPage();
const creaTag = new AccionesTag();
const fAP = new ForAllPages();

let url_naughty_string = '';
let url_sql_code = '';
describe("Pruebas edición de tag", function(){
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

    
    it("76.ES13_A_PRIORI_Edit_Title_ok_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let modifiedTitle = this.apriori[randomIndex].title;
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,modifiedTitle);
        creaTag.verificarTitleTag(modifiedTitle);
    })
    it("77.ES13_A_PRIORI_Edit_Title_Vacio_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,this.apriori[0].title);
        creaTag.verificarTitleTag(this.apriori[0].title);
    })
    it("78.ES13_ALEATORIO_Edit_Title_Faker_Frontera_minimo (1 caracter)_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        let modifiedTitle = faker.string.sample(1);
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,modifiedTitle);
        creaTag.verificarTitleTag(modifiedTitle);
    })
    it("79.ES13_ALEATORIO_Edit_Title_Faker_Frontera_maximo (191 caracteres)_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        let modifiedTitle = faker.string.sample(191);
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,modifiedTitle);
        creaTag.verificarTitleTag(modifiedTitle);
    })
    it("80.ES13_ALEATORIO_Edit_Title_Faker_Frontera_maximo_mas_1 (192 caracteres)_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        let modifiedTitle = faker.string.sample(192);
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,modifiedTitle);
        creaTag.verificarTitleTag(modifiedTitle);
    })
    it("81.ES13_ALEATORIO_Edit_Title_Faker_Datos invalidos_Emoji_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        let modifiedTitle = faker.internet.emoji();
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,modifiedTitle);
        creaTag.verificarTitleTag(modifiedTitle);
        
    })
    it("82.ES13_ALEATORIO_Edit_Title_Faker_Datos invalidos_URL_y_Contenido_vacío", function(){
        let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        let modifiedTitle = faker.internet.url();
        creaTag.crearTag(title,"");
        creaTag.editarTitleTag(title,modifiedTitle);
        creaTag.verificarTitleTag(modifiedTitle);
    })
    it("83.ES13_PSEUDOALEATORIO_Mockaroo_Edit_Title_Datos invalidos_codigoSQL_y_Contenido_vacío", function(){
        cy.request(url_sql_code).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooSqlCodeData');
        });
        
        cy.get('@mockarooSqlCodeData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
            let title = this.apriori[randomIndex].title;
            creaTag.crearTag(title,"");
            creaTag.editarTitleTag(title,value);
            creaTag.verificarTitleTag(value);
        });
    })
    it("84.ES13_PSEUDOALEATORIO_Mockaroo_Edit_Title_Datos invalidos_naughty_input_y_Contenido_vacío", function(){
        // Hacer la solicitud a la API
        cy.request(url_naughty_string).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooNaugthyStringData');
        });
        
        cy.get('@mockarooNaugthyStringData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            let randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
            let title = this.apriori[randomIndex].title;
            creaTag.crearTag(title,"");
            creaTag.editarTitleTag(title,value);
            creaTag.verificarTitleTag(value);
        });
    })
    it("85.ES13_A_PRIORI_Edit_Contenido_ok_y_Title_ok", function(){
        let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let content = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let modifiedContent = this.apriori[randomIndex].title;
        creaTag.crearTag(title,content);
        creaTag.editarContentTag(title,modifiedContent);
        creaTag.verificarContentTag(title,modifiedContent);
    })
    it("86.ES13_ALEATORIO_Edit_Contenido_Faker_Frontera_minimo (1 caracter)_y_Title_ok", function(){
        let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let content = this.apriori[randomIndex].title;
        let modifiedContent = faker.string.sample(1);
        creaTag.crearTag(title,content);
        creaTag.editarContentTag(title,modifiedContent);
        creaTag.verificarContentTag(title,modifiedContent);
    })
    it("87.ES13_ALEATORIO_Contenido_Faker_Frontera_maximo (500 caracteres)_y_Title_ok", function(){
        let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let content = this.apriori[randomIndex].title;
        let modifiedContent = faker.string.sample(500);
        creaTag.crearTag(title,content);
        creaTag.editarContentTag(title,modifiedContent);
        creaTag.verificarContentTag(title,modifiedContent);
    })
    it("88.ES13_ALEATORIO_Contenido_Faker_Frontera_maximo_mas_1 (501 caracteres)_y_Title_ok", function(){
        let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let content = this.apriori[randomIndex].title;
        let modifiedContent = faker.string.sample(501);
        creaTag.crearTag(title,content);
        creaTag.editarContentTag(title,modifiedContent);
        creaTag.verificarContentTag(title,modifiedContent);
    })
    it("89.ES13_ALEATORIO_Contenido_Faker_Datos invalidos_Emoji_y_Title_ok", function(){
        const emojiString = faker.internet.emoji();
        let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let content = this.apriori[randomIndex].title;
        creaTag.crearTag(title,content);
        creaTag.editarContentTag(title,emojiString);
        creaTag.verificarContentTag(title,emojiString);
    })
    it("90.ES13_ALEATORIO_Contenido_Faker_Datos invalidos_URL_y_Title_ok", function(){
        const urlString = faker.internet.url();
        let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let title = this.apriori[randomIndex].title;
        randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        let content = this.apriori[randomIndex].title;
        creaTag.crearTag(title,content);
        creaTag.editarContentTag(title,urlString);
        creaTag.verificarContentTag(title,urlString);
    })
    it("91.ES13_PSEUDOALEATORIO_Edit_Mockaroo_Contenido_Datos invalidos_codigoSQL_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const title = this.apriori[randomIndex].title
        cy.request(url_sql_code).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooSqlCodeData');
        });
        
        cy.get('@mockarooSqlCodeData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
            let title = this.apriori[randomIndex].title;
            randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
            let content = this.apriori[randomIndex].title;
            creaTag.crearTag(title,content);
            creaTag.editarContentTag(title,value);
            creaTag.verificarContentTag(title,value);
        });
    })
    it("92.ES13_PSEUDOALEATORIO_Mockaroo_Contenido_Datos invalidos_naughty_input_y_Title_ok", function(){
        const randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
        const title = this.apriori[randomIndex].title
        // Hacer la solicitud a la API
        cy.request(url_naughty_string).then((response) => {
            // Guardar los datos en un alias
            cy.wrap(response.body).as('mockarooNaugthyStringData');
        });
        
        cy.get('@mockarooNaugthyStringData').then((data) => {
            data = [data]
            const value = Object.values(data[0])[0]; // Segundo valor del objeto
            let  randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
            let title = this.apriori[randomIndex].title;
            randomIndex = Math.floor(Math.random() * (this.apriori.length - 1)) + 1;
            let content = this.apriori[randomIndex].title;
            creaTag.crearTag(title,content);
            creaTag.editarContentTag(title,value);
            creaTag.verificarContentTag(title,value);
        });
    })

})