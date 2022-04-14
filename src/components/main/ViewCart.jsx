import { useSelector } from 'react-redux'

const ViewCart = () => {
	const cartItems = useSelector(state => state.cart)
	// const products = useSelector(state => state.products)

	return (
		<div className="view-cart">
		{cartItems.length > 0 ?
			cartItems.map(item => (
			<div key={item.productId}>
				Id {item.productId} ... {item.amount} st.
			</div>
		)) : "Din kundvagn är tom!"}
		</div>
	)
}

export default ViewCart
