import React, { ComponentType, useContext } from "react";
import { I18NContext } from "./I18NContext";
import { render } from 'micromustache';

export type FunctionTranslate = (key: string, params: any) => string;

export const useI18NTranslate = (): FunctionTranslate => {
    const { resourceData } = useContext(I18NContext);
    return (name: string, params: any) => {
        let text = resourceData[name] || `--${name}--`
        if (params) {
            text = render(text, params);
        }
        return text;
    }
}

type I18NTranslateProps = {
    name: string;
    params?: any;
};

export const I18NTranslate = (props: I18NTranslateProps) => {
    const { name, params } = props;
    const t = useI18NTranslate();
    return <span>{t(name, params)}</span>
}

type AdditionalProps = {
    t: FunctionTranslate;
};

type WrapperProps = object & AdditionalProps;

export const withI18NTranslate = (WrappedComponent: ComponentType<WrapperProps>): ComponentType<WrapperProps> => {
    return (props: WrapperProps) => {
        let t = useI18NTranslate();
        return <WrappedComponent {...props} t={t} />;
    };
};
