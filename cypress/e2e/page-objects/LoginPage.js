export default class LoginPage {
  login(email, password) {
    cy.visit('https://phone.onoff.app/')
    cy.get('[data-testid="email"]')
      .should('be.visible')
      .type(email)
    cy.get('[data-testid="password"]')
      .should('be.visible')
      .type(password)
    // wait for captcha to manually do it in the cypress runner
    cy.wait(20000)
    cy.get('[data-testid="button"]')
      .should('be.visible')
      .click()
  }

  validateMainPage() {
    cy.get('[href="/calls"]')
      .should('be.visible')
    cy.get('.Header_root__2QR4-')
      .should('be.visible')
  }
}
