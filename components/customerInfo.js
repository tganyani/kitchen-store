import { useSelector } from "react-redux"
import styles from '../styles/customerInfo.module.scss'

export default function CustomerInfo(){
    const customer = useSelector(state => state.customer)
    return(
        <div className={styles.main}>
            <p><span>full name</span> :{customer.name}</p>
            <p><span>email</span>: {customer.email}</p>
            <p><span>address</span>: {customer.address}</p>
            <p><span> phone-number</span>: {customer.phoneNumber}</p>
        </div>
    )
}

