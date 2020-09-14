import selectors from '../../Page objects/selectors.js'
/// <reference types="cypress" />

var selector = new selectors

beforeEach('Executes  before each test', () =>{
    cy.visit('https://lunch.devbstaging.com/login-password')
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('admin@yellow.kns')
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Corn000')
    cy.get('.v-btn').click()
    cy.get('.d-flex > .v-subheader').contains('Admin Yellow')
})

describe('orders food', ()=>{
    it('Selects first day and first Provider in list', ()=>{
        selector.getFirstDayInMenu().click()
        selector.getFirstDaySupplier().click()
    })
    
    it('Selects first day and first Provider in list, selects first dish"', ()=>{
        selector.getFirstDayInMenu().click()
        selector.getFirstDaySupplier().click()
        selector.getFirstDish().click()
        cy.get('.v-chip').should('exist')
    })
    
    it('Selects first day and first Provider in list, selects first dish and confirms order', ()=>{
        selector.getFirstDayInMenu().click()
        selector.getFirstDaySupplier().click()
        selector.getFirstDish().click()
        selector.getProceedButton().click()
        cy.get('.v-snack__content').should('exist')
    })
})

describe('removes ordered food from cart', ()=>{
    it('Selects first day and first Provider in list', ()=>{
        selector.getFirstDayInMenu().click()
        selector.getFirstDaySupplier().click()
    })
    
    it('Selects first day and first Provider in list, removes ordered dish"', ()=>{
        selector.getFirstDayInMenu().click()
        selector.getFirstDaySupplier().click()
        cy.get('.v-chip__content > .v-icon').click()
        selector.getProceedButton().click()
        cy.get('.v-snack__content').should('exist')
    })
})