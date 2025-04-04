function GoalTracker() {
    return(
        <div className="card">
            <div className="cardHeader">
                <span className="cardTitle">GOAL</span>
                <span>Next Goal: <i>Minimum Goal (due April 14, 2025)</i></span>
                {/*<span className="cardTitle">50%</span>*/}
            </div>
            {/*<meter id="goalMeter"></meter>*/}
            <div className="tableFlex">
                <div className="goalsTableRow">
                    <span className="tableLeft"><b>Minimum Goal (due April 14, 2025 11:59AM PHT):</b> 20-second ad on April 26, 2025</span>
                    <span className="tableRight">PHP 78,400 ~USD 1,500</span>
                </div>
                <div className="goalsTableRow">
                    <span className="tableLeft"><b>GOLDEN GOAL:</b> increased to a 30-second ad on April 26, 2025</span>
                    <span className="tableRight">PHP 117,600 ~USD 2,200</span>
                </div>
                <div className="goalsTableRow">
                    <span className="tableLeft"><b>BONUS GOAL A:</b> 30-second ad on April 26 & 27, 2025</span>
                    <span className="tableRight">PHP 235,200 ~USD 4,300</span>
                </div>
                <div className="goalsTableRow">
                    <span className="tableLeft"><b>BONUS GOAL B:</b> 30-second ad on April 26, 27 & May 2, 2025</span>
                    <span className="tableRight">PHP 352,800 ~USD 6,500</span>
                </div>
                <div className="goalsTableRow">
                    <span className="tableLeft"><b>WE MOOM GOAL:</b> 30-second ads for an entire week</span>
                    <span className="tableRight">PHP 604,800 ~USD 11,000</span>
                </div>
                <div className="goalsTableRow">
                    <span className="tableLeft">
                    <br /><b>Notes:</b><br />The Minimum Goal is due on April 14, 2025 11:59 AM PHT for the the project to comfortably proceed on April 26, 2025. Fans can still donate until April 30, 2025 11:59 AM PHT. Airdate is subject to change depending on airslot availability.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default GoalTracker;