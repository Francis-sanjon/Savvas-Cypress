

describe('',()=>{
    before('Before', () => {
        cy.log('this is before block')
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
          let rowsLength = rows.length;
          
      
          cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
          cy.writeFile("cypress/fixtures/xlsxData.txt", { rows })
      
       })
      })
})