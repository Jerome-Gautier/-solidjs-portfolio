import { AiOutlineLinkedin, AiOutlineCodepen, AiOutlineGithub } from 'solid-icons/ai';
import { FaBrandsFreeCodeCamp } from 'solid-icons/fa';
import { currentLibrary } from '../../../store';

import "./styles.css";

export default function Fullview () {
    return (
        <div class="header-fullview-container">
            <ul class="socials">
                <li>
                    <a class="nostyle" href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gautier-a0020121b/" target='_blank'>
                        <AiOutlineLinkedin size={24} color="#fff" />
                    </a>
                </li>
                <li>
                    <a class="nostyle" href="https://codepen.io/GautierJerome/pens" target='_blank'>
                        <AiOutlineCodepen size={24} color="#fff" />
                    </a>
                </li>
                <li>
                    <a class="nostyle" href="https://www.freecodecamp.org/jgautier" target='_blank'>
                        <FaBrandsFreeCodeCamp size={24} color="#fff" />
                    </a>
                </li>
                <li><a class="nostyle" href="https://github.com/Jerome-Gautier" id="github-link" target='_blank'>
                    <AiOutlineGithub size={24} color="#fff" />
                </a>
                </li>
            </ul>
            <div class="menu-container">
                <ul class="navbar">
                    <li><a class=" menu-btn nostyle" onclick={() => document.getElementById("welcome-section")?.scrollIntoView({ behavior: "smooth" })}>{currentLibrary().navbar.li1}</a></li>
                    <li><a class="menu-btn nostyle" onclick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>{currentLibrary().navbar.li2}</a></li>
                    <li><a class="menu-btn nostyle" onclick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>{currentLibrary().navbar.li3}</a></li>
                    <li><a class="menu-btn nostyle" onclick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>{currentLibrary().navbar.li4}</a></li>
                </ul>
            </div>
        </div>
    )
}