export class Page {
    visit(url) {
        cy.visit(url)
    }

    checkTitle(expectredTitle){
        cy.title()
            .should('include', expectredTitle)
    }

    search(text){
        cy.get('textarea[name="q"]').type(text + '{enter}')
    }

    checkResults(){
        cy.get('#search').should('exist')
    }

    typeInPut(text){
        cy.get('.action-email')
            .should('be.visible')
            .type(text)
            .should('have.value', text)
    }

    clickButton(){
        cy.get('.action-btn')
            .should('be.visible')
            .click()
    }

    clickBtnAPICypress(){
        cy.get('.navbar-nav').children().eq(2).find('a')
            .should('be.visible')
            .click()
    }
    clickBtnSignalMySite(){
        cy.get('#refresh-btn')
            .should('be.visible')
            .click()
    }
}