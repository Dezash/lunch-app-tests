class selectors{
    FirstDayInMenu = '.v-list__group--active > .v-list__group__header > :nth-child(1) > .v-list__tile'
    FirstDaySupplier = '.v-list__group--active > .v-list__group__items > :nth-child(1) > .v-list__tile'
    FirstDish = ':nth-child(2) > .layout > :nth-child(1) > .v-card__text'
    ProceedButton = '.orders-list-button'

    getFirstDayInMenu(){
        return cy.get(this.FirstDayInMenu)
    }

    getFirstDaySupplier(){
        return cy.get(this.FirstDaySupplier)
    }

    getFirstDish(){
        return cy.get(this.FirstDish)
    }

    getProceedButton(){
        return cy.get(this.ProceedButton)
    }
}

export default selectors