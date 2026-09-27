export const name="lucid_1-chart-candlestick";
export const id="dl_4ebb82042b834c3aa7d5";
export const url=new URL("../icons/lucid_1-chart-candlestick.svg?v=18267f5c6bb47441e81c17d5903963eae360bf800006ad8ca5619e376ba68b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
