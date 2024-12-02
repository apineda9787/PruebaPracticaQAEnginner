/// <reference types="cypress" />

import { homePage } from '../../support/page_objects/HomePage';

const { Input } = require("@angular/core")

describe('Validar la búsqueda de productos en la pagina principal.', () => {
  beforeEach(() => {
    cy.viewport(Cypress.env('desktopWidth'), Cypress.env('desktopHeight'));
    homePage.visit();
  });

  it('Buscar productos en el filtro de la pagina principal y que los resultados que se generen sean correctos.', () => {
    homePage.selectFilterProductDeskop();
    homePage.setRangePrice(95, 98);
    homePage.getSearchResults().should('contain', '98');
  });
});