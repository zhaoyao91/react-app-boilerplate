// @flow

import { I18nContext } from "react-i18next/dist/es/context";
import { useContext, useMemo } from "react";
import * as React from "react";
import { Translation, useTranslation } from "react-i18next";

type TransMap = {
  [string]: string | TransMap
};

type Args = {
  namespace: string,
  [string]: TransMap
};

/**
 * 优化建议：
 * 内部的 memo 优化对 args 进行浅比较
 * 建议传入静态定义的不变的参数对象
 */
function useLocales(args: Args) {
  const { namespace, ...translation } = args;
  const { i18n } = useContext(I18nContext);

  return useMemo(() => {
    Object.keys(translation).forEach(language => {
      i18n.addResourceBundle(language, namespace, translation[language]);
    });

    function buildTranslationKey(key) {
      return `${namespace}:${key}`;
    }

    function _useTranslation(...args: []) {
      const { t, ...others } = useTranslation(...args);
      return {
        t: (key, ...args) => t(buildTranslationKey(key), ...args),
        ...others
      };
    }

    function _Translation(props: { children: Function }) {
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
  }, [args]);
}

export default useLocales;
