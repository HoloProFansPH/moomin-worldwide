import { ReactElement, JSXElementConstructor } from "react";
import { Fragment } from "react";

function FAQitem(props: {q: string | ReactElement<any, string | JSXElementConstructor<any>>; a: string | ReactElement<any, string | JSXElementConstructor<any>>; }) {
    return (
        <div className="FAQitem">
            <span className="FAQquestion">Q: {props.q}</span>
            <p>A: {props.a}</p>
        </div>
    );
}

function FAQ() {
    return (
        <div className="card">
            <div className="cardHeader">
                <span className="cardTitle">FAQ</span>
            </div>
            <div className="tableFlex">
                <FAQitem q={<Fragment>What is <i>Moomin' Manila?</i></Fragment>} a="Moomin' Manila is a circle dedicated to producing hololive production-themed fan experiences in the Philippines.
We have previously worked on local cupsleeve events such as Moomin' Manila 2023 and Moomin' Manila MARCH
MADNESS. While we are not affiliated with COVER Corp., we will strictly be adhering to their Fan Support
Advertising Guidelines, which are laid out in their Derivative Works Guidelines."/>
                <FAQitem q={<Fragment>How can I support <i>Moomin' Worldwide?</i></Fragment>} a="You can send your donations at moominworldwide.org via our official Ko-fi under ko-fi.com/moominmanila. For fans
residing in the Philippines, you can donate locally via GCASH, MAYA, BDO, and BPI."/>
                <FAQitem q="Can I submit my art for this campaign?" a="You may submit your art via the website. Please note that your art may or may not be featured in the actual advertisement as there are limited slots available.
Should your art not make it to the advertisement in MOA Globe, your art will still appear on the project website."/>
                <FAQitem q="What happens if there are goals that are not reached?" a="In the event that the campaign does not reach its minimum goal or has excess donations, they will be donated to
the HARIBON Foundation — an environmental conservation organization based in the Philippines."/>
                <FAQitem q="Will there be physical events during the campaign?" a="While we cannot guarantee the success of the campaign, fans are welcome to visit the area and share their
experiences with the hashtag #MoominWorldwide🪶. Any announcements regarding gatherings or meet-ups will
be posted on the official Moomin' Manila Twitter (X) and Facebook social media accounts."/>
            </div>
        </div>
    );
}

export default FAQ;