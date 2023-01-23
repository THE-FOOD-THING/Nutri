import React from 'react'
import SearchRecipes from './SearchRecipes'

describe('<SearchRecipes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchRecipes />)
  })
})