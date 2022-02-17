/// <reference types = "cypress" />

const excelFilePath = 'cypress/support/test-data/amazon_test_data.xlsx';
const sheetName = 'credentials';

describe('Amazon Scenario', () => {
    var us = '';
    before(() => {
        cy.clearCookies()
        cy.navigate("https://www.amazon.in/")
    })

    beforeEach(function () {
        cy.getCookies().then(cookies => {
            const namesOfCookies = cookies.map(c => c.name)
            Cypress.Cookies.preserveOnce(...namesOfCookies)
        })
    })

    it('Sign-In', () => {
        cy.task('generateJSON', { excelFilePath, sheetName }).then(
            (user) => {
                cy.signIn(user[0].username, user[0].password)
            })
    })

    it('Verify if Cart is Empty', () => {
        cy.checkCart();
    })

    it('Search Product', () => {
        cy.searchProduct('boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Carbon Black)')
    })

    it('Add a Product', () => {
        //3 = 3rd item.
        cy.addProduct(3);
    })

    it('Verify Added Product', () => {
        cy.verifyAddedProduct();
    })

    it('Delete Product from Cart', () => {
        cy.deleteProduct();
    })
})