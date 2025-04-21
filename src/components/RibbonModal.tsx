import { useRef } from 'react';

function RibbonModal(){
    "use client";
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    return(
        <>
            <img id="ribbonButton" onClick={() => dialogRef.current?.showModal()} src="/svg/glass_ribbon.svg"/>
            <dialog className="dialogCard" ref={dialogRef}>
                <div className="cardHeader">
                    <span className="cardTitle">From the team</span>
                    <span className="cardTitle" id="closeButton" onClick={() => dialogRef.current?.close()}>X</span>
                </div>
                <p>
                    On April 10th (Philippine Standard Time), it was reported that a beloved member of the hololive community, Glass (@_SingAlive) passed away. Her enthusiasm and authenticity shined as a member of the KFP and Jailbird communities, and her passion and creativity flowed in her work as an MMD animator.
                    <br /><br />
                    The Moomin' Manila Team wishes to offer our condolences to Glass' bereaved family, friends, and all those who were close to her. We join the rest of the KFPs, Jailbirds, and the hololive community as a whole to grieve and celebrate her life as an artist and a kindred soul.
                    <br /><br />
                    Take care of yourself and one another. If you or someone you know is in crisis, help is available. You may reach out to the following resources for guidance:
                    <br /><br />
                    Philippines: National Center for Mental Health Crisis Hotline (DOH) - 1553 or 1800-1888-1553
                    <br /><br />
                    International: <a href="https://findahelpline.com">findahelpline.com</a> or <a href="https://crisistextline.org">crisistextline.org</a>
                </p>
            </dialog>
        </>
    );
}

export default RibbonModal;