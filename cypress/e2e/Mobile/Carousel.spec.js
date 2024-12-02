/// <reference types="cypress" />

import { homePage } from '../../support/page_objects/HomePage';

const { Input } = require("@angular/core")

describe('Validar carrusel de ofertas.', () => {
  beforeEach(() => {
    cy.viewport(Cypress.env('mobileWidth'), Cypress.env('mobileHeight'));
    homePage.visit();
  });

  it('El carrusel se debe mostrar correctamente con  las dimensiones configuradas.', () => {
    homePage.validateCarousel();
  });
});