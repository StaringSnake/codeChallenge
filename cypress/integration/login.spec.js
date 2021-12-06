import { Login } from "../support/login";

const login = new Login()

describe('Login tests', ()=>{

    it('Validate login form exists', () => {
        cy.visit('/')
        login.validateFormExists()
    });

    it('Login with invalid credentials', ()=>{
        cy.visit('/')
        login.closeCookiesPopUp()
        login.login('sda','asd')
        cy.get('body').then(($body)=>{
            if ($body.find('iframe').length) {
                login.closeCaptcha() //Currently just clicks on the captcha. Cant really identify the images
                return cy.log('Captcha detected, skip test')
            }
            login.validateErrorMessage('[id="Username-validation-error"]')
            login.validateErrorMessage('[id="Password-validation-error"]')
            return cy.log('no captcha')
        })
        
    })
    
    it('Login with valid credentials', () => {
        cy.visit('/')
        login.closeCookiesPopUp()
        login.login(Cypress.env('email'), Cypress.env('password'))
    });

   
})