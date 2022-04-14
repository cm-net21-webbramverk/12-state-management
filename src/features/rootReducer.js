import { combineReducers } from 'redux'
import { reducer as counter } from './counter'

const rootReducer = combineReducers({
	counter: counter
	// lägg till fler reducers efter behov
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