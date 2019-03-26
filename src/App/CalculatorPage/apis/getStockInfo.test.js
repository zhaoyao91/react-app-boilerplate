import tryToCatch from "try-to-catch";

import getStockInfo from "./getStockInfo";

describe("getStockInfo", () => {
  test("get info of 000002.SZ", async () => {
    const code = "000002.SZ";
    const info = await getStockInfo(code);

    expect(info).toEqual({
      code: "000002.SZ",
      name: "万科A"
    });
  });

  test("get 404 for nonexistent code", async () => {
    const code = "nothing";

    const [err, info] = await tryToCatch(getStockInfo, code);

    expect(info).toBeUndefined();
    expect(err.response.status).toBe(404);
  });
});
