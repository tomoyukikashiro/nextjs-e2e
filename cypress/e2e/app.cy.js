describe("test app", () => {
  it("tests test app", () => {
    // mock request
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users/1", {
      fixture: "user.json",
    });

    cy.visit("http://localhost:3000/");

    cy.get("input[name='id']").type("test");

    cy.get("input[name='pass']").type("pass");

    cy.get("button[type='submit']").click();

    // production : Leanne Graham
    cy.get("h1").contains("Test User Name");
  });
});
