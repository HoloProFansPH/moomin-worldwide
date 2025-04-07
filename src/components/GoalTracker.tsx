import {useEffect, useState} from "react";
import axios from "axios";
import GoalItem from "./GoalItem.tsx";

function GoalTracker() {
    const [currentGoalName, setCurrentGoalName] = useState("---");
    const [currentGoalPercentage, setCurrentGoalPercentage] = useState(0);
    const [currentGoalPercentageDisplay, setCurrentGoalPercentageDisplay] = useState<string>("-%");
    const [donationAmount, setDonationAmount] = useState(0);
    const [currentCheckpointPHP, setCurrentCheckpointPHP] = useState(1);
    const [deadline, setDeadline] = useState(Date.now());
    //const [currentTime, setCurrentTime] = useState();
    /*const CountdownRenderer = ({ days, hours, minutes, seconds }) => (
        <>
            {days}d {hours}h {minutes}m {seconds}s
        </>
    );*/
    function percentage(number: number){
        return(
            Number(number).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})
        )
    }
    /*function CountdownDisplay() {
        if(deadline != null) {
            return(
                <CountDown date={new Date(deadline)} renderer={CountdownRenderer} />
            );
        }
        else {
            return(<></>);
        }
    }*/
    const Timer = () => {
        //console.log(deadline);
        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);

        const getTime = (deadline: number) => {
            const time = deadline - Date.now();

            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        };

        useEffect(() => {
            const interval = setInterval(() => getTime(deadline), 1000);

            return () => clearInterval(interval);
        }, []);

        return (
            <span>
                {days}d {hours}h {minutes}m {seconds}s
            </span>
        );
    };

    const fetchGoal = async () => {
        try {
            const result = await axios.get(import.meta.env.VITE_API_URL, { headers: { "auth": import.meta.env.VITE_API_AUTH } });
            //console.log(result.data);
            setCurrentGoalName(result.data.currentGoalName);
            setCurrentGoalPercentage(Number(result.data.currentGoalPercentage));
            setCurrentGoalPercentageDisplay(percentage(result.data.currentGoalPercentage));
            setDonationAmount(result.data.donationAmount.toLocaleString(
                undefined, { minimumFractionDigits: 2 }
            ));
            setCurrentCheckpointPHP(result.data.currentCheckpointPHP.toLocaleString(
                undefined, { minimumFractionDigits: 2 }
            ));
            setDeadline(Date.parse(result.data.deadline));
            //setCurrentTime(result.data.currentTime);
            //console.log(deadline)
        } catch (error) {
            console.error('Error fetching:', error);
        }
    };
    useEffect(() => {
        fetchGoal();
        //console.log(import.meta.env.VITE_API_URL);
    }, []);
    useEffect(() => {
        const fetchInterval = setInterval(() => fetchGoal(), 60000);
        return () => clearInterval(fetchInterval);
    }, []);

    return (
        <div className="card">
            <div className="cardHeader">
                <span className="cardTitle">GOAL</span>
                <span id="goalNameDesktop">In Progress: <i>{currentGoalName}</i></span>
                <span className="cardTitle">{currentGoalPercentageDisplay}</span>
            </div>
            <div id="goalMeter">
                <div id="goalMeterComplete" style={{width: currentGoalPercentage*100 + '%'}}>
                </div>
            </div>
            <span id="goalNameMobile">In Progress: <i>{currentGoalName}</i></span>
            <div className="goalMeterData">
                <span><i className="fa fa-clock"></i> {/*{deadline}*/}<Timer />
                </span>
                <span><i className="fa fa-flag-checkered"></i> PHP {donationAmount} / PHP {currentCheckpointPHP}</span>
            </div>
            <div className="tableFlex">
                <GoalItem goalName="Minimum Goal" goalDescription="20-second ad on April 26, 2025" goalAmount="PHP 78,400 ~USD 1,500"/>
                <GoalItem goalName="GOLDEN GOAL" goalDescription="increased to a 30-second ad on April 26, 2025" goalAmount="PHP 117,600 ~USD 2,200"/>
                <GoalItem goalName="BONUS GOAL A" goalDescription="30-second ads on April 26 & 27, 2025" goalAmount="PHP 235,200 ~USD 4,300"/>
                <GoalItem goalName="BONUS GOAL B" goalDescription="30-second ads on April 26, 27 & May 2, 2025" goalAmount="PHP 352,800 ~USD 6,500"/>
                <GoalItem goalName="WE MOOM GOAL" goalDescription="30-second ads for an entire week" goalAmount="PHP 604,800 ~USD 11,000"/>
                    <span className="tableLeft">
                    <b>Notes:</b><br/>The Minimum Goal is due on April 14, 2025 11:59 AM PHT for the the project to comfortably proceed on April 26, 2025. Fans can still donate until April 30, 2025 11:59 AM PHT. Airdate is subject to change depending on airslot availability.
                    </span>

            </div>
        </div>
    );
}

export default GoalTracker;