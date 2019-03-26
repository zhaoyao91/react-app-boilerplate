import React, { useState } from "react";

import useLocales from "../../hooks/useLocales";

const locales = {
  namespace: __filename,
  en: {
    name: "Bob"
  },
  zh: {
    name: "鲍勃"
  }
};

const OtherPage = () => {
  const { Translation } = useLocales(locales);

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>About Other</h1>
      <p>
        <Translation>{t => t("name")}</Translation>
      </p>
      <p onClick={() => setCount(count + 1)}>{count}</p>
    </>
  );
};

export default OtherPage;
