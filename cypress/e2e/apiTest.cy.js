import { Page } from "../pages/Page"
describe('сайт с API', () => {
  it('проверка апи', () => {
    cy.fixture('data').then((data) => {
      const page = new Page()
      
        cy.intercept('GET', '**').as('all')
        cy.visit(data.serverUrlAPI)
        cy.wait('@all')
        cy.get('.header').should('be.visible')
        page.clickBtnNetwork()
        page.mockedUser()
        page.checkNameMockedUser('ТЕСТОВЫЙ')
    })
  })
})