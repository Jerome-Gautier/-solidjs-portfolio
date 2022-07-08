import { setCurrentLibrary } from "./store";

import eng from "./assets/languages/eng.json";
import fr from "./assets/languages/fr.json";


export const handleLibraryChange = (str: string) => {
    switch (str) {
        case "eng":
            setCurrentLibrary(eng);
            break;
        case "fr":
            setCurrentLibrary(fr);
            break;
        default:
            setCurrentLibrary(eng);
    }    
}