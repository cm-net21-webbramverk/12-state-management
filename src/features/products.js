// Exempel på reducer
import { createAction, createReducer } from '@reduxjs/toolkit'



const actions = {}



const initialState = [
	{ id: 1, name: 'Vårjacka', price: 700, inStock: 3 },
	{ id: 3, name: 'Vårbyxor', price: 500, inStock: 5 },
	{ id: 4, name: 'Scarf', price: 3000, inStock: 200 }
]

const reducer = createReducer(initialState, {
	// Cart action som påverkar products också
	// [addToCart.toString()]: ..........
})

export { actions, reducer }
