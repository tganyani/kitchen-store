import {useState} from 'react'
import axios from 'axios'
import styles from '../../styles/addProduct.module.scss'

export default function AddProduct(){
    const [product, setProduct] = useState({
        cost: "",
        image: " "
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let formData = new FormData()
        formData.append('cost',product.cost)
        formData.append('image',product.image)
        await axios.post('/api/product',formData)
            .then(res=>{
                alert(res.data.message)
            })
    }
    return (
        <div className={styles.main}>
            <div className={styles.submain1}>
                <label htmlFor="cost">cost</label>
                <input id="cost" type="number"  onChange={e=>setProduct({...product,cost:e.target.value})}/>
                <label htmlFor="photo">photo</label>
                <input id="photo" type="file"  onChange={e=>setProduct({...product,image:e.target.files[0]})} />
                <button type="submit=" onClick={handleSubmit}>add</button>
            </div>
        </div>
    )
}

