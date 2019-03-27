import React from "react";
import { WingBlank } from "antd-mobile";
import { Helmet } from "react-helmet";

import notFoundImg from "./images/404.png";
import ImageCaption from "../../comps/ImageCaption";
import defineTranslation from "../../defineTranslation";

const { useTranslation } = defineTranslation(__filename, {
  en: {
    title: "Page Not Found - $t(app:title)",
    caption: "404 NOT FOUND"
  },
  zh: {
    title: "找不到该页面 - $t(app:title)",
    caption: "找不到该页面"
  }
});

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
      </Helmet>
      <WingBlank style={{ height: "100%" }}>
        <ImageCaption
          src={notFoundImg}
          alt="not found"
          caption={t("caption")}
        />
      </WingBlank>
    </>
  );
}

export default NotFound;
