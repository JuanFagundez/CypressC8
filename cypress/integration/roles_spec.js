/// <reference types="Cypress" />

describe('Testing Roles', () => {
    
    beforeEach(() =>{
        cy.visit('app/login')

        cy.get("input[name='username']")
          .type('admin')

        cy.get("input[name='password']")
          .type('great tall cork')

        cy.get('button.Button')
          .click()
        
        // otra manera de submitear el form
        //cy.get('form').submit();
        
        cy.visit('app/accounts/roles')
    })

    // le pasas un label y lo selecciona
    it('Should go to Roles section', ()=>{
        
        checkRole(role){
            cy.get("button[class='Button mr-2']")
            

        };
    })
    
    // tiene que chequear que estén todos los atributos en la lista
    it('Should go to Roles section', ()=>{
        
    })

    // al menos 1 checkbox tiene que estar seleccionado
    it('Should go to Roles section', ()=>{
        
    })

    // si agrego selecciono un checkbox, se tiene que agregar una columna en la vista
    it('Should go to Roles section', ()=>{
        
    })
})