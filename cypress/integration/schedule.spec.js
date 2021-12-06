import { Login } from "../support/login"
import { Schedule } from "../support/schedule"

const schedule = new Schedule()
const login = new Login()

describe('Schedule page tests', ()=>{

    before(()=>{
        cy.visit('/')
        login.closeCookiesPopUp()
        login.login(Cypress.env('email'), Cypress.env('password'))
    })
    it('Goes to Schedule page and verifies the url', () => {
        cy.goToClick('[href="/page/schedule"]')
        cy.url().should('include','/page/')
    });

    it('Validate correct number of employees', () => {
        schedule.checkNumberOfEmployees(3)
    });

    it('Create a shift for one of the employees', () => {
      schedule.createShift('Employee One', '09:00', '17:00')  
    });

    it('Verify shift is created', () => {
        schedule.validateShiftIsCreated('Employee One')
    });
})