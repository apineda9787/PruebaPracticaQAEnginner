/// <reference types="cypress" />

import { homePage } from '../../support/page_objects/HomePage';
import { cartPage } from '../../support/page_objects/CartPage';

const { Input } = require("@angular/core")

describe('Validar la cantidad de productos cuando se añade al carrito', () => {
  beforeEach(() => {
    cy.viewport(Cypress.env('desktopWidth'), Cypress.env('desktopHeight'));
    homePage.visit();
  });

  it('Buscar productos en el filtro de la pagina principal para añadir al carrito con la cantidad de productos seleccionados', () => {
    homePage.selectFilterProductDeskop();
    homePage.addProductToCart('HTC Touch HD');
    cartPage.goToCart();
    cartPage.validateQuantityProductInCart(1);
    cartPage.getCartItems().should('contain', 'HTC Touch HD');
  });
});