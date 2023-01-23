import React from 'react'
import RecipeCards from './RecipeCards'

describe('<RecipeCards />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeCards />)
  })
})