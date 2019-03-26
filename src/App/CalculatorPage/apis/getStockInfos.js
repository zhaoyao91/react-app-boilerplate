// @flow

import axios from "axios";
import urlJoin from "url-join";

import { apiServerBaseUrl } from "../../configs";

const url = urlJoin(apiServerBaseUrl, "/codes/");

type StockInfo = {
  code: string,
  name: string
};

async function getStockInfos(): Promise<StockInfo[]> {
  const response = await axios.get(url);
  return response.data;
}

export default getStockInfos;
