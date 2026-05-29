export class Page {
    hedder = () => cy.get('.header')
    main = () => cy.get('.main')
    footer = () => cy.get('.footer')
    btnList = () => this.hedder().find('.header__list')

    btnNetwork = () => this.btnList().children().eq(4).find('.header__link')
    
    clickBtnNetwork(){
        this.btnNetwork()
            .click()
    }

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
    mockedUser(){
        cy.fixture('randomUser').then((userData) =>{
            cy.wrap(userData).as('userData')
            cy.intercept('GET','**api*', {
                statusCode: 200,
                body: userData
            }).as('mockedAPI')
        })
    }

    checkNameMockedUser(name){
        cy.get('@userData').then((userData) => {
            expect(userData.results[0].name.first).to.equal(name)
        })
    }
}