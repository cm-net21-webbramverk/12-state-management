// Exempel på reducer
import { createAction, createReducer } from '@reduxjs/toolkit'

const addToCart = createAction('Add a product to cart')

const actions = { addToCart }



const initialState = []  // [{ productId, amount }]

const reducer = createReducer(initialState, {
	// action.payload ska var { productId, amount }
	[addToCart.toString()]: (state, action) => {
		// state är array av cart items
		const newProduct = action.payload
		const existingProduct = state.find(item => newProduct.productId === item.productId)

		if( existingProduct ) {
			// returnera ändrat objekt
			return state.map(item => newProduct.productId === item.productId ? (
				// ändrat objekt
				{ ...item, amount: item.amount + newProduct.amount }
			) : item)
		} else {
			return [ ...state, action.payload ]
		}
	}   // addToCart
})


export { actions, reducer }
