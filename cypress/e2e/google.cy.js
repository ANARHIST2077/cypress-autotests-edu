import { Page } from "../pages/Page"
describe('Тестовый сайт', () => {
  it('Открыть сайт, ввести имайл, нажать кнопку', () => {
    cy.fixture('data').then((data) => {
      const page = new Page()
      
      page.visit(data.url)
      page.typeInPut('test@email.com')
      page.clickButton()

      cy.intercept('GET','**cypress-api*').as('API')
      page.clickBtnAPI()
      cy.wait('@API')
    })
  })
})