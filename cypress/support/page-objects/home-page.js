export class HomePage {
    navigate = (URL) => cy.visit(URL)

    searchBox = () => cy.get('#twotabsearchtextbox')

    searchProduct = (product) => cy.get('#twotabsearchtextbox').type(product + '{enter}')

    getElement = (id) => cy.get(id)

    clickProduct = (productNo) => cy.get('.a-link-normal.s-no-outline').eq(productNo).invoke('removeAttr', 'target')

    btnSignIn = () => cy.get('#nav-link-accountList-nav-line-1')

    inptUser = () => cy.get('#ap_email')

    btnContinue = () => cy.get('.a-button-inner > #continue')

    inptPass = () => cy.get('#ap_password')

    btnSubmit = () => cy.get('#signInSubmit')

    productWillBeAddedName = (productNo) => cy.get('h2 >a > span').eq(productNo)

    btnAddToCart = () => cy.get('#add-to-cart-button')
}