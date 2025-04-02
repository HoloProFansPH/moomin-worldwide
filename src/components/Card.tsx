import { ReactElement, JSXElementConstructor } from "react";

function Card(props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>>; }) {
    return(
        <div className="card">
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default Card;