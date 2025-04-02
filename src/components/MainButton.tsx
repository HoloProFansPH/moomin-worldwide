import { ReactElement, JSXElementConstructor } from "react";

function MainButton(props: { img: string; text: string | ReactElement<any, string | JSXElementConstructor<any>>; imgAlt?: string; }) {
    return (
        <div className="mainButton">
            <img height="100%" src={`/svg/${props.img}`} alt={props.imgAlt}/>
            <span>{props.text}</span>
        </div>
    );
}

export default MainButton;