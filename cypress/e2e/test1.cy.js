const moment = require('moment')
import LoginPage from '../e2e/page-objects/LoginPage'

describe('Message Time Difference', () => {
  beforeEach(() => {
    cy.log(new Date().toLocaleString())
    // Create a new instance of LoginPage
    const loginPage = new LoginPage()
    // Login using the provided credentials
    loginPage.login('test.aut.onoffapp@gmail.com', 'testOnOff@')
    loginPage.validateMainPage()
    cy.viewport(1280, 1080)
  })

  it('should print time difference between first and last message for a thread', () => {
    const threadSelector = '#threads'
    cy.get('.SubHeader_root__3pSip').should('be.visible')
    cy.contains('Messages').click()
    //Validate the Message tab is opened
    cy.get('.Threads_root__S9HDJ').should('be.visible')
    cy.get('[data-index="1"]').then(() =>{
       // find thread with the given phone number
      cy.get(threadSelector).contains('+33 7 45 43 91 80').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .MessageListContentItem_time__1nsrE').then(($value)=>{
          const firstTime = moment($value.text(), 'HH:mm')
          cy.get('.MessageListContent_right__3TD__ > .MessageListContentItem_time__1nsrE').then(($secondValue)=>{
          const lastTime = moment($secondValue.text(),'HH:mm')
          const diffTime = lastTime.diff(firstTime, 'minutes')
          expect(diffTime).to.greaterThan(1,'Assertion to make sure that the difference in the first message and the last message is more than 1 minute')
          })
        })
    }) 
  })
})
