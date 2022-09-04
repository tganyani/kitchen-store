import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PayPalPayment from "../../components/paypalButton";
import CustomerInfo from "../../components/customerInfo";
import UnEditableCartItems from "../../components/unEditableCartItems";
import styles from '../../styles/checkout.module.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function App() {
    const customer = useSelector(state => state.customer)
    const router = useRouter()
    return (
        <div className={styles.main}>
            <ArrowBackIosIcon onClick={()=>router.push('/checkout/details')}/>
            <div className={styles.submain1}>
            <CustomerInfo />
            <PayPalPayment/>
            </div>
            <div className={styles.submain2}>
                <UnEditableCartItems/>
            </div>
        </div>
    );
}