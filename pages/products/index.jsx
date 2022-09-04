import { useState } from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import styles from '../../styles/products.module.scss'
import Rating from '@mui/material/Rating';
import {addProductToOrder} from '../../store/slice/products.slice'
import prisma from '../../lib/prisma';

function Products({products}){
    const [value, setValue] = useState(4)
    const dispatch = useDispatch()
    const handleAddProductTocart = async(e)=>{
        const productToAdd = await JSON.parse(products).filter(product => String(product.id) === e.target.id)
        dispatch(addProductToOrder({...productToAdd[0],quantity:1}))
    }
    return (
        <div className={styles.products}>
           {
            JSON.parse(products).map(product =>(
                <div className={styles.productCard} key={product.id}>
                    <Link href={`/products/${String(product.id)}`}>
                        <div className={styles.productsImage}>
                            <img src={product.image} alt={product.id} />
                        </div>
                    </Link>

                    <div className={styles.cardBody}>
                        <p>$:{product.cost}</p>
                        <Rating name="simple-controlled" value={value} onChange={(e) => setValue(e.target.value)} />
                        <button  id={String(product.id)} onClick={handleAddProductTocart}>Order</button>
                    </div>
                </div>
            ))
           }
        </div>
    )
}

export  async function getStaticProps(){
    const res = await prisma.product.findMany()
    const products = await JSON.stringify(res)
    return {
        props:{
            products
        }
    }
}

export default Products