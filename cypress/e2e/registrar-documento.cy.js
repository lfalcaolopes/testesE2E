describe("testes de cadastro de usuario e login", () => {
  beforeEach(() => {
    //ARRANGE
    //cy.visit("https://driveoas.vercel.app/");
    cy.visit("http://localhost:5173/");

    cy.get("a").contains("Entrar").click();
    cy.get("a").contains("Login").click();

    cy.fixture("../fixtures/user.json").then((userData) => {
      cy.get('input[name="email"]').type(userData.email);
      cy.get('input[name="password"]').type(userData.senha);
    });

    cy.get("button").contains("Login").click();
  });

  it("Cadastrar novo documento com dados funcionais", () => {
    //ACT
    cy.get("a").contains("+ Fazer upload de arquivo").click();
    cy.get('input[type="text"]').type(
      "https://media.discordapp.net/attachments/1114683805635199193/1175572363321036931/image.png?ex=656bb814&is=65594314&hm=8023200ca7e8fc07e37c33b0b50bb9c05da6c07f7bc8e202ea4ba2e57549bad7&=&width=496&height=670"
    );
    cy.get("button").contains("Feito").click();

    // ASSERT
    cy.get("a").contains("Meus arquivos").click();
    cy.url().should('eq', 'http://localhost:5173/dashboard/myFiles');
    cy.get('[id="documento"]').should("have.length", 3);
  });

  it("Remover um documento", () => {
    //ARRANGE
    cy.get("a").contains("Meus arquivos").click();
    cy.url().should('eq', 'http://localhost:5173/dashboard/myFiles');
    cy.get('[id="documento"]').should("have.length", 2);

    //ACT
    cy.wait(1000)
    cy.get('[id="trash"]').first().click();

    // ASSERT
    cy.get('[id="documento"]').should("have.length", 1);
  });

});
