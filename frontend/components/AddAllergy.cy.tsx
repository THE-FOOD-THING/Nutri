import React from 'react'
import AddAllergy from './AddAllergy'

describe('<AddAllergy />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddAllergy />)
  })
})