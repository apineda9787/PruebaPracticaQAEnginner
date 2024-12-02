/// <reference types="cypress" />

import { homePage } from '../../support/page_objects/HomePage';
import { cartPage } from '../../support/page_objects/CartPage';

const { Input } = require("@angular/core")

describe('Añadir un producto al carrito en móvil', () => {
  beforeEach(() => {
    cy.viewport(Cypress.env('mobileWidth'), Cypress.env('mobileHeight'));
    homePage.visit();
  });

  it('Debe añadir un producto al carrito desde móvil', () => {
    homePage.selectFilterProductMobile();
    homePage.addProductToCart('HTC Touch HD');
    cartPage.goToCart();
    cartPage.getCartItems().should('contain', 'HTC Touch HD');
  });
});