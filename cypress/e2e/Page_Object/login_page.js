export class LoginPage{

    access_url = 'https://proyectomiso.site/ghost/'
    username_textbox = '#identification'
    password_textbox = '#password'
    login_button = '#ember5 > span'
    username = "m.castror2@uniandes.edu.co"
    password =  "Miso2024#$"

    baseUrl(){
        cy.visit(this.access_url);
    }
    
    enterUsername(){
        cy.get(this.username_textbox).type(this.username);
    }

    enterPassword(){
        cy.get(this.password_textbox).type(this.password);
    }

    clickLogin(){
        cy.get(this.login_button).click();
        cy.wait(5000);
    }

}