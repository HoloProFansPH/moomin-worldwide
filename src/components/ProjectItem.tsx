function ProjectItem(props: { link: string; title: string; description?: string }) {
    return(
        <a className="projectItem" href={props.link} target="_blank">
            <div className="projectItemText">
                <b><span>{props.title}</span></b>
                <span>{props.description}</span>
            </div>
            <span className="material-symbols-outlined">open_in_new</span>
        </a>
    );
}

export default ProjectItem;