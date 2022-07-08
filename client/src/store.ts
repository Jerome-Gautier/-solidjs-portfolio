import { createSignal } from "solid-js";

export const [currentLang, setCurrentLang] = createSignal<string>("eng");
export const [currentLibrary, setCurrentLibrary] = createSignal<any>();