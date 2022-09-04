import { useState } from 'react'
import  axios from 'axios'
import styles from '../styles/newsletter.module.scss'
 

export default function NewsLetter(){
    const [email, setEmail] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('/api/customers',{email})
            .then(res=>{
                alert(res.data.message)
            })
    }
    return(
        <div className={styles.main}>
            <div className={styles.submain11}>
                <h3>Subscribe to our newsletter</h3>
                <p>Get latest news and product updates straight in your inbox</p>
            </div>
            <div className={styles.submain12}>
                <input type='email' placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Subscribe</button>
            </div>
        </div>
    )
}


