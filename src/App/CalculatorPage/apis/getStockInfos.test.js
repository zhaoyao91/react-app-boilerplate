import getStockInfos from "./getStockInfos";

describe("getStockInfos", () => {
  test("get all stock infos", async () => {
    const infos = await getStockInfos();

    expect(Array.isArray(infos)).toBeTruthy();
    expect(infos[0]).toHaveProperty("name");
    expect(infos[0]).toHaveProperty("code");
  });
});
