/// <reference types="Cypress" />

describe("Testing Roles", () => {
  beforeEach("algo", () => {
    cy.visit("app/login");

    cy.get("input[name='username']").type("admin");

    cy.get("input[name='password']").type("great tall cork");

    cy.get("button.Button").click();
    cy.url({ timeout: 10000 })
    .should("include", "incidents");

    // otra manera de submitear el form
    // cy.get('form').submit();
    //cy.debug()

    cy.visit("/app/accounts/roles")
      .url({ timeout: 10000 })
      .should("include", "roles");
  });

  // le pasas un label y lo selecciona
  it("Should go to Roles section", () => {
    cy.get("button.Button.mr-2").click();
    cy.get("div.DraggableColumnItem");
    console.log(cy.get("div.DraggableColumnItem").length);
  });

  // tiene que chequear que estén todos los atributos en la lista
  // it('Should go to Roles section', ()=>{

  // })

  // // al menos 1 checkbox tiene que estar seleccionado
  // it('Should go to Roles section', ()=>{

  // })

  // // si agrego selecciono un checkbox, se tiene que agregar una columna en la vista
  // it('Should go to Roles section', ()=>{

  // })
});
