/// <reference types="cypress" />

import { homePage } from '../../support/page_objects/HomePage';

const { Input } = require("@angular/core")

describe('Validar la interfaz del menú móvil', () => {
  beforeEach(() => {
    cy.viewport(Cypress.env('mobileWidth'), Cypress.env('mobileHeight'));
    homePage.visit();
  });

  it('Debe abrir y mostrar el menú correctamente', () => {
    homePage.openMobileMenu();
    homePage.getMenuItems().should('be.visible');
  });
});