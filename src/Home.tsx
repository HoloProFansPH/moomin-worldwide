//import { Link } from "react-router-dom";
import HomeDescription from "./components/HomeDescription.tsx";
import Card from "./components/Card.tsx";
import { Fragment } from "react";
import MainButton from "./components/MainButton.tsx";
import GoalTracker from "./components/GoalTracker.tsx";
import FAQ from "./components/FAQ.tsx";
import React from "react";
function Home() {
    return (
        <div className="content">
            {/*<div className="tagline">
                <span id="front">A Digital Billboard Campaign dedicated to Nanashi Mumei</span>
                <span id="back">A Digital Billboard Campaign dedicated to Nanashi Mumei</span>
            </div>*/}
            <img id="logoImg" src="/img/moomin worldwide logo with tagline.webp" alt="A Digital Billboard Campaign dedicated to Nanashi Mumei: Moomin' Worldwide"/>
            <HomeDescription />
            <div className="buttonRow">
                <MainButton link="https://forms.gle/bEHjHFqBSTtTAvY6A" img="art.svg" text="Contribute Artworks" />
                <MainButton link="https://forms.gle/cYhrNWoQjDfBJEH29" img="ph.svg" text="Donate Locally (PH)"/>
                <MainButton link="https://ko-fi.com/moominmanila/" img="worldmap.svg" text="Donate Internationally"/>
            </div>
            <GoalTracker />
            <Card text={<Fragment><b>Campaign Ends on April 30, 2025.</b><br />
                Excess money depending on what goal was reached, will be donated to HARIBON Foundation, an environmental conservation organization based in the Philippines.</Fragment>} />
            <FAQ />
        
        </div>
    );
}
export default Home;