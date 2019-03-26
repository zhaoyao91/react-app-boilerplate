// @flow

import axios from "axios";
import urlJoin from "url-join";
import { DateTime } from "luxon";
import qs from "query-string";

import { apiServerBaseUrl } from "../../configs";

// ISODate string, YYYY-MM-DD
type ISODate = string;

// 左闭右开
type DateRange = [ISODate, ISODate];

type DataItem = {
  date: ISODate,
  price: number
};

type Url = string;

function buildUrl(code: string, dateRange: DateRange): Url {
  const startDate = dateRange[0];
  const endDate = DateTime.fromISO(dateRange[1])
    .plus({ days: -1 })
    .toISODate();
  return urlJoin(
    apiServerBaseUrl,
    "/code/",
    code,
    "/history/section/",
    "?" + qs.stringify({ startDate, endDate })
  );
}

async function getStockHistoryPrice_byDateRange(
  code: string,
  dateRange: DateRange
): Promise<DataItem[]> {
  const url = buildUrl(code, dateRange);

  const response = await axios.get(url);

  return response.data;
}

export default getStockHistoryPrice_byDateRange;
