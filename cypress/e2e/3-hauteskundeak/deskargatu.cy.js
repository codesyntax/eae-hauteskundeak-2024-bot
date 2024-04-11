/// <reference types="cypress" />

describe('Deskargatu Hauteskundeen emaitzen XML fitxategia', () => {
  beforeEach(() => {
    cy.visit('https://medios.euskadielecciones.eus/files/Resultados.xml');
  });

  it('login egin fitxategia deskargatzeko', () => {
    cy.wait(2000);
    cy.get('#username').type(Cypress.env('USERNAME'));
    cy.get('#password').type(Cypress.env('PASSWORD'));
    cy.get('#cal-login-button').click();
    cy.readFile('cypress/downloads/Resultados.xml').then((text) => {
      cy.writeFile(Cypress.env('RESULT_FILE_PATH'), text);
    });
  });
});
