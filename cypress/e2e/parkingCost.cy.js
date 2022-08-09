describe('ParkingCost', () => {

  beforeEach('Navigate to app', () => {
    cy.visit('https://www.shino.de/parkcalc/index.php')
  })

  it('No entry', () => {
    cy.get('#ParkingLot')
      .should('have.value', 'Valet')
    cy.get('input[name="Submit"]')
      .click();
    cy.get('b').should('have.text','ERROR! Enter A Correctly Formatted Date')

  });


  it('Valet Parking-daily', () => {
    cy.get('#ParkingLot')
      .should('have.value', 'Valet')
    cy.selectDateFromCurrent(0,1)
    cy.get('input[name="LeavingTimeAMPM"]').first().check();
    cy.wait(500)
    cy.submitAndVerify( ' 18.00','1','0', '0');

  })
  it('Valet Parking-5 hours', () => {
    cy.get('#ParkingLot')
      .should('have.value', 'Valet')
    cy.selectDateFromCurrent(0,0)
    cy.get('#LeavingTime').clear().type('5:00')
    cy.submitAndVerify( ' 12.00','0','5', '0');

  })
  it('Short term- first hour', () => {
    cy.get('#ParkingLot')
      .select('Short-Term Parking')
      .should('have.value', 'Short')
    cy.selectDateFromCurrent(0,0)
    cy.get('#LeavingTime').clear().type('1:00')
    cy.submitAndVerify( ' 2.00','0','1', '0');
    cy.get('#ParkingLot')
      .select('Short-Term Parking')
      .should('have.value', 'Short')
    cy.get('#LeavingTime').clear().type('1:30')
    cy.submitAndVerify( ' 3.00','0','1', '30');

  })
  it('Short term- daily max', () => {
    cy.get('#ParkingLot')
      .select('Short-Term Parking')
      .should('have.value', 'Short')
    cy.selectDateFromCurrent(0,1)
    cy.submitAndVerify( ' 24.00','1','0', '0');

    cy.get('#ParkingLot')
      .select('Short-Term Parking')
      .should('have.value', 'Short')
    cy.selectDateFromCurrent(0,2)
    cy.submitAndVerify( ' 48.00','2','0', '0');
  })

  it('Economy parking - hourly', () => {
    cy.get('#ParkingLot')
      .select('Economy Parking')
      .should('have.value', 'Economy')
    cy.selectDateFromCurrent(0,0)
    cy.get('#LeavingTime').clear().type('1:00')
    cy.submitAndVerify( ' 2.00','0','1', '0');
  })

  it('Economy parking - daily', () => {
    cy.get('#ParkingLot')
      .select('Economy Parking')
      .should('have.value', 'Economy')
    cy.selectDateFromCurrent(0,1)
    cy.submitAndVerify( ' 9.00','1','0', '0');
  })

  it('Economy parking - weekly', () => {
    cy.get('#ParkingLot')
      .select('Economy Parking')
      .should('have.value', 'Economy')
    cy.selectDateFromCurrent(0,6)
    cy.submitAndVerify( ' 54.00','6','0', '0');

    cy.get('#ParkingLot')
      .select('Economy Parking')
      .should('have.value', 'Economy')
    cy.selectDateFromCurrent(0,7)
    cy.submitAndVerify( ' 54.00','7','0', '0');
  })

  
  it('Long term garage parking - hourly', () => {
    cy.get('#ParkingLot')
      .select('Long-Term Garage Parking')
      .should('have.value', 'Long-Garage')
    cy.selectDateFromCurrent(0,0)
    cy.get('#LeavingTime').clear().type('1:00')
    cy.submitAndVerify( ' 2.00','0','1', '0');
  })

  it('Long term garage parking - daily', () => {
    cy.get('#ParkingLot')
      .select('Long-Term Garage Parking')
      .should('have.value', 'Long-Garage')
    cy.selectDateFromCurrent(0,1)
    cy.submitAndVerify( ' 12.00','1','0', '0');
  })

  it('Long term garage parking - weekly', () => {
    cy.get('#ParkingLot')
      .select('Long-Term Garage Parking')
      .should('have.value', 'Long-Garage')
    cy.selectDateFromCurrent(0,6)
    cy.submitAndVerify( ' 72.00','6','0', '0');

    cy.get('#ParkingLot')
      .select('Long-Term Garage Parking')
      .should('have.value', 'Long-Garage')
    cy.selectDateFromCurrent(0,7)
    cy.submitAndVerify( ' 72.00','7','0', '0');
  })

  it('Long term surface parking - hourly', () => {
    cy.get('#ParkingLot')
      .select('Long-Term Surface Parking')
      .should('have.value', 'Long-Surface')
    cy.selectDateFromCurrent(0,0)
    cy.get('#LeavingTime').clear().type('1:00')
    cy.submitAndVerify( ' 2.00','0','1', '0');

    cy.get('#ParkingLot')
      .select('Long-Term Surface Parking')
      .should('have.value', 'Long-Surface')
    cy.selectDateFromCurrent(0,0)
    cy.get('#LeavingTime').clear().type('2:00')
    cy.submitAndVerify( ' 4.00','0','2', '0')
  })

  it('Long term surface parking - daily', () => {
    cy.get('#ParkingLot')
      .select('Long-Term Surface Parking')
      .should('have.value', 'Long-Surface')
    cy.selectDateFromCurrent(0,1)
    cy.submitAndVerify( ' 10.00','1','0', '0')
  })

  it('Long term surface parking - weekly', () => {
    cy.get('#ParkingLot')
      .select('Long-Term Surface Parking')
      .should('have.value', 'Long-Surface')
    cy.selectDateFromCurrent(0,6)
    cy.submitAndVerify( ' 60.00','6','0', '0')

    cy.get('#ParkingLot')
    .select('Long-Term Surface Parking')
    .should('have.value', 'Long-Surface')
    cy.selectDateFromCurrent(0,7)
    cy.submitAndVerify( ' 60.00','7','0', '0');
  })


})
