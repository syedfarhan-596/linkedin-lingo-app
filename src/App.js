import classes from './App.module.css';
import Home from './components/home/home';
import Features from './components/features/features';
import Learn from './components/learn/learn';
import Footer from './components/footer/footer';
import Benifits from './components/benifits/benifits';
import Tracking from './components/tracking/tracking';
import { useState } from "react"
function App() {
  const [show,setShow] = useState(false)
  const modes = {
    backgroundColor:show?" #121212":"white",
    color:show?"white":"black",
  }
  return (
    <div style={modes} >
      <div className={classes.containerHome} >
        <Home modes={modes} setShow = {setShow} show = {show}/>
      </div>
      <Features />
      <Learn />
        <Benifits />
        <Tracking  />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
