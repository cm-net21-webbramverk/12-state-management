import { combineReducers } from 'redux'
import { reducer as counter } from './counter'
import { reducer as products } from './products'
import { reducer as cart } from './cart'

const rootReducer = combineReducers({
	counter: counter,
	products,  // samma sak som:  products: products
	cart
})

/*
const state = {
	products: [
		{
			id, name, price, inStock
		}
	],
	cart: [
		{
			productId, amount
		}
	],
	counter: 1,
	theme: 'dark',
	...
}
*/

export { rootReducer }