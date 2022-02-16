import { CartPage } from './page-objects/cart-page'
const cart = new CartPage();
import { HomePage } from "../support/page-objects/home-page"
const home = new HomePage();

const excelFilePath = 'cypress/support/test-data/amazon_test_data.xlsx';
const sheetName = 'credentials';

let addedItemText = '';

Cypress.Commands.add('navigate', (URL) => {
  cy.visit(URL)
})

Cypress.Commands.add('signIn', (username, password) => {
  home.btnSignIn().click();
  home.inptUser().type(username);
  home.btnContinue().click();
  home.inptPass().type(password);
  home.btnSubmit().click();
})

Cypress.Commands.add('checkCart', () => {
  cart.cartCountIcon().click();
  cart.emptyCart().contains('Your Amazon Cart is empty.')
})

Cypress.Commands.add('searchProduct', (product) => {
  home.searchProduct(product)
})

Cypress.Commands.add('addProduct', (productNo) => {
  home.productWillBeAddedName(productNo - 1).then(($itemAdded) => {
    addedItemText = $itemAdded.text();
    home.clickProduct(productNo - 1).click();
    home.btnAddToCart().click();
    cart.cartCountIcon().should('have.text', '1')
  })
})

Cypress.Commands.add('verifyAddedProduct', () => {
  cart.cartCountIcon().click();
  cart.prdAddedText().contains(addedItemText)
})


Cypress.Commands.add('deleteProduct', () => {
  cart.btnDelete().click();
  cart.cartCountIcon().click();
  cart.cartCountIcon().should('have.text', '0')
})