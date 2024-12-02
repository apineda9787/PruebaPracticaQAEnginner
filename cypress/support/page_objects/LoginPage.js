class LoginPage {
    visit() {
      cy.visit('/index.php?route=account/login');
    }
  
    login(email, password) {
      cy.get('#input-email').type(email);
      cy.get('#input-password').type(password);
      cy.get('input[type="submit"]').click();
    }
  
    getLoginError() {
      return cy.get('.alert-danger');
    }

    getMyAccountLogin() {
        return cy.get('[class="card-header h5"]')
    }
  }
  
  export const loginPage = new LoginPage();  