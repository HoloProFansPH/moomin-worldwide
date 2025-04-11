import ProjectItem from "./ProjectItem";

function ProjectsList() {
    return(
        <div className="card">
            <div className="cardHeader">
                <div style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                    <span className="cardTitle">FEATURED PROJECTS</span>
                    <span>More Mumei support fan projects from our friends!</span>
                </div>
            </div>
            <div className="tableFlex">
                <ProjectItem title="🪶 Mumei Message Book" link="https://x.com/MumMessageBook" description="The last physical message book to Mumei"/>
                <ProjectItem title="Project :D 🪶" link="https://twitter.com/Fan_Project_MY" description="30 seconds billboard space in Kuala Lumpur, Malaysia"/>
                <ProjectItem title="Mumei Video Project" link="https://x.com/eln_ight/status/1905590069119123743"/>
                <ProjectItem title="oh hi meetups" link="https://x.com/edgy_tt/status/1905505125520539910"/>
                <ProjectItem title="Mumei Fan Recreation" link="https://twitter.com/jake33w0/status/1905718504155959334"/>
                <ProjectItem title="Hooman Sendoff Projects" link="https://hoomansendoffs.com/"/>
                <ProjectItem title="Mumei Support Projects Megathread" link="https://twitter.com/edgy_tt/status/1907590566482677844"/>
            </div>
        </div>
    );
}
export default ProjectsList;