import React, { FC, useEffect, useState } from 'react';
import { Language, I18NContext, assertLanguage } from './I18NContext';

interface I18NProviderProps {
    defaultLanguage?: string;
    languages?: (Language | string)[];
    resourceURL?: string;
    children?: React.ReactNode;
}


export const I18NProvider: FC<I18NProviderProps> = (props) => {
    const {
        defaultLanguage: initLanguage,
        languages: initLanguages = ['en'],
        resourceURL: initResourceURL = '/i18n/{0}.json',
        children,
    } = props;


    const [language, setLanguage] = useState<Language>({ lang: 'en' });
    const [languages, setLanguages] = useState<Language[]>([]);
    const [resourceURL, setResourceURL] = useState(initResourceURL.replace("{0}", "en"));
    const [resourceData, setResourceData] = useState({});

    const setLanguageProxy = (value: Language | string) => {
        let refLanguage = assertLanguage(value);
        let newLanguage = languages.find(it => it.lang === refLanguage.lang);
        if (newLanguage) {
            setLanguage(newLanguage);
            localStorage.setItem('i18n:lang', newLanguage.lang);
        } else {
            console.warn("Not Support: ", refLanguage);
        }
    };

    const resourceReload = () => {
        let newResourceURL = initResourceURL.replace("{0}", language.lang);
        setResourceURL(newResourceURL);
        fetch(newResourceURL, { referrerPolicy: "no-referrer" })
            .then(it => it.json(), err => resourceData)
            .then(setResourceData);
    }
    useEffect(resourceReload, [language])

    useEffect(() => {
        let newLanguage = assertLanguage(localStorage.getItem('i18n:lang') || initLanguage || 'en');
        let newLanguages = initLanguages.map(assertLanguage);
        newLanguage = newLanguages.find(it => it.lang === newLanguage.lang) || newLanguages[0];
        setLanguage(newLanguage);
        setLanguages(newLanguages);
    }, [initLanguage, initLanguages, initResourceURL])

    return (
        <I18NContext.Provider
            value={{
                language,
                setLanguage: setLanguageProxy,
                languages,
                resourceURL,
                resourceReload,
                resourceData,
            }}
        >
            {children}
        </I18NContext.Provider>
    );
}
