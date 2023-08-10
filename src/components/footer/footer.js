import classes from './footer.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
const Footer = () => {
    return(
        <Router>
        <div id="social" className={classes.footer}>
            <div className={` text-center text-muted`}>
                &copy; copy right 2022 
            </div>
            <div className={` text-center text-muted`}>
                <p>All textual content and intellectual property on [Website Name], including but not limited to articles, blog posts, course materials, and other written content, are the sole property of [Your Name] and are protected by copyright laws and international treaties. Unauthorized use, reproduction, distribution, or modification of any portion of the textual content may violate copyright and intellectual property rights.</p>
            </div>
            <div className='d-flex px-4'>
                <Link href='https://www.facebook.com/'><p className='text-primary h3 px-4 mx-4'><span className='bi bi-facebook'></span>Fackbook</p></Link>
                <Link href='https://www.facebook.com/'><p className='text-primary h3 px-4 mx-4'><span className='bi bi-instagram'></span>Instagram</p></Link>
                <Link href='https://www.facebook.com/'><p className='text-primary h3 px-4 mx-4'><span className='bi bi-twitter'></span>Twitter</p></Link>
                <Link href='tel:+91xxxxxxxx'><p className='text-primary h3 px-4 mx-4'><span className='bi bi-phone'></span>Call us</p></Link>
                <Link href='mailto:m.syedfarhan@gmail.com'><p className='text-primary h3 px-4 mx-4'><span className='bi bi-envelope'></span>Mail</p></Link>
            </div>
        </div>
        </Router>
    )
}
export default Footer;