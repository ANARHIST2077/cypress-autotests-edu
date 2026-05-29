import { Page } from "../pages/Page"
describe('сайт с API', () => {
  it('проверка апи', () => {
    cy.fixture('data').then((data) => {
      const page = new Page()
      
        page.visit(data.serverUrlAPI)
        page.clickBtnNetwork()
        page.mockedUser()
        page.checkNameMockedUser('ТЕСТОВЫЙ')
    })
  })
})