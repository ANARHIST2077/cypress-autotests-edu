import { Page } from "../pages/Page"
describe('сайт с API', () => {
  it('проверка апи', () => {
    cy.fixture('data').then((data) => {
      const page = new Page()
      
        cy.intercept('GET', '**api*').as('load')
        page.visit(data.serverUrlAPI)
        cy.wait('@load')
        cy.get('.header').should('be.visible')
        page.clickBtnNetwork()
        page.mockedUser()
        page.checkNameMockedUser('ТЕСТОВЫЙ')
    })
  })
})