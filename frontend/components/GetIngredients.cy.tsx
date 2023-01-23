import React from 'react'
import GetIngredients from './GetIngredients'

describe('<GetIngredients />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GetIngredients />)
  })
})