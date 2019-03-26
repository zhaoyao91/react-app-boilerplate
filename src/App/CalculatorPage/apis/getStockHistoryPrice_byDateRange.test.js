import getStockHistoryPrice_byDateRange from "./getStockHistoryPrice_byDateRange";

describe("getStockHistoryPrice_byDateRange", () => {
  test("get data correctly", async () => {
    const code = "000061.SZ";
    const dateRange = ["2019-01-01", "2019-01-04"];
    const items = await getStockHistoryPrice_byDateRange(code, dateRange);
    expect(items).toEqual([
      { date: "2019-01-02", price: 4.67 },
      { date: "2019-01-03", price: 4.65 }
    ]);
  });

  test("there is no date in some date ranges", async () => {
    const code = "000061.SZ";
    const dateRange = ["2019-01-01", "2019-01-02"];
    const items = await getStockHistoryPrice_byDateRange(code, dateRange);
    expect(items).toEqual([]);
  });
});
