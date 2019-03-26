// @flow

import { I18nContext } from "react-i18next/dist/es/context";
import { useContext } from "react";
import * as React from "react";
import { Translation, useTranslation } from "react-i18next";

type TransMap = {
  [string]: string | TransMap
};

function defineTranslation(namespace: string, translation: TransMap) {
  let initialized = false;

  function init() {
    // 注意，useContext 必须放在条件判断之外，确保每次都被调用
    // 参考 https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
    const { i18n } = useContext(I18nContext);
    if (!initialized) {
      Object.keys(translation).forEach(language => {
        i18n.addResourceBundle(language, namespace, translation[language]);
      });
      initialized = true;
    }
  }

  function buildTranslationKey(key) {
    return `${namespace}:${key}`;
  }

  function _useTranslation(...args: []) {
    init();
    const { t, ...others } = useTranslation(...args);
    return {
      t: (key, ...args) => t(buildTranslationKey(key), ...args),
      ...others
    };
  }

  function _Translation(props: { children: Function }) {
    init();
    const { children, ...otherProps } = props;
    return (
      <Translation {...otherProps}>
        {(t, ...args) => {
          const tt = key => t(buildTranslationKey(key));
          return children(tt, ...args);
        }}
      </Translation>
    );
  }

  return {
    useTranslation: _useTranslation,
    Translation: _Translation
  };
}

export default defineTranslation;
