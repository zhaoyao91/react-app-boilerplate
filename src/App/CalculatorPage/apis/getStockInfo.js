// @flow

import axios from "axios";
import urlJoin from "url-join";

import { apiServerBaseUrl } from "../../configs";

function buildUrl(code) {
  return urlJoin(apiServerBaseUrl, "/code/", code);
}

type StockInfo = {
  code: string,
  name: string
};

async function getStockInfo(code: string): Promise<StockInfo> {
  const url = buildUrl(code);
  const response = await axios.get(url);
  return response.data;
}

export default getStockInfo;
