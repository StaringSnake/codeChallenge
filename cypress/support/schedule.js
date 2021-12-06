import moment from 'moment'

export class Schedule{

    checkNumberOfEmployees(nmb){
        cy.get('.virtualized-board__body').find('.eNJqlB').should('have.length', nmb)
    }

    createShift(empName, timeStart, timeEnd){
        let time = moment().format('D MMMM YYYY')
        cy.get(time+' '+empName).click()
        cy.inputText('[id="shiftStartEnd_start"]', timeStart)
        cy.inputText('[id="shiftStartEnd_end"]', timeEnd)
        cy.goToClick('[class="button button--primary button--default"]')
    }

    validateShiftIsCreated(empName){
        let time = moment().format('D MMMM YYYY')
        let dateName = '[aria-label="'+time+' '+empName+'"]'
        cy.get(dateName).find('[class="shift-tile__time-input shift-tile__time-input-inline"]').should('have.length', 2)
    }
}