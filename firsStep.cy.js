/// <reference types="cypress" />

import testData from '../fixtures/testData.json'
import GoogleSearch from '../pages/googlePage.cy'

describe('Firststep' ,()=>{

    it('google open', ()=>{

cy.visit(testData.Webseite);
 GoogleSearch.Search();


})

it('weiter drückren', ()=>{

    cy.visit('https://google.com');
cy.get('#L2AGLb > .QS5gu').click();
cy.get('.SDkEP').type("amel tutic tehnolosko{enter}");
cy.scrollTo("bottom");

    cy.get('[style="display:block;margin-left:53px"]').click();


    })

})