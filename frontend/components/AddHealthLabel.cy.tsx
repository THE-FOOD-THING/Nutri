import React from 'react'
import AddHealthLabel from './AddHealthLabel'

describe('<AddHealthLabel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddHealthLabel />)
  })
})