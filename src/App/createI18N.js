import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import { mapValues, merge } from "lodash";
import path from "path";

const langKey = "lang";

function loadInitialTranslations() {
  const req = require.context("./locales", true, /\.js$/);
  return merge(
    ...req
      .keys()
      .map(key => [path.basename(key, ".js"), req(key).default])
      .map(([namespace, module]) =>
        mapValues(module, translation => ({ [namespace]: translation }))
      )
  );
}

function createI18N() {
  const instance = i18n.createInstance();
  instance.use(LngDetector).init({
    resources: loadInitialTranslations(),

    fallbackLng: "en",

    interpolation: {
      // react is already safe from xss
      escapeValue: false
    },

    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: langKey,
      lookupLocalStorage: langKey,
      caches: ["localStorage"]
    }
  });
  return instance;
}

export default createI18N;
