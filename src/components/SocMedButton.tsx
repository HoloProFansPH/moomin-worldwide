//import { ReactElement, JSXElementConstructor } from "react";

function SocMedButton(props: { link: string; icon: string; }) {
    return (
        <a className="socmedButton" href={props.link} target="_blank">
            <i className={props.icon}></i>
        </a>
    );
}

export default SocMedButton;