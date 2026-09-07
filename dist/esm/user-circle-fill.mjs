export const name="user-circle-fill";
export const id="dl_2297515479d84a40b549";
export const url=new URL("../icons/U/user-circle-fill.svg?v=4e16cdba116195993e6398bb097e7c4b354fb129fafdf2b56fd4b7c069f440d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
