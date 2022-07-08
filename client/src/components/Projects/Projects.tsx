import { createSignal, For } from "solid-js";

import { currentLibrary } from "../../store";

import projectsList from "../../assets/projectsList.json";

import "./styles.css";

export default function Projects() {
    const [category, setCategory] = createSignal("");
    const [selectedProjects, setSelectedProjects] = createSignal(projectsList);
    const projectTags = ["React", "Javascript", "D3"];

    const checkTags = (arr: Array<string>) => {
        let valid = false;
        if (category() !== "") {
            arr.forEach((tag) => {
                if (tag === category()) valid = true;
            });
        } else {
            valid = true
        }
        return valid;
    }

    const handleChangeProjects = (tag: string) => {
        let newArray: any = [];
        if (tag === "") {
            newArray = projectsList;
        } else {
            projectsList.forEach(elem => {
                elem.tags.forEach(str => {
                    if (str === tag) newArray.push(elem);
                });
            });
        }
        setCategory(tag);
        setSelectedProjects(newArray);
    }

    return (
        <div class="projects-outer-container" id="projects">
            <div class="projects-inner-container">
                <div class="section-title-container">
                    <h1>{currentLibrary().projects.title}</h1>
                    <div class="projects-classes">
                        <div onclick={[handleChangeProjects, ""]}>See All</div>
                        <For each={projectTags}>{(tag: string) =>
                            <div class={`${category() === tag && "active"}`} onclick={[handleChangeProjects, tag]}>{tag}</div>
                        }</For>
                    </div>
                </div>
                <div class="slider-container">
                    <For each={selectedProjects()}>{(item: any, index) =>
                        <div class={`project-tile ${!checkTags(item.tags) && "unselected"}`} onMouseEnter={[checkTags, item.tags]} id={`project-${index()}`}>
                            <div class="project-preview">
                                <div class="img-container">
                                    <a href={item.url} target="_blank">
                                        <img src={item.img}
                                            alt="Page Preview" />
                                    </a>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="title-container">
                                    <h3>{item.title}</h3>
                                </div>
                                <div class="tags-container">
                                    <For each={item.tags}>{(tag: string) =>
                                        <div>{tag}</div>
                                    }</For>
                                </div>
                            </div>
                        </div>
                    }</For>
                </div>
            </div>
        </div >
    )
}