/// <reference types="Cypress"/>

const addContext = require('mochawesome/addContext')


export function verificaSnapshot() {
    cy.matchImageSnapshot()
    cy.task('log', 'Regressive testing is ok')
}

export function geraLog(message) {

    cy.task('log', message)
}