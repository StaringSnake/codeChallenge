
export class Login{
    login(email, password){
    cy.get('form').within(() =>{
        cy.inputText('input[id="Username"]', email)
        cy.inputText('input[id="Password"]', password)
        cy.goToClick('button[id="MainLoginButton"]')
    })  
    }

    closeCookiesPopUp(){       
        if (cy.get('[class="cookie-banner__wrapper"]').should('to.exist')) {
            cy.get('button[id="cookie-consent-button"]').click()
        }
    }

    validateFormExists(){
    cy.get('form').should('to.exist')
    cy.get('form').should('be.visible')
    cy.get('form').within(() =>{
        cy.get('input[id="Username"]').should('to.exist')
        cy.get('input[id="Username"]').should('be.visible')
        cy.get('input[id="Username"]').should('not.have.class', 'disabled')
        cy.get('input[id="Password"]').should('to.exist')
        cy.get('input[id="Password"]').should('be.visible')
        cy.get('input[id="Password"]').should('not.have.class', 'disabled')
        cy.get('button[id="MainLoginButton"]').should('to.exist')
        cy.get('button[id="MainLoginButton"]').should('be.visible')
        cy.get('button[id="MainLoginButton"]').should('not.have.class', 'disabled')
    })   
    }

    validateErrorMessage(id){
    cy.get(id).should('to.exist')
    cy.get(id).should('be.visible')
    cy.get(id).should('to.have.class', 'validation-message')
    cy.get(id).contains('The username or password is incorrect.')
    }

    closeCaptcha(){
    cy.get('iframe')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            .should('be.visible')
            .click();    
    }
}

    
