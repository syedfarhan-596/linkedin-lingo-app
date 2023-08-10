import classes from './home.module.css';
import logo from '../../assests/logo2.png'
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from "react";
import Joyride from "react-joyride";
const Home =() => {
    const [{ run, steps },] = useState({
        run: true,
        steps: [
          {
            content: <h2>Let's begin our journey!</h2>,
            locale: { skip: <strong>SKIP</strong> },
            placement: "center",
            target: "body"
          },
          {
            content: <h2>This is home page</h2>,
            placement: "bottom",
            target: "#home1",
            title: "First step"
          },
          {
            content: <h2>Continue learning from where you left </h2>,
            placement: "bottom",
            target: "#continue1",
            title: "Second step"
          },
          {
            content: <h2>You can track your learning</h2>,
            placement: "bottom",
            target: "#tracking1",
            title: "Fifth step"
          },
          {
            content: <h2>For any queries you can contact us with this links</h2>,
            placement: "bottom",
            target: "#social1",
            title: "Sixth step"
          },
          {
            content: <h2>See top languages we provide you to learn </h2>,
            placement: "bottom",
            target: "#beinifits1",
            title: "Fourth step"
          },
          {
            content: <h2>Here is fifth step!</h2>,
            placement: "bottom",
            target: "#get1",
            title: "Final step"
          },
        ]
      });
    
    return (
        <Router>
            <div style={{
      height: "100vh",
      display: "flex",
      gap: "8px",
      padding: 10,
      color: "white",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />
        <div>
            <div id="home" className={classes.header}>
                <div className={classes.nav}>
                    <div>
                    
                    <Link href='#'><img className={`mx-2 ${classes.logo}`} src={logo} alt='logo' /></Link>
                    <button  className={`btn btn-dark ${classes.darkmode}`}><span className='bi bi-lightbulb-off'></span></button>
                    </div>
                    
                <nav>
                    <Link id="home1" className='mx-3 text-black h3' to="#home">Home</Link>
                    <Link id="continue1" className='mx-3 text-black h3 ' to="#continue">Continue </Link>
                    <Link id="tracking1" className='mx-3 text-black h3' to="#tracking">Track </Link>
                    <Link id="social1" className='mx-3 text-black h3' to="#social">Social </Link>
                    <Link id="beinifits1" className='mx-3 text-black h3' to="#benifits">Benifits</Link>
                    <Link id="about1" className='mx-3 text-black h3' to="#social">AboutUs</Link>
                </nav>
                <div className={classes.btncontainer}>
                    
                    <button className='btn btn-primary mx-3'>Start Learning</button>
                    {/* <button className='btn btn-primary'><span className='bi bi-globe'></span>Select Language <span className='bi bi-arrow-down'></span></button> */}
                    <div className='btn btn-primary mx-3'>
                    <select className={classes.select}>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Urdu</option>
                    </select>
                    </div>
                </div>
                </div>
            </div>
            <div className={classes.center}>
                <div>
                    <button id="get1" className={`${classes.getbtn} w-100 h1 text-light btn btn-lg btn-info`}>Get Started</button>
                </div>
            </div>

        </div>
        </div>
        </Router>
    )
}
export default Home