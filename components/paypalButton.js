import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function PayPalPayment(){
    return(
        <PayPalScriptProvider options={{ "client-id":process.env.NEXT_PUBLIC_PAY_PAL_REACT_CLIENT_ID }}>
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "20",
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    alert(`Transaction completed by ${name}`);
                });
            }}
        />
    </PayPalScriptProvider>
    )
}

