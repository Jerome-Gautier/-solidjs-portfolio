import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@hope-ui/solid';
import { FaSolidPortrait } from 'solid-icons/fa';
import { IoLanguageSharp } from 'solid-icons/io';
import { For } from 'solid-js';

import { currentLang, currentLibrary, setCurrentLang } from '../../store';
import { handleLibraryChange } from '../../utils';

import "./styles.css";

export default function Homepage() {
    const langArray = [
        { label: "English", name: "eng" },
        { label: "French", name: "fr" },
    ];

    const handleLangChange = (obj: any) => {
        setCurrentLang(obj.name);
        handleLibraryChange(obj.name);
    };

    return (
        <div class="homepage-outer-container" id="welcome-section">
            <div class="homepage-inner-container">
                <div class="profile-portrait">
                    <FaSolidPortrait size={240} color="#fff" />
                </div>
                <div class="profile-main">
                    <h2>{currentLibrary()["profile-main"].h2}</h2>
                    <h1>Jérôme Gautier</h1>
                    <p>{currentLibrary()["profile-main"].p1}</p>
                    <br />
                    <p>{currentLibrary()["profile-main"].p2}</p>
                </div>
                <div class="lang-container">
                    <Menu>
                        <MenuTrigger as={Button} colorScheme="info">
                            <IoLanguageSharp size={24} color="#fff" />
                        </MenuTrigger>
                        <MenuContent>
                            <For each={langArray}>{(item) =>
                                <MenuItem disabled={currentLang() === item.name && true} onclick={[handleLangChange, item]}>
                                    <div class={`lang-btn ${item.name === currentLang() && "active"}`}>
                                        <div>{item.label}</div>
                                        <img src={`./src/assets/languages/${item.name}.png`} height="18px" width="auto" />
                                    </div>
                                </MenuItem>
                            }</For>
                        </MenuContent>
                    </Menu>
                </div>
            </div>
        </div>
    )
}