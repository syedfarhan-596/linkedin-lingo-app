import classes from './tracking.module.css';
const Tracking = () =>{
    return(
        <div id="tracking" className={classes.trackingcontainer}>
            <h1 className="text-center text-muted">Track your learning</h1>
            <div style={{width:"50%",margin:"2%"}}>
                <div>
                    <div className={classes.progressTitle}><h5>Hindi</h5><p>95%</p></div>
                    <progress  min="0" max="100" value="95"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>Telugu</h5><p>90%</p></div>
                    <progress   min="0" max="100" value="90"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>English</h5><p>80%</p></div>
                    <progress   min="0" max="100" value="80"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>urdu</h5><p>80%</p></div>
                    <progress   min="0" max="100" value="80"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>korean</h5><p>70%</p></div>
                    <progress   min="0" max="100" value="70"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>Arabic</h5><p>70%</p></div>
                    <progress   min="0" max="100" value="70"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>Russian</h5><p>80%</p></div>
                    <progress   min="0" max="100" value="80"></progress>
                </div>
                <div>
                    <div className={classes.progressTitle}><h5>Portuguese</h5><p>70%</p></div>
                    <progress   min="0" max="100" value="70"></progress>
                </div>
            </div>
        </div>
    )
}

export default Tracking