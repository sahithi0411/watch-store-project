import './index.css'
import Header from '../Header'
import { useNavigate } from 'react-router'

const cartItem = JSON.parse(localStorage.getItem('cartItem')) || []

const onDeleteItem = id => {
    const filteredCart = cartItem.filter(
        eachItem => eachItem.id !== id
    )
    localStorage.setItem(
        'cartItem',
        JSON.stringify(filteredCart)
    )

    window.location.reload()
}

const Cart = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />

            <div className='cart-container'>
                <h1 className='cart-heading'>My Cart</h1>
                {cartItem.length === 0 ? (
                    <p className='empty-text'>Your Cart is Empty</p>
                ) : (
                    <ul className='cart-list'>
                        {cartItem.map(eachItem => (
                            <li className='cart-card' key={eachItem.id}>
                                <img 
                                    src={eachItem.imageUrl}
                                    alt={eachItem.name}
                                    className='cart-image'
                                />
                                <div>
                                    <h1 className='cart-name'>
                                        {eachItem.name}
                                    </h1>
                                    <p className='cart-brand'>
                                        {eachItem.brand}
                                    </p>
                                    <p className='cart-price'>
                                        {eachItem.price}
                                    </p>
                                    <p className='cart-rating'>
                                        {eachItem.rating}
                                    </p>
                                    <button className='cart-delete' type='button' onClick={() =>
                                        onDeleteItem(eachItem.id) }
                                    >
                                        Delete Cart
                                    </button>
                                    <button className='buy-btns' type='button' onClick={() => 
                                        navigate('/buynow')}>
                                        Buy Now
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}
export default Cart