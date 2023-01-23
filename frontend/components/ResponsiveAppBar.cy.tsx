import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

describe('<ResponsiveAppBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ResponsiveAppBar />)
  })
})