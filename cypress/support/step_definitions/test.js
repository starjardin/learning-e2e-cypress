
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given('I am on Home page', () => {
  cy.viewport(1260, 800);
  cy.visit('http://127.0.0.1:5173/');
});

When('I confirm I am in the home page', () => {
  cy.visit('http://127.0.0.1:5173/');
});

Then("I can see everything in the home page", () => {
	cy.contains("Edit src/App.tsx and save to test HMR");
	cy.get("button").click();
	cy.contains("count is 1");
	cy.get("button").click();
	cy.contains("count is 2");
	cy.get("button").click();
	cy.contains("count is 3");
	cy.get("button").click();
	cy.contains("count is 4");
	cy.get("button").click();
	cy.contains("count is 5");

	cy.get("input").type("Hello World");
	cy.get("input").should("have.value", "Hello World");
});
