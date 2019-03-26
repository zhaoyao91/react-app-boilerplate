import React from "react";
import { Translation } from "react-i18next";

const OtherPage = () => (
  <>
    <h1>About Other</h1>
    <p>
      <Translation>{t => t("app:title")}</Translation>
    </p>
  </>
);

export default OtherPage;
