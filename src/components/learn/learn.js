import classes from './learn.module.css'
import india from '../../assests/india.jpg'
import us from '../../assests/us.jpg'
import china from '../../assests/china.jpg'
import uae from '../../assests/uae.jpg'
import russia from '../../assests/russia.jpg'
import portugal from '../../assests/portugal.jpg'
import korea from '../../assests/korea.jpg'
import pakistan from '../../assests/pakistan.jpg'
const Learn = () =>{
    return(
        <div className={`container ${classes.container}  `}>
            <div>
            <h1 className={` text-center ${classes.what}`}>Start Learning this languages </h1>
            </div>
            <br></br>
            <table className='w-100'>
                <tr>
                    <td><img src={india} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                    <td><img src={us} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                    <td><img src={china} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                    <td><img src={korea} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                </tr>
                <tr>
                    <th>हिंदी-India</th>
                    <th>English-United States</th>
                    <th>中国人-Chinese </th>
                    <th>한국인-koria </th>
                </tr>
            </table>
            <br></br>
            <table className='w-100 ' >
                <tr>
                    <td><img src={uae} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                    <td><img src={russia} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                    <td><img src={portugal} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                    <td><img src={pakistan} className={`${classes.contries} rounded-circle`} alt="india" width="150" height="150" ></img></td>
                </tr>
                <tr>
                    <th>عربي-United Emirates</th>
                    <th>Россия-Russian</th>
                    <th>Português-Portuguese </th>
                    <th>اردو-pakistan</th>
                </tr>
            </table>
            
        </div>
    )
}
export default Learn;