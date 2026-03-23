import { Page } from "../pages/Page"
describe('Тестовый сайт', () => {
  it('Открыть сайт, ввести имайл, нажать кнопку', () => {
    cy.fixture('data').then((data) => {
      const page = new Page()
      
      page.visit(data.urlCypress)
      page.typeInPut('test@email.com')
      page.clickButton()

      cy.intercept('GET','**cypress-api*', {
        statusCode: 200,
        body:{
          fake: true,
          message: 'hello from mock'
        }
      }).as('mockedAPI')
      page.clickBtnAPICypress()
      cy.wait('@mockedAPI')
        .its('response.body.message')
        .should('eq','hello from mock')
    })
  })
})