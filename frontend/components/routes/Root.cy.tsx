import React from 'react'
import Root from './Root'

describe('<Root />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Root />)
  })
})