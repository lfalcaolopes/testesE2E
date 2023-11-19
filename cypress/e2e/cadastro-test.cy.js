describe("testes de cadastro de usuario e login", () => {
  beforeEach(() => {
    //ARRANGE
    //cy.visit("https://driveoas.vercel.app/");
    cy.visit("http://localhost:5173/");
    cy.wait(1000);
  });

  it("Cadastrar novo usuario com dados funcionais", () => {
    //ARRANGE
    cy.get("a").contains("Entrar").click();

    //ACT
    cy.fixture("../fixtures/user.json").then((userData) => {
      cy.get('input[name="fullName"]').type(userData.nome);
      cy.get('input[name="email"]').type(userData.email);
      cy.get('input[name="RA"]').type(userData.ra);
      cy.get('input[name="password"]').type(userData.senha);
    });

    cy.wait(1000);
    cy.get("a").contains("Cadastrar").click();
    cy.wait(1000);

    // ASSERT
    cy.url().should("eq", "http://localhost:5173/dashboard");
  });

  it("Fazer login com usuario recem cadastrado", () => {
    //ARRANGE
    cy.get("a").contains("Entrar").click();
    cy.get("a").contains("Login").click();
    
    //ACT
    cy.fixture("../fixtures/user.json").then((userData) => {
      cy.get('input[name="email"]').type(userData.email);
      cy.get('input[name="password"]').type(userData.senha);
    });

    cy.wait(1000);
    cy.get("button").contains("Login").click();
    cy.wait(1000);

    // ASSERT
    cy.url().should("eq", "http://localhost:5173/dashboard");
  });

  it("Fazer login com usuario invalido", () => {
    //ARRANGE
    cy.get("a").contains("Entrar").click();
    cy.get("a").contains("Login").click();

    //ACT
    cy.get('input[name="email"]').type("esseemailnemexiste@gmail.com");
    cy.get('input[name="password"]').type("senhaquenemexiste");
    cy.get("button").contains("Login").click();
    cy.wait(1000);
    
    // ASSERT
    cy.url().should("not.eq", "http://localhost:5173/dashboard");
    cy.on("window:alert", (textoAlerta) => {
      expect(textoAlerta).to.equal("Email ou senha devem estar incorrretos!");
    });

  });
});
