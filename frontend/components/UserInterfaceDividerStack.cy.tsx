import React from 'react'
import DividerStack from './UserInterface'

describe('<DividerStack />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DividerStack />)
  })
})