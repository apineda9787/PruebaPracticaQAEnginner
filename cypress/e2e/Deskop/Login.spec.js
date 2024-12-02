/// <reference types="cypress" />

import { loginPage } from '../../support/page_objects/LoginPage';

const { Input } = require("@angular/core")

describe('Validar el Login del aplicativo', () => {
  beforeEach(() => {
    cy.viewport(Cypress.env('desktopWidth'), Cypress.env('desktopHeight'));
    loginPage.visit();
  });

  it('Se verifica si las credenciales son invalidas cuando se realiza el login', () => {
    loginPage.login('andrespineda.9704@gmail.com', 'Prueba123');
    loginPage.getLoginError().should('contain', 'Warning');
  });

  it('Se verifica si las credenciales son validas cuando se realiza el login', () => {
    loginPage.login('andrespineda.9704@gmail.com', 'Prueba123.');
    loginPage.getMyAccountLogin().should('contain', 'My Account');
  });

});