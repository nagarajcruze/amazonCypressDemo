export class CartPage {

    emptyCart = () => cy.get('h1.a-spacing-mini')

    cartCountIcon = () => cy.get('#nav-cart-count')

    prdAddedText = () => cy.get('span.a-truncate-full.a-offscreen')

    btnDelete = () => cy.get('.sc-action-delete > .a-declarative > .a-color-link')

}
