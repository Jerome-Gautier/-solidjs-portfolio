import { currentLibrary } from "../../store";

import "./styles.css";

import icon from "../../assets/favicon.ico";



export default function Homepage() {
    return (
        <div class="footer-outer-container">
            <div class="footer-inner-container">
                <div>{currentLibrary().footer.p1}</div>
                <img src={icon} width="auto" height="20px" />
            </div>
        </div>
    )
}