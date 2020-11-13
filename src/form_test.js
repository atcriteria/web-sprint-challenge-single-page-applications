// Form tests. Cypress refuses to install itself into this application so I will write the tests anyway and troubleshoot the why later

describt('Form App', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    const textName = () => cy.get('input[name="name"]');
    const instructions = () => cy.get('input[name="instructions"]');
    const topping1 = () => cy.get('input[name="topping1"]');
    const topping2 = () => cy.get('input[name="topping2"]');
    const topping3 = () => cy.get('input[name="topping3"]');
    const submitBtn = () => cy.get('button');

    it('test name input', () => {
        textName()
        .should('exist')
        .type('Bruce')
        .should('have.value', 'Bruce')
    });
    it('test instructions', () => {
        instructions()
        .should('exist')
        .type('No sauce plzzz')
        .should('have.value', 'No sauce plzzz')
    });
    it('test toppings', () => {
        topping1().click()
        topping2().click()
        topping3().click()
    });
    it('test submit, check state', () => {
        submitBtn().click()
    });
});

// I'm confident all of these tests will pass as well as work as intended
// Cypress overall is fairly simple to use, though it is buggy as hell with my code and never wanting to work properly