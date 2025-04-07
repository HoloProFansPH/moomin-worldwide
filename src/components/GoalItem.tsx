function GoalItem(props: { goalName: string; goalDescription: string; goalAmount: string; complete?: boolean; ongoing?: boolean }) {
    return(
        <div className={`goalItem ${props.complete ? "complete" : ""}${props.ongoing ? "ongoing" : ""}`}>
            <div className="goalItemLeft">
                <span>
                    {props.complete ? <i className="fas fa-check-circle" /> : <i className="fas fa-trophy" />}
                    <b>{props.goalName}:</b>
                </span>
                <span>{props.goalDescription}</span>
            </div>
            <div className="goalItemRight">
                {props.goalAmount}
            </div>
            {/*<span className="tableLeft"><i className="fas fa-trophy"></i><b>{props.goalName}</b>: {props.goalDescription}</span>*/}
            {/*<span className="tableRight">{props.goalAmount}</span>*/}
        </div>
    )
}

export default GoalItem;