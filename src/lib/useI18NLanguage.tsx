import { useContext } from "react";
import { I18NContext } from "./I18NContext";

export const useI18NLanguage = () => {
    const { language } = useContext(I18NContext);
    return language
}

export const useI18NSetLanguage = () => {
    const { setLanguage } = useContext(I18NContext);
    return setLanguage
}

export const useI18NStateLanguage = () => {
    const { language, setLanguage, languages } = useContext(I18NContext);
    return [language, setLanguage, languages]
}