class CartPage {
    goToCart() {
      cy.get('a.btn.btn-primary.btn-block').contains('View Cart').click();
    }
  
    getCartItems() {
      return cy.get('.table-bordered .text-left a');
    }

    validateQuantityProductInCart(num_products) {
      cy.get('div.input-group.flex-nowrap')
        .should('be.visible')
        .should('have.value', '') 
    }
  }
  
  export const cartPage = new CartPage();  