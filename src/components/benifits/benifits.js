import classes from './benifits.module.css'
import amazon from '../../assests/amazon.jpg'
import google from '../../assests/google.png'
import cobra from '../../assests/cobra.png'
import microsoft from '../../assests/microsoft.jpg'
import puma from '../../assests/puma.png'
import tcs from '../../assests/tcs.png'
import Utils from './utils'
const Benifits = () =>{
    return(
    <div id="benifits" className={` ${classes.container} container m-5`}>
        <div className='text-center w-100'>
            <span className="bi text-primary h1 bi-star-fill"></span>
            <span className="bi text-primary h1 bi-star-fill"></span>
            <span className="bi text-primary h1 bi-star-fill"></span>
            <span className="bi text-primary h1 bi-star-fill"></span>
            <span className="bi text-primary h1 bi-star-fill"></span>
        <h1>5 Star Ratings By This Companies</h1>
        <br></br>
        </div>
        <div className="cardcontainer px-4 m-3 d-flex">
            <div className='card '>
                <div className={` px-4 card-img`}>
                    <img className={`${classes.companyimages}`} src={amazon} width="150" height="100"  alt='amazon' />
                </div>
            </div>
            <div className='card '>
                <div className={` px-4 card-img`}>
                    <img className={`${classes.companyimages}`} src={google} width="150" height="100"  alt='amazon' />
                </div>
            </div>
            <div className='card '>
                <div className={` px-4 card-img`}>
                    <img className={`${classes.companyimages}`} src={cobra} width="150" height="100"  alt='amazon' />
                </div>
            </div>
            <div className='card '>
                <div className={` px-4 card-img`}>
                    <img className={`${classes.companyimages}`} src={microsoft} width="150" height="100"  alt='amazon' />
                </div>
            </div>
            <div className='card '>
                <div className={` px-4 card-img`}>
                    <img className={`${classes.companyimages}`} src={puma} width="150" height="100"  alt='amazon' />
                </div>
            </div>
            <div className='card '>
                <div className={` px-4 card-img`}>
                    <img className={`${classes.companyimages}`} src={tcs} width="150" height="100"  alt='amazon' />
                </div>
            </div>

        </div>
        <br></br>
        <div>
            <Utils />
        </div>
    </div>
)}

export default Benifits;