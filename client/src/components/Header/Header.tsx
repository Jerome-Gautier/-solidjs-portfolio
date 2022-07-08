import { createSignal, lazy } from 'solid-js';

import "./styles.css";

const Fullview = lazy(() => import("./Fullview/Fullview"));
const Mobileview = lazy(() => import("./Mobileview/Mobileview"));

export default function Header() {
    const [fullMenu, setFullMenu] = createSignal(window.innerWidth > 720 ? true : false);

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight / 2) {
            document.querySelector(".header-outer-container")?.classList.add("fixed");
        } else {
            document.querySelector(".header-outer-container")?.classList.remove("fixed");
        }
    }

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            setFullMenu(true)
        } else {
            setFullMenu(false);
        }
    });

    return (
        <div class={`${scrollY >= 100 && "fixed"} ${!fullMenu() && "mobile"} header-outer-container`}>
            {fullMenu() ? <Fullview /> : <Mobileview />}
        </div>
    )
}