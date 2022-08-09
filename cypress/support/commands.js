// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('submitAndVerify', (cost, days, hours, minutes) => {
    cy.get('input[name="Submit"]')
        .click();
    cy.get('.SubHead > b').should('have.text', '$' + cost);
    cy.get('.BodyCopy > b').should('contain', '(' + days + ' Days, ' + hours + ' Hours, ' + minutes + ' Minutes)')

});
Cypress.Commands.add('selectDateFromCurrent', (month, day) => {
    let date = new Date()
    let todaysDate = date.toLocaleDateString()
    let futureDay = (date.getDate() + day).toString()
    cy.log(futureDay)
    let futureMonth = (date.getMonth() + 1+ month).toString()
    cy.log(futureMonth)
    let futureDate = futureMonth + '/' + futureDay + '/' + date.getFullYear().toString()
    cy.log(futureDate)

    cy.get("#StartingDate")
      .clear()
      .type(todaysDate);

    cy.get('#LeavingDate')
      .clear()
      .type(futureDate)
        
})
