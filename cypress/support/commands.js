Cypress.Commands.add('goToClick', (target)=>{
    cy.get(target).should('to.exist')
    cy.get(target).should('be.visible')
    cy.get(target).click()
})

Cypress.Commands.add('inputText', (field, text)=>{
    cy.get(field).should('to.exist')
    cy.get(field).should('be.visible')
    cy.get(field).should('be.enabled')
    cy.get(field).type(text)
})
