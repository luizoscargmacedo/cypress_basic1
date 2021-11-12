/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const URL = 'https://www.ebay.com/';
const ebayField = "//*[@id='gh-ac']";
const buttonSearch = "//*[@id='gh-btn']";
const productInfo = "headset";
const resultItem = "Bluetooth";

export function firstPage() {
    cy.visit(URL);
    cy.xpath(ebayField).should('be.visible')
    hooks.geraLog('Ebay page is working correctly')
}

export function searchOperation() {
    cy.xpath(ebayField).type(productInfo, { force: true })
    cy.xpath(buttonSearch).click({ force: true })
    hooks.geraLog('Product search is executed')
}

export function resultValidation() {
    cy.wait(8000)
    cy.contains(resultItem).should('be.visible')
    hooks.geraLog('Product result is confirmed')
}
