import classes from './features.module.css';
import features1 from '../../assests/features1.jpg'
import features2 from '../../assests/features2.jpg'
import features3 from '../../assests/features3.jpg'
import features4 from '../../assests/features4.jpg'

 const Features = () =>{
    return(
        <div id="continue" className='container'>
            <h1 className='text-center mt-5'>Why Choose Us?</h1>
            <div className={`mt-5 ${classes.featurescontainer}`}>
                <div>
                    <h3 className='text-center text-bg-dark'> Interactive lessons</h3>
                    <hr></hr>
                    <img src={features1} width="350" height="150" className='rounded-circle' alt="interactive learning"/>
                    <hr></hr>
                </div>
                <div>
                    <h3 className='text-center text-bg-dark'> quizzes</h3>
                    <hr></hr>
                    <img src={features2} width="350" height="150" className='rounded-circle' alt="interactive learning"/>
                    <hr></hr>

                </div>
                <div>
                    <h3 className='text-center text-bg-dark'> progress tracking</h3>
                    <hr></hr>
                    <img src={features3} width="350" height="150" className='rounded-circle' alt="interactive learning"/>
                    <hr></hr>
                </div>
            </div>
            <div>
                <h2 className='text-center text-bg-dark'>Social Interactions</h2>
                <hr></hr>
                <img src={features4} width="1200" height="300" alt='social interaction' className='rounded'/>
            </div>
        </div>
    )
 }

 export default Features;