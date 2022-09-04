import CustomerInfoForm from "../../components/customerInfoForm"
import CartItems from "../../components/cartItems"
import styles from '../../styles/details.module.scss'

export default function ShippingDetails() {
    
    return (
        <div className={styles.main}>
            <h3>fill in details</h3>
            <div className={styles.submain1}>
                <CustomerInfoForm />
                <div className={styles.submain2}>
                    <h4>Order summary</h4>
                    <CartItems />
                </div>
            </div>
        </div>
    )
}