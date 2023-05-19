import { createContext } from 'react';

export interface Language {
    lang: string;
}

interface I18NContextProps {
    language: Language;
    setLanguage: (value: string | Language) => void;
    languages: Language[];
    resourceURL: string;
    resourceReload: () => void,
    resourceData: Record<string, string>;
}

export const assertLanguage = (value: Language | string): Language => {
    if (typeof value === 'string') {
        value = { lang: value };
    }
    return value;
}

export const I18NContext = createContext<I18NContextProps>({
    language: { lang: "en" },
    setLanguage: () => { },
    languages: [],
    resourceURL: '/i18n/{0}.json',
    resourceReload: () => { },
    resourceData: {},
});