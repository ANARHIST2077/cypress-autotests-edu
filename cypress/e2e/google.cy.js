describe('Тест Гугла', () => {
  it('Открыть гугл, проверить титул', () => {
    cy.fixture('data').then((data) => {
      cy.openGoogle(data.url)
      cy.title().should("include",data.title)
    })
  })
})