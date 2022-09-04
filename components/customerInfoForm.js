import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useRouter } from "next/router"
import {addCustomer} from '../store/slice/customer.slice'
import styles from '../styles/customerInfoForm.module.scss'


export default function CustomerInfoForm(){
    const customer = useSelector(state => state.customer)
    const dispatch = useDispatch()
    const router = useRouter()
    const [customerDetails, setCustomerDetails] = useState({
        name: customer.name,
        email: customer.email,
        address: customer.address,
        phoneNumber: customer.phoneNumber
    })
    const handleClickContinue = () => {
        dispatch(addCustomer(customerDetails))
        router.push('/checkout')
    }
    return(
        <div className={styles.main}>
            <div className={styles.submain1}>
                <h4>Your information</h4>
                <label htmlFor="name">full name</label>
                <input type='text' id='name' value={customerDetails.name} onChange={e => setCustomerDetails({ ...customerDetails, name: e.target.value })} />
                <label htmlFor="email">email</label>
                <input type='email' id='email' placeholder='example@gmail.com' value={customerDetails.email} onChange={e => setCustomerDetails({ ...customerDetails, email: e.target.value })} />
            </div>
            <div className={styles.submain2}>
                <h4>Shipping information</h4>
                <label htmlFor="address">street address</label>
                <input type='text' id='address' value={customerDetails.address} onChange={e => setCustomerDetails({ ...customerDetails, address: e.target.value })} />
                <label htmlFor="phone-number">phone number</label>
                <input type='text' id='phone-number' value={customerDetails.phoneNumber} onChange={e => setCustomerDetails({ ...customerDetails, phoneNumber: e.target.value })} />
            </div>
            <div className={styles.submain3}>
                <button onClick={handleClickContinue}>continue</button>
            </div>
        </div>
    )
}
