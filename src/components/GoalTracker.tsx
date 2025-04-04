function GoalTracker() {
    return(
        <div className="card">
            <div className="cardHeader">
                <span className="cardTitle">GOAL</span>
                <span>Next Goal: <i>Minimum Goal (due April 14, 2025)</i></span>
                {/*<span className="cardTitle">50%</span>*/}
            </div>
            {/*<meter id="goalMeter"></meter>*/}
            <div className="goals">
                <div id="goalsTable">
                    <div className="goalsTableRow">
                        <span className="tableLeft"><b>Minimum Goal (due April 14, 2025):</b> 20-second ad on April 26, 2025</span>
                        <span className="tableRight">PHP 78,400 ~USD 1,500</span>
                    </div>
                    <div className="goalsTableRow">
                        <span className="tableLeft"><b>Golden Goal:</b> increased to a 30-second ad on April 26, 2025</span>
                        <span className="tableRight">PHP 117,600 ~USD 2,200</span>
                    </div>
                    <div className="goalsTableRow">
                        <span><b>Bonus Goals:</b></span>
                        <span></span>
                    </div>
                    <div className="goalsTableRow">
                        <span className="tableLeft">30-second ad on April 26 & 27, 2025</span>
                        <span className="tableRight">PHP 235,200 ~USD 4,300</span>
                    </div>
                    <div className="goalsTableRow">
                        <span className="tableLeft">30-second ad on April 26, 27 & May 2, 2025</span>
                        <span className="tableRight">PHP 352,800 ~USD 6,500</span>
                    </div>
                    <div className="goalsTableRow">
                        <span className="tableLeft"><b>WE MOOM GOAL:</b> 30-second ads for an entire week</span>
                        <span className="tableRight">PHP 604,800 ~USD 11,000</span>
                    </div>
                    <div className="goalsTableRow">
                        <br />*note: airdate is subject to change depending on airslot availability.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoalTracker;