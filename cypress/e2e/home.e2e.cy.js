describe("Home E2E", () => {
	it("Home correct", () => {
		cy.login("john@example.com", "2aSsword95%");

		cy.visit("/");

		cy.get(".user-name").should("contain.text", "John Doe");
	});

	it("Home incorrect", () => {
		cy.window().then((win) => {
			win.localStorage.clear();
		});

		cy.visit("/");

		cy.get(".q-banner").should("contain.text", "No estas logueado.");
	});
});
