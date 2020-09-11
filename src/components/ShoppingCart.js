import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	const { cart, setCart } = useContext(CartContext)
	// const cart = useContext(CartContext)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const removeBook = (id) => {
		console.log(id);
		let newCart = cart.map( (book) => {
			if ( id !== book.id ) {
				return book;
			}
		})
		console.log(newCart)
		setCart(newCart);
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeBook={removeBook} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
