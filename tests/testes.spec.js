describe('Testando calculadora',()=>{
    it('Soma de números',()=>{
    cy.visit('/') //abre o site no cypress
    cy.get('[value="5"]').click() // selecioona o nº e faz o click
    cy.get('[value="+"]').click() 
    cy.get('[value="2"]').click() 
    cy.get('[value="="]').click() 

  })
  it('Multiplicação de dois números',()=>{
    cy.visit('/') //abre o site no cypress
    cy.get('[value="5"]').click() // selecioona o nº e faz o click
    cy.get('[value="x"]').click() 
    cy.get('[value="2"]').click() 
    cy.get('[value="="]').click() 
    cy.get('#tela').should('have.text','10')
  })
})
