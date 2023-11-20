describe("testes de cadastro de usuario e login", () => {
    beforeEach(() => {
      cy.visit("https://driveoas.vercel.app/");
      
    });
  
    it("Cadastrar novo usuario com dados funcionais", () => {
      cy.get('.bg-blue-500').click()
      cy.get(':nth-child(1) > .px-2').type("Catureba the king")
      cy.get(':nth-child(2) > .px-2').type("caturebatheking@gmail.com")
      cy.get(':nth-child(3) > .px-2').type("12722694666")
      cy.get(':nth-child(4) > .px-2').type("senhaforte123")
      cy.get('.px-8').click()
    });
  
    it("Fazer login com usuario recem cadastrado", () => {
      cy.get('.bg-blue-500').click()
      cy.get('.underline').click()
      cy.get(':nth-child(1) > .px-2').type("caturebatheking@gmail.com")
      cy.get(':nth-child(2) > .px-2').type("senhaforte123")
      cy.get('.px-8').click()
    });
  
  });
  