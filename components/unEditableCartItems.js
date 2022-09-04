import { useSelector, useDispatch } from "react-redux"
import {removeProductFromOrder} from '../store/slice/products.slice'
import styles from '../styles/cartItems.module.scss'


export default function UnEditableCartItems(){
    const productsInCart = useSelector(state => state.product)
    const dispatch = useDispatch()
    const handleRemove = (e)=>{
        dispatch(removeProductFromOrder(e.target.id))
    }
    const total = productsInCart.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.quantity)*Number(currentValue.cost), 0)

    return (
        <table className={styles.main}>
            <thead>
                <tr>
                    <th>item</th>
                    <th>quantity</th>
                    <th>cost /'$'</th>
                </tr>
            </thead>
            <tbody>
                {
                    productsInCart.map(product => (
                        <tr key={product.id} >
                            <td> <img src={product.image} alt="" style={{ width: '70px', height: '70px' }} /><p>menu:${product.id}</p></td>
                            <td>{product.quantity}</td>
                            <td>{product.cost}</td>
                            <td><button id={product.id} onClick={handleRemove}>remove</button></td>
                        </tr>
                    )
                    )
                }
                <tr>
                    <td>total cost:${
                        total
                    }
                    </td>
                </tr>
                <tr>
                    <td>delivery cost:$ 0</td>
                </tr>
                <tr>
                    <td>payment amount:$ {total}</td>
                </tr>
            </tbody>
        </table>
    )
}