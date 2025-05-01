//import { Link } from "react-router-dom";
import HomeDescription from "./components/HomeDescription.tsx";
import Card from "./components/Card.tsx";
import { Fragment } from "react";
//import MainButton from "./components/MainButton.tsx";
import GoalTracker from "./components/GoalTracker.tsx";
import FAQ from "./components/FAQ.tsx";
import ProjectsList from "./components/ProjectsList.tsx"
import ArtGallery from "./components/ArtGallery.tsx";
import MessageGallery from "./components/MessageGallery.tsx";
function Home() {
    return (
        <div className="content">
            <div className="standardDiv">
                {/*<div className="tagline">
                    <span id="front">A Digital Billboard Campaign dedicated to Nanashi Mumei</span>
                    <span id="back">A Digital Billboard Campaign dedicated to Nanashi Mumei</span>
                </div>*/}
                <img className="logoImg" id="logoImgMobile" src="/img/moomin-worldwide-full-logo.svg"
                     alt="A Digital Billboard Campaign dedicated to Nanashi Mumei: Moomin' Worldwide"/>
                <img className="logoImg" id="logoImgDesktop" src="/img/moomin-worldwide-horiz-lockup-with-globe.svg"
                     alt="A Digital Billboard Campaign dedicated to Nanashi Mumei: Moomin' Worldwide"/>
                <HomeDescription/>
            </div>
            <ArtGallery />
            <MessageGallery />
            <div className="standardDiv">
                {/*<div className="buttonRow">
                    <MainButton link="https://forms.gle/bEHjHFqBSTtTAvY6A" img="art.svg" text="Contribute Artworks"/>
                    <MainButton link="https://forms.gle/cYhrNWoQjDfBJEH29" img="ph.svg" text="Donate Locally (PH)"/>
                    <MainButton link="https://ko-fi.com/moominmanila/" img="worldmap.svg" text="Donate Internationally"/>
                </div>*/}
                <GoalTracker/>
                <Card text={<Fragment><b>Campaign Ends on April 30, 2025.</b><br/>
                    Excess money depending on what goal was reached, will be donated to HARIBON Foundation, an environmental
                    conservation organization based in the Philippines.</Fragment>}/>
                <FAQ/>
                <Card text={<Fragment>
                    <div className="cardHeader" style={{justifyContent: "center"}}>
                        <span className="cardTitle">CREDITS</span>
                    </div>
                    <p>
                    Project Heads: AwHellNao & acdi33<br/>
                    Graphic Design: jirusus & MananaYT<br/>
                    Main Illustration Animations: bulbaasaurs, chamom0mile, Akkaネン<br/>
                    Motion Graphic Animation: AnAnomalousWriter & Vini Konbini<br/>
                    Logo: Spiritsnare<br/>
                    Website and Website Design: Madekuji-san<br/>
                    External Relations: jellyjelly & せちゃんceej<br/>
                    Financial Team: Yumirix_ & Akiio Tako<br/>
                    Data Assistance: NotKing<br/>
                    Special Thanks: HoloPro Fans PH, Mumei Message Book, VTuber Newsdrop, Starlights PH, Graveyard Shift: A Mori Calliope Fan MeetUp, Project :D, HoomanSendoffs.com, Pong, and everyone who contributed and supported MOOMIN' WORLDWIDE!
                    </p>
                    </Fragment>}/>
                <ProjectsList/>
            </div>
        </div>
    );
}

export default Home;