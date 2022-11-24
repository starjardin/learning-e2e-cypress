given('I am on Home page', () => {
  cy.viewport(1260, 800);
  cy.visit('http://127.0.0.1:5173/');
});

// When I set observer @ticketsQuery
//         And I wait for @ticketsQuery
//         Then I verify Alerts page

//     Scenario: I switch to history tab
//         When I click on random visible alert in "OPEN" section
//         Then Alert card details is displayed
//         And I switch to "History" tab in Alert card
//         Then I can see "History" for "Open" alert with corresponding details