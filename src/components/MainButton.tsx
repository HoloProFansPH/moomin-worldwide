import { ReactElement, JSXElementConstructor } from "react";

function MainButton(props: { link: string; img: string; text: string | ReactElement<any, string | JSXElementConstructor<any>>; imgAlt?: string; }) {
    return (
        <a className="mainButton" href={props.link} target="_blank">
            <img height="100%" src={`/svg/${props.img}`} alt={props.imgAlt}/>
            <span>{props.text}</span>
        </a>
);
}

export default MainButton;