import { useState } from 'react';
import { useSelector} from "react-redux"
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import CartItems from './cartItems';

function NavBar() {
    const productsInCart = useSelector(state => state.product)
    const [openMenu, setOpenMenu] = useState(false)
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCheckout = (e)=>{
        router.push('/checkout/details')
        setOpen(false)
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.storeName}>
                <h4><span>Kitchen</span>Stor<span>e</span></h4>
            </div>
            <div className={styles.searchInput} onClick={()=>alert("The search engine is not working")}>
                <input />
                <div className={styles.iconDiv}>
                    <SearchIcon />
                </div>
            </div>
            <ul className={openMenu?styles.navlistsSmallScreen:styles.navlists}>
                <li onClick={()=>setOpenMenu(false)}>
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                    <Link href="/products">
                        <a>products</a>
                    </Link>
                </li>
                <li onClick={()=>setOpenMenu(false)} style={{display:'flex', flexFlow:'row nowrap'}}>
                    <ShoppingBasketIcon onClick={handleClickOpen}/>
                    <p style={{color:'grey'}}>{productsInCart.length}</p>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                    <Link href="/products/addproduct">
                        <a>add product</a>
                    </Link>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                    <Link href="/checkout">
                        <a>checkout</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.menuIcon}>
                <div>
                    {openMenu?<CloseIcon MenuIcon style={{fontSize:"2.2rem"}} onClick={()=>setOpenMenu(!openMenu)}/>:<MenuIcon style={{fontSize:"2.2rem"}} onClick={()=>setOpenMenu(!openMenu)}/>} 
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">
                    Order summary
                </DialogTitle>
                <DialogContent>
                    <CartItems/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>cancel</Button>
                    <Button onClick={handleCheckout} autoFocus>
                        checkout
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default NavBar
