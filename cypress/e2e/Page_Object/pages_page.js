export class AccionesPagina {

  crearPagina(title_pagina, body_pagina) {
    cy.get('a[href*="#/pages/"]').click();
    cy.contains("New page").click();
    cy.get("[id^=ember]").find("textarea").type(title_pagina);
    cy.wait(10000);
    cy.get("p").type(body_pagina);
  }

  crearPaginaTituloVacio(body_pagina) {
    cy.get('a[href*="#/pages/"]').click();
    cy.contains("New page").click();
    cy.get("[id^=ember]").find("textarea").click();
    cy.wait(10000);
    cy.get("p").type(body_pagina);
  }

  crearPaginaContenidoVacio(title_pagina) {
    cy.get('a[href*="#/pages/"]').click();
    cy.contains("New page").click();
    cy.get("[id^=ember]").find("textarea").type(title_pagina);
    cy.wait(10000);
    cy.get("p").click();
  }

  publicarPagina() {
    cy.get(".gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span").click();
    cy.get(".gh-publish-cta > .gh-btn > span").click();
    cy.contains("Publish page, right now").click();
    cy.get('[class="green"]').should("contain", "Boom. It’s out there");
    cy.contains("Back to dashboard").click();
  }

  verificarPagina(title_pagina) {
    cy.get('a[href*="#/pages/"]').click({ multiple: true });
    cy.get("[id^=ember]")
      .find(".gh-content-entry-title")
      .should("contain", title_pagina);
  }

  verificarNoExistePagina(title_pagina) {
    cy.wait(5000);
    cy.get('a[href*="#/pages/"]').click({ multiple: true });
    cy.get("[id^=ember]")
      .find(".gh-content-entry-title")
      .should("not.contain", title_pagina);
  }

  editarPagina(title_pagina, title_pagina_nuevo) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).click();
    cy.get("[id^=ember]").find("textarea").clear().type(title_pagina_nuevo);
    cy.contains("Update").click();
    cy.get('[class="gh-notification-title"]').should("contain", "Update");

  }

  editarPaginaTitleVacio(title_pagina) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).click();
    cy.get("[id^=ember]").find("textarea").clear();
    cy.contains("Update").click();
    cy.get('[class="gh-notification-title"]').should("contain", "Update");

  }

  borrarPagina(title_pagina) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).rightclick();
    cy.get(".red").click();
    cy.get("[id^=ember] .gh-btn-red").click();
  }

  borrarPrimeraPagina() {
    cy.get('a[data-test-nav="pages"]').click();
    cy.get('[class="gh-content-entry-title"]').first().rightclick({force: true});
    cy.get(".red").click();
    cy.get("[id^=ember] .gh-btn-red").click();
  }

  featurePagina(title_pagina) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).rightclick();
    cy.get(".mr2 > span").contains("Feature").click();
  }

  confirmarFeaturePagina(title_pagina) {
    cy.get("[id^=ember] > .gh-content-entry-title").should("contain",title_pagina);
    cy.get("[id^=ember] > .gh-content-entry-title .gh-featured-post").should("be.visible");
  }

  duplicarPagina(title_pagina) {
    cy.get('a[data-test-nav="pages"]').click();
    cy.contains(title_pagina).rightclick()
    cy.get('.mr2 > span').contains('Duplicate').click();
  }

    


}
