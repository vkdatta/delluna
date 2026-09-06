export const name="lucid_1-chart-candlestick";
export const id="dl_4ebb82042b834c3aa7d5";
export const url=new URL("../icons/lucid_1-chart-candlestick.svg?v=05b5efc368beb2dad812771aa178a9fe07abc3818bad287d4961359519a6c375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
