class HomePage {
    visit() {
      cy.visit('/');
    }
  
    selectFilterProductDeskop() {
      cy.get('button.dropdown-toggle').contains('All Categories').click();
      cy.contains('[data-category_id="18"]', 'Laptops').click();
      cy.contains('button.type-text', 'Search').click();
    }

    selectFilterProductMobile() {
      cy.get('button.dropdown-toggle').eq(1).click();
      cy.get('[class="dropdown-item"][data-category_id="57"]').eq(1).click();
      cy.get('i.fa.fa-search.icon').click();
    }
  
    getSearchResults() {
      return cy.get('[class="price"]');
    }
  
    addProductToCart(productName) {
      cy.get('.product-layout').first().should('contain', productName);
      cy.get('.product-layout').first().click();
      cy.get('[title="Add to Cart"]').contains('Add to Cart').click({force: true});
      cy.contains('Success: You have added').should('be.visible');
    }

    setRangePrice(minimum_price, maximum_price) {
      cy.get('div.d-flex.align-items-center')
      .find('input[name="mz_fp[min]"]')
      .eq(1)
      .clear({ force: true })
      .type(minimum_price);

      cy.get('div.d-flex.align-items-center')
        .find('input[name="mz_fp[max]"]')
        .eq(1)
        .clear({ force: true })
        .type(maximum_price);
      
      cy.get('body').click();

    }
    
    openMobileMenu() {
      cy.get('[data-id="217827"]').click();
    }
  
    getMenuItems() {
      return cy.get('.navbar-nav');
    }
  
    validateCarousel() {
      cy.get('[class="carousel-inner"]').should('exist')
    }
  }
  
  export const homePage = new HomePage();