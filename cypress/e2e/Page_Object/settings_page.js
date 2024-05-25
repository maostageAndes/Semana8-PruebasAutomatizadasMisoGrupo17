export class AccionesSettings {

    cambiarNombreGhost(title_ghost) {
        cy.get('[data-test-nav="settings"]').click();
        cy.get('[class="flex items-center justify-start rounded gap-4"] ').first().click();
        cy.get('[placeholder="Site title"]').first().clear().type(title_ghost +'{enter}');
        cy.contains('Save').click();
        cy.wait(5000);
        cy.get('[data-testid="exit-settings"]').click(); 
    }

    verificarNombreGhost(title_ghost) {
        cy.get('.gh-nav-menu-details-sitetitle').should('contain',title_ghost)
    }



}