import { useRouter } from "next/router"
import { useSelector, useDispatch } from 'react-redux'
import { addProductToOrder } from "../../store/slice/products.slice"
import styles from '../../styles/product.module.scss'
import prisma from "../../lib/prisma"


export default function Product({product}){
    const productsToOder = useSelector(state => state.product)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleAddProductTocart = (e)=>{
        dispatch(addProductToOrder({...product,quantity:1}))
    }
    return(
        <div className={styles.main}>
                    <div key={product.id} className={styles.subMain1}>
                        <div className={styles.submain21}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={styles.submain22}>
                            <p>$:{product.cost}</p>
                            <button id={String(product.id)} onClick={handleAddProductTocart}>Order</button>
                        </div>
                    </div>
        </div>
    )
}

export async function getStaticPaths(){
    const products = await prisma.product.findMany()
    const paths = products.map((product) => ({
        params: { id: String(product.id)},
      }))
    return { paths, fallback: false }  
}

export  async function getStaticProps({params}){
    const product = await prisma.product.findUnique({
        where:{
            id: Number(params.id)
        }
    })
    return {
        props:{
            product
        }
    }
}


