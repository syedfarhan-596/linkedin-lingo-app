import classes from './App.module.css';
import Home from './components/home/home';
import Features from './components/features/features';
import Learn from './components/learn/learn';
import Footer from './components/footer/footer';
import Benifits from './components/benifits/benifits';
import Tracking from './components/tracking/tracking';
function App() {
  return (
    <div >
      <div className={classes.containerHome} >
        <Home />
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
