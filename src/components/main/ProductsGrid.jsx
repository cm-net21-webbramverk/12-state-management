import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../features/cart'

const ProductsGrid = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products)

	return (
		<div className="products">
		{products.map(p => (
			<div key={p.id}>
				<h3>{p.name}</h3>
				<div>{p.price} kr</div>
				<div>{p.inStock} kvar i lager</div>
				<button onClick={() => dispatch(actions.addToCart({ productId: p.id, amount: 1 })) }> Lägg i kundvagn </button>
			</div>
		))}
		</div>
	)
}

export default ProductsGrid
