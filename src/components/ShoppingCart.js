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
		// const newCart = cart.map( (book) => {
		// 	if ( id != book.id ) {
		// 		console.log(book)
		// 		return book;
		// 	} else {
		// 		console.log('this one shouldn\'t return', book)
		// 	}
		// })
		const newCart = cart.filter( (book) => {
			return id != book.id;
		});
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
