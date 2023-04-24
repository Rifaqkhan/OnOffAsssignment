import LoginPage from '../e2e/page-objects/LoginPage'

describe('Empty Messages Notification', () => {
  before(() => {
    cy.intercept('GET', '/api/v1/messages', { messages: [] })
    cy.log(new Date().toLocaleString())
    // Create a new instance of LoginPage
    const loginPage = new LoginPage()
    // Login using the provided credentials
    loginPage.login('test.aut.onoffapp@gmail.com', 'testOnOff@')
    loginPage.validateMainPage()
  })

  it.only('should display notification with specific text when no messages are present', () => {
    // remove all messages
    const threadSelector = '#threads'
    cy.get('.SubHeader_root__3pSip').should('be.visible')
    cy.intercept('GET','https://production-server.onoffapp.net/mobile/v4/retrieve-threads?&limit=50',{fixture: 'example.json'})
    cy.contains('Messages').click()
    cy.wait(3000)
    // check that the notification text is displayed
    cy.contains('It’s so empty here...').should('be.visible')
    cy.contains('Why not try texting someone?').should('be.visible')
  })
})
