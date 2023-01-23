import React from 'react'
import RecipeReviewCard from './RecipeCard'

describe('<RecipeReviewCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeReviewCard />)
  })
})