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
                        <span><b>Minimum Goal (due April 14, 2025):</b> 20-second ad on April 26, 2025</span>
                        <span>PHP 78,400 ~ USD 1,500</span>
                    </div>
                    <div className="goalsTableRow">
                        <span><b>Golden Goal:</b> 20-second ad on April 26, 2025</span>
                        <span>PHP 117,600 ~ USD 2,200</span>
                    </div>
                    <div className="goalsTableRow">
                        <span><b>Bonus Goals:</b></span>
                        <span></span>
                    </div>
                    <div className="goalsTableRow">
                        <span>30-second ad on April 26 & 27, 2025</span>
                        <span>PHP 235,200 ~ USD 4,300</span>
                    </div>
                    <div className="goalsTableRow">
                        <span>30-second ad on April 26, 27 & May 2, 2025</span>
                        <span>Php 352,800 ~ USD 6,500</span>
                    </div>
                    <div className="goalsTableRow">
                        <span><b>WE MOOM GOAL:</b> 30-second ads for an entire week</span>
                        <span>PHP 604,800 ~ USD 11,000</span>
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