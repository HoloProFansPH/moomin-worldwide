import React from "react";

function GoalItem(props: { goalName: string; goalDescription: string; goalAmount: string }) {
    return(
        <div className="goalItem">
            <div className="goalItemLeft">
                <span>
                    <i className="fas fa-trophy"></i>
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