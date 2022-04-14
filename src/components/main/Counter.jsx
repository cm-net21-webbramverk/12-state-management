import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../features/counter'

const Counter = () => {
	// 	dispatch används för att skicka actions till store, så att reducers kan producera nästa state
	const dispatch = useDispatch()

	// 	useSelector väljer ut en del av state från Redux store. "counter" är namnet på din reducer i rootReducer-filen.
	const count = useSelector(state => state.counter)

	const increase1 = () => dispatch(actions.increaseByOne())
	const increase5 = () => dispatch(actions.increase(5))

	return (
		<div>
			Value is: {count}.
			<button onClick={increase1}> +1 </button>
			<button onClick={increase5}> +5 </button>
		</div>
	)
}

export default Counter