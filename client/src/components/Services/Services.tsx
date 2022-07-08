import { BsCheckCircle } from 'solid-icons/bs';
import { FaSolidDatabase, FaSolidLaptopCode, FaSolidTools } from 'solid-icons/fa'
import { currentLibrary } from '../../store';

import "./styles.css";

export default function Services() {
    return (
        <div class="services-outer-container" id="services">
            <div class="services-inner-container">
                <div class="section-title">
                    <h1>{currentLibrary().services["main-title"]}</h1>
                    <div>{currentLibrary().services["description"]}</div>
                </div>
                <div class="services-boxs">
                    <div class="serv">
                        <div class="serv-title-img">
                            <FaSolidLaptopCode size={40} color="#fed136" />
                        </div>
                        <h1>{currentLibrary().services["section1-title"]}</h1>
                        <ul class="skills">
                            <li><BsCheckCircle size={16} color="#fed136" />
                                <p>Html/Css</p>
                            </li>
                            <li>
                                <BsCheckCircle size={16} color="#fed136" />
                                <p>Javascript/Typescript</p>
                            </li>
                            <li>
                                <BsCheckCircle size={16} color="#fed136" />
                                <p>NodeJs</p>
                            </li>
                            <li><BsCheckCircle size={16} color="#fed136" />
                                <p>React/Redux</p>
                            </li>
                            <li><BsCheckCircle size={16} color="#fed136" />
                                <p>SolidJs</p>
                            </li>
                            <li><BsCheckCircle size={16} color="#fed136" />
                                <p>Bootstrap</p>
                            </li>
                            <li><BsCheckCircle size={16} color="#fed136" />
                                <p>Jquery</p>
                            </li>
                        </ul>
                    </div>
                    <div class="serv">
                        <div class="serv-title-img">
                            <FaSolidDatabase size={40} color="#fed136" />
                        </div>
                        <h1>{currentLibrary().services["section2-title"]}</h1>
                        <ul class="skills">
                            <li><BsCheckCircle size={16} color="#fed136" />MongoDB</li>
                            <li><BsCheckCircle size={16} color="#fed136" />MySQL</li>
                        </ul>
                    </div>
                    <div class="serv">
                        <div class="serv-title-img">
                            <FaSolidTools size={40} color="#fed136" />
                        </div>
                        <h1>{currentLibrary().services["section3-title"]}</h1>
                        <ul class="skills">
                            <li><BsCheckCircle size={16} color="#fed136" />Chai/Mocha</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}