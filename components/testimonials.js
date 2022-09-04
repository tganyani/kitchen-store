import { useState, } from 'react';
import axios from 'axios'
import styles from '../styles/testimonials.module.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



function Testimonials({data}){
    const [testimonyData, setTestimonyData] = useState({
        customer:"",
        message:"",
        image:"",
    })
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let formData = new FormData()
        formData.append('customer',testimonyData.customer)
        formData.append('message',testimonyData.message)
        formData.append('image',testimonyData.image)
        await axios.post('/api/comments',formData)
                    .then(res=>{
                        alert(res.data.message)
                    })
       
    }
    return (
        <div className={styles.main}>
            <div className={styles.headerTitle}>
                <h4>This is what our customers say about us<FormatQuoteIcon id={styles.qoute}/></h4>
            </div>
            <div className={styles.testimonials}>
            {
                JSON.parse(data).map(testimony => (
                    <div className={styles.card} key={testimony.id}>
                        <div className={styles.cardBody}>
                            <img src={testimony.image} />
                            <p>{testimony.message}</p>
                        </div>
                        <div className={styles.cardFooter}>
                            <p>{testimony.customer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className={styles.addButton}>
            <button onClick={handleClickOpen}>Add your feedback</button>
        </div>
        <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">
                    Share your feedback
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' onChange={e=>setTestimonyData({...testimonyData, customer:e.target.value})} />
                    <label htmlFor='message'>message</label>
                    <textarea id='message' rows={5}  onChange={e=>setTestimonyData({...testimonyData, message:e.target.value})}/>
                    <label htmlFor='image'>photo</label>
                    <input id='image' type='file' onChange={e=>setTestimonyData({...testimonyData, image:e.target.files[0]})} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>cancel</Button>
                    <Button onClick={handleSubmit} autoFocus>
                        submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}




export default Testimonials
