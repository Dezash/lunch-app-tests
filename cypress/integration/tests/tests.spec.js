/// <reference types="cypress" />

// it('Login to page', ()=>{
//     cy.visit('https://lunch.devbstaging.com/login-password')
//     cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('admin@yellow.kns')
//     cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Corn000')
//     cy.get('.v-btn').click()
//     cy.get('.d-flex > .v-subheader').contains('Admin Yellow')
// })

beforeEach('Executes  before each test', () =>{
    cy.visit('https://lunch.devbstaging.com/login-password')
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('admin@yellow.kns')
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Corn000')
    cy.get('.v-btn').click()
    cy.get('.d-flex > .v-subheader').contains('Admin Yellow')
})

// beforeEach('Executes  before each test', () =>{
//     cy.visit('https://lunch.devbstaging.com/dishes')
// })

it("should contain searcselect every day, every provider menu", () => {
    cy.get('.v-list__tile__action').each(($item) => { 
        cy.get($item).click()
    })
}) 

it("should contain searcselect every day, every provider menu", () => {
    cy.get('.v-list__tile__action').first().click()
}) 

