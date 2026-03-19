describe('Тест Гугла', () => {
  it('Открыть гугл, проверить титул', () => {
    cy.visit('https://www.google.com')
    cy.title()
      .should('include','Google')
  })
})