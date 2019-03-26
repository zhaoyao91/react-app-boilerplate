import React, { useState } from "react";

import defineTranslation from "../../defineTranslation";

const { Translation, useTranslation } = defineTranslation(__filename, {
  en: {
    name: "Bob"
  },
  zh: {
    name: "鲍勃"
  }
});

const OtherPage = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <h1>About Other</h1>
      <p>{t("name")}</p>
      <p>
        <Translation>{t => t("name")}</Translation>
      </p>
      <p onClick={() => setCount(count + 1)}>{count}</p>
    </>
  );
};

export default OtherPage;
